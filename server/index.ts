import express from "express";
import type { Request, Response, NextFunction } from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
import crypto from "node:crypto";
import { saveContactMessage } from "./db";
import { validateContactPayload } from "./validate";

const app = express();
const PORT = process.env.PORT ?? 8787;
const IS_PROD = process.env.NODE_ENV === "production";

// Trust the first proxy hop (needed for correct client IP / rate limiting
// behind a load balancer such as Vercel/Render/Nginx). Do NOT set to `true`
// (trust all hops) — that would let a client spoof X-Forwarded-For.
app.set("trust proxy", 1);

// ---------------------------------------------------------------------------
// 1. Security headers (Helmet) — CSP, HSTS, X-Content-Type-Options,
//    Referrer-Policy, frame-ancestors, etc. This is the AUTHORITATIVE CSP;
//    the <meta> tag in index.html is only a fallback for static hosting.
// ---------------------------------------------------------------------------
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"], // no 'unsafe-inline', no 'unsafe-eval' — blocks injected <script> and inline handlers
        // 'unsafe-inline' here only covers CSS (not JS) — needed because some
        // build tools inject inline <style> tags. Inline CSS cannot execute
        // script, so this is a much lower-risk relaxation than allowing it
        // for scriptSrc, which we never do.
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        imgSrc: ["'self'", "data:", "https:"],
        connectSrc: ["'self'"],
        objectSrc: ["'none'"],
        baseUri: ["'self'"],
        formAction: ["'self'"],
        frameAncestors: ["'none'"], // clickjacking protection (also covered by X-Frame-Options below)
        upgradeInsecureRequests: [],
      },
    },
    referrerPolicy: { policy: "strict-origin-when-cross-origin" },
    hsts: { maxAge: 31536000, includeSubDomains: true, preload: true },
    crossOriginResourcePolicy: { policy: "same-origin" },
    crossOriginOpenerPolicy: { policy: "same-origin" },
  })
);

// Helmet sets X-Content-Type-Options: nosniff by default. Add the remaining
// legacy header explicitly for defense-in-depth on older browsers/proxies.
app.use((_req: Request, res: Response, next: NextFunction) => {
  res.setHeader("X-XSS-Protection", "0"); // modern guidance: rely on CSP, explicitly disable the legacy (buggy) XSS auditor
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("Permissions-Policy", "geolocation=(), camera=(), microphone=()");
  next();
});

app.use(express.json({ limit: "20kb" })); // small limit: contact form only, blocks oversized payload DoS
app.use(cookieParser());

// ---------------------------------------------------------------------------
// 2. CORS — same-origin only. We do not add permissive CORS headers; the
//    frontend is served from the same origin as this API in production.
// ---------------------------------------------------------------------------
const ALLOWED_ORIGIN = process.env.PUBLIC_ORIGIN ?? "http://localhost:5173";
app.use((req: Request, res: Response, next: NextFunction) => {
  const origin = req.headers.origin;
  if (origin === ALLOWED_ORIGIN) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
  }
  next();
});

// ---------------------------------------------------------------------------
// 3. Rate limiting — protects the contact endpoint and CSRF issuance from
//    brute force / spam / basic DoS.
// ---------------------------------------------------------------------------
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Muitas tentativas. Tente novamente mais tarde." },
});

// ---------------------------------------------------------------------------
// 4. CSRF protection — double-submit cookie pattern.
//    GET /api/csrf-token sets a readable csrf_token cookie. Every
//    state-changing request must echo that value in X-CSRF-Token, AND the
//    Origin header must match our own origin. Both checks must pass.
// ---------------------------------------------------------------------------
app.get("/api/csrf-token", (_req: Request, res: Response) => {
  const token = crypto.randomBytes(32).toString("hex");
  res.cookie("csrf_token", token, {
    httpOnly: false, // must be readable by JS to echo back in the header — this is intentional for double-submit
    secure: IS_PROD, // HTTPS only in production
    sameSite: "strict",
    path: "/",
    maxAge: 2 * 60 * 60 * 1000,
  });
  res.status(204).end();
});

function verifyCsrf(req: Request, res: Response, next: NextFunction) {
  const cookieToken = req.cookies?.csrf_token;
  const headerToken = req.header("X-CSRF-Token");

  if (!cookieToken || !headerToken || cookieToken !== headerToken) {
    return res.status(403).json({ error: "Falha na verificação de segurança (CSRF). Recarregue a página e tente novamente." });
  }

  // Second, independent layer: validate Origin (fallback to Referer) against
  // our known origin. Blocks cross-site form submissions even in the
  // unlikely case a token were leaked.
  const origin = req.header("Origin") ?? req.header("Referer");
  if (!origin || !origin.startsWith(ALLOWED_ORIGIN)) {
    return res.status(403).json({ error: "Origem da requisição não permitida." });
  }

  next();
}

// ---------------------------------------------------------------------------
// 5. Contact endpoint — validated, sanitized, parameterized storage.
// ---------------------------------------------------------------------------
app.post("/api/contact", contactLimiter, verifyCsrf, async (req: Request, res: Response) => {
  // NEVER trust client-side validation — repeat it here, server-side, as the source of truth.
  const result = validateContactPayload(req.body);
  if (!result.ok) {
    // `result` is narrowed to the { ok: false; errors } branch here, so this is safe.
    return res.status(400).json({ error: "Dados inválidos.", fields: result.errors });
  }

  // Honeypot check — real users never fill this field.
  if (req.body?.company) {
    // Respond as if successful to avoid tipping off bots, but drop the message.
    return res.status(200).json({ ok: true });
  }

  try {
    // SQL injection prevention: saveContactMessage() uses a PARAMETERIZED
    // query ($1, $2, ...) via the pg driver — the raw values are NEVER
    // concatenated into the SQL string. See server/db.ts.
    await saveContactMessage(result.data);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("contact save failed", err); // log server-side only — never return internals to the client
    return res.status(500).json({ error: "Não foi possível salvar sua mensagem. Tente novamente." });
  }
});

// Fallback 404 for unknown API routes (the SPA itself handles unknown
// frontend routes with its own custom 404 page, see src/pages/NotFoundPage.tsx)
app.use("/api", (_req: Request, res: Response) => {
  res.status(404).json({ error: "Rota não encontrada." });
});

app.listen(PORT, () => {
  console.log(`API listening on :${PORT}`);
});
