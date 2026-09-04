# Guia Cripto — Blockchain & Bitcoin (React + TypeScript + Tailwind)

Site educacional em duas trilhas — **Blockchain** (tema dourado/preto) e **Bitcoin**
(tema roxo/azul escuro) — construído a partir do conteúdo do PDF de referência
(Blockchain e Criptomoedas, Jonatan Natan, Luiz Felipe, Pedro Carnio).

## Stack

- **React 18 + TypeScript** — componentes funcionais, tipados
- **Tailwind CSS** — estilização, dois design tokens de tema (`chain-*`, `coin-*`)
- **React Router** — rotas client-side + página 404 customizada
- **react-helmet-async** — `<title>`/meta tags únicos por página
- **DOMPurify** — sanitização de qualquer HTML renderizado
- **Express** (`/server`) — API mínima para o formulário de contato, com CSRF,
  rate limiting e headers de segurança (exemplo de backend; troque por sua
  stack se preferir Next.js/Nest/etc — os princípios de segurança são os mesmos)

## Estrutura de pastas

```
blockchain-bitcoin-edu/
├── index.html                     # Entry HTML: CSP de fallback, favicons, fonts, meta padrão
├── vite.config.ts                 # Config do Vite (alias @/, proxy /api em dev)
├── tailwind.config.ts             # Paleta/tema (chain-* dourado, coin-* roxo) e fontes
├── tsconfig.json / tsconfig.node.json
├── vercel.json                    # Headers de segurança + SPA rewrite (deploy na Vercel)
├── package.json
├── .env.example                   # Variáveis de ambiente do backend (copie para .env)
│
├── public/                        # Arquivos estáticos servidos na raiz do site
│   ├── favicon.ico, favicon-16x16.png, favicon-32x32.png,
│   │   apple-touch-icon.png, android-chrome-192x192.png,
│   │   android-chrome-512x512.png     # Conjunto completo de favicons (item 6)
│   ├── site.webmanifest           # Manifest PWA (ícones, cor de tema)
│   ├── og-image-default.png       # Imagem Open Graph da home (item 5)
│   ├── og-image-blockchain.png    # Imagem Open Graph da página Blockchain
│   ├── og-image-bitcoin.png       # Imagem Open Graph da página Bitcoin
│   ├── images/
│   │   ├── blockchain-network-diagram.png   # Ilustração usada na página Blockchain
│   │   └── bitcoin-transaction-flow.png     # Ilustração usada na página Bitcoin
│   ├── robots.txt                 # item 7
│   ├── sitemap.xml                # item 8
│   ├── _headers                   # Headers de segurança para hosts estilo Netlify
│   └── _redirects                 # Fallback de SPA para hosts estilo Netlify
│
├── src/
│   ├── main.tsx                   # Bootstrap: StrictMode, ErrorBoundary, HelmetProvider, Router
│   ├── App.tsx                    # Definição de rotas + lazy loading + CookieBanner global
│   ├── index.css                  # Tailwind layers + acessibilidade (focus-visible, reduced motion)
│   ├── vite-env.d.ts
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx         # Nav com tema (blockchain/bitcoin/neutral)
│   │   │   ├── Footer.tsx         # Rodape com Dados 
│   │   │   ├── StickyMobileCTA.tsx# CTA fixo no rodapé, só mobile (item 11)
│   │   │   ├── CookieBanner.tsx   # Banner de cookies / consentimento (item 17)
│   │   │   ├── SEO.tsx            # <title>/description/OG por página (itens 3, 4, 5)
│   │   │   └── ErrorBoundary.tsx  # Fallback seguro para erros de render
│   │   └── ui/
│   │       ├── Button.tsx         # Botão com estado de loading (item 12)
│   │       ├── Card.tsx           # Cartão de conteúdo, tema-aware
│   │       ├── FormField.tsx      # Campo de formulário acessível com estado de erro (item 13)
│   │       └── Loader.tsx         # Spinner + skeleton (item 12)
│   │
│   ├── pages/
│   │   ├── HomePage.tsx           # Tela inicial: 2 opções acima da dobra (item 2)
│   │   ├── BlockchainPage.tsx     # Trilha Blockchain (dourado/preto)
│   │   ├── BitcoinPage.tsx        # Trilha Bitcoin (roxo/azul escuro)
│   │   ├── ContactPage.tsx        # Formulário com CSRF + validação + sanitização
│   │   ├── ThankYouPage.tsx       # item 14
│   │   ├── PrivacyPolicyPage.tsx  # item 15
│   │   ├── TermsPage.tsx          # item 16
│   │   └── NotFoundPage.tsx       # item 1 (404 customizada)
│   │
│   ├── lib/
│   │   ├── sanitize.ts            # DOMPurify — sanitização de HTML/texto
│   │   ├── validate.ts            # Validação client-side (espelha server/validate.ts)
│   │   ├── csrf.ts                # Double-submit cookie: obtém e anexa X-CSRF-Token
│   │   └── analytics.ts           # Analytics só carrega após consentimento (item 18)
│   │
│   ├── hooks/
│   │   └── useCookieConsent.ts    # Estado de consentimento (localStorage) + trigger de analytics
│   │
│   └── types/
│       └── index.ts               # Tipos compartilhados (Theme, ContactFormValues, etc.)
│
└── server/                        # Backend de exemplo (Node/Express) para o formulário
    ├── index.ts                   # Helmet (CSP/HSTS/headers), CORS same-origin, rate limit,
    │                               # emissão/verificação de CSRF, rota /api/contact
    ├── validate.ts                # Validação SERVER-SIDE (fonte da verdade — nunca confia no client)
    └── db.ts                      # Camada de dados com QUERIES PARAMETRIZADAS (exemplo node-postgres)
```

## Rodando localmente

```bash
npm install

# Frontend (Vite dev server em :5173, com proxy /api -> :8787)
npm run dev

# Backend de exemplo (Express em :8787) — em outro terminal
cp .env.example .env
npm run server
```

Build de produção:

```bash
npm run build     # gera /dist
npm run preview   # serve /dist localmente para conferência
```

## Segurança implementada

| Ameaça | Onde | Como |
|---|---|---|
| **SQL Injection** | `server/db.ts` | Todas as queries usam placeholders parametrizados (`$1, $2...`), nunca concatenação de string. Se usar ORM (Prisma/Drizzle/Knex), use o query builder — nunca `raw()` com interpolação. |
| **XSS** | `src/lib/sanitize.ts`, todas as páginas | React escapa `{children}` por padrão — nenhum componente usa `dangerouslySetInnerHTML` com dado do usuário. Quando HTML rico é inevitável (conteúdo de CMS confiável), passa por `DOMPurify` com allow-list estrita. CSP em `index.html` **e** em `server/index.ts` bloqueia `<script>` inline. |
| **CSRF** | `src/lib/csrf.ts` + `server/index.ts` | Padrão *double-submit cookie*: cookie `csrf_token` legível por JS + header `X-CSRF-Token` obrigatório em toda requisição que muda estado, **e** validação do header `Origin`/`Referer` no servidor. |
| **Input do servidor** | `server/validate.ts` | Validação e sanitização (tamanho, tipo, caracteres de controle) ocorrem no servidor, independente do que o client mandar — o client nunca é fonte da verdade. |
| **Output** | Componentes React | Toda saída dinâmica passa pelo escaping automático do JSX; nada é injetado como HTML bruto. |
| **Headers** | `server/index.ts` (Helmet), `vercel.json`, `public/_headers` | `Content-Security-Policy`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy`, `Strict-Transport-Security`, `Permissions-Policy`. `X-XSS-Protection` é explicitamente desabilitado (`0`) — é uma proteção legada e obsoleta; a CSP é quem faz esse trabalho hoje. |
| **Cookies** | `server/index.ts` | Cookie de sessão (quando adicionado) deve ser `HttpOnly` + `Secure` + `SameSite=Strict`. O cookie `csrf_token` é intencionalmente **não** `HttpOnly` (o JS precisa lê-lo para ecoar no header) — esse é o único cookie legível por design. |
| **Rate limiting / spam** | `server/index.ts` | `express-rate-limit` no endpoint de contato; honeypot (`company`) no formulário. |



## Checklist de entrega (itens solicitados)

1. Página 404 customizada → `src/pages/NotFoundPage.tsx`
2. CTA acima da dobra → `src/pages/HomePage.tsx` (duas opções full-height, sem scroll)
3. Meta title por página → `src/components/layout/SEO.tsx`, usado em cada página
4. Meta description por página → idem
5. Imagem Open Graph → `public/og-image-*.png` + `<meta property="og:image">`
6. Conjunto de favicons → `public/favicon*.png`, `favicon.ico`, `site.webmanifest`
7. `robots.txt` → `public/robots.txt`
8. `sitemap.xml` → `public/sitemap.xml`
9. Alt text em toda imagem → ver `<img alt=...>` em `BlockchainPage.tsx` / `BitcoinPage.tsx`
10. Breakpoints mobile → classes `sm:`/`md:` do Tailwind em todos os componentes
11. CTA fixo mobile → `src/components/layout/StickyMobileCTA.tsx`
12. Estados de loading → `Button` (`isLoading`), `Loader`/`SkeletonBlock`, `Suspense` em `App.tsx`
13. Estados de erro em formulário → `FormField` (`aria-invalid`, mensagem `role="alert"`) em `ContactPage.tsx`
14. Página de agradecimento → `src/pages/ThankYouPage.tsx`
15. Política de Privacidade → `src/pages/PrivacyPolicyPage.tsx`
16. Termos de Uso → `src/pages/TermsPage.tsx`
17. Banner de cookies → `src/components/layout/CookieBanner.tsx`
18. Analytics instalado → `src/lib/analytics.ts` (só carrega após consentimento)


## Observação de conteúdo

Este site tem finalidade **educacional**. Nenhuma página constitui recomendação
de investimento — isso está explícito em `BitcoinPage.tsx` e em `TermsPage.tsx`.
