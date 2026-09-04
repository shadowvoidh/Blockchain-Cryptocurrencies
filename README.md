# Guia Cripto — Blockchain & Bitcoin (React + TypeScript + Tailwind)

Site educacional em duas trilhas — **Blockchain** (tema dourado/preto) e **Bitcoin**
(tema roxo/azul escuro) — construído a partir do conteúdo do PDF de referência
(Blockchain e Criptomoedas, Jonatan Natan, Luiz Felipe, Pedro Carnio).

**100% estático — sem backend, sem banco de dados.** O formulário de contato
envia direto do navegador para o [Web3Forms](https://web3forms.com), um serviço
gratuito de recebimento de formulários. Isso significa que o site inteiro pode
ser hospedado em qualquer host de arquivos estáticos (Vercel, Netlify, GitHub
Pages, Railway static, Cloudflare Pages...) sem precisar manter servidor nem
banco de dados no ar.

## Stack

- **React 18 + TypeScript** — componentes funcionais, tipados
- **Tailwind CSS** — estilização, dois design tokens de tema (`chain-*`, `coin-*`)
- **React Router** — rotas client-side + página 404 customizada
- **react-helmet-async** — `<title>`/meta tags únicos por página
- **DOMPurify** — sanitização de qualquer HTML renderizado
- **Web3Forms** — recebimento do formulário de contato sem backend próprio

## Estrutura de pastas

```
blockchain-bitcoin-edu/
├── index.html                     # Entry HTML: CSP, favicons, fonts, meta padrão
├── vite.config.ts                 # Config do Vite (alias @/)
├── tailwind.config.ts             # Paleta/tema (chain-* dourado, coin-* roxo) e fontes
├── tsconfig.json / tsconfig.node.json
├── vercel.json                    # Headers de segurança + SPA rewrite (deploy na Vercel)
├── package.json
├── .env.example                   # VITE_WEB3FORMS_ACCESS_KEY (copie para .env)
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
└── src/
    ├── main.tsx                   # Bootstrap: StrictMode, ErrorBoundary, HelmetProvider, Router
    ├── App.tsx                    # Definição de rotas + lazy loading + CookieBanner global
    ├── index.css                  # Tailwind layers + acessibilidade (focus-visible, reduced motion)
    ├── vite-env.d.ts              # Tipagem da env var VITE_WEB3FORMS_ACCESS_KEY
    │
    ├── components/
    │   ├── layout/
    │   │   ├── Header.tsx         # Nav com tema (blockchain/bitcoin/neutral)
    │   │   ├── Footer.tsx         # Links legais + endereço real de contato (item 19)
    │   │   ├── StickyMobileCTA.tsx# CTA fixo no rodapé, só mobile (item 11)
    │   │   ├── CookieBanner.tsx   # Banner de cookies / consentimento (item 17)
    │   │   ├── SEO.tsx            # <title>/description/OG por página (itens 3, 4, 5)
    │   │   └── ErrorBoundary.tsx  # Fallback seguro para erros de render
    │   └── ui/
    │       ├── Button.tsx         # Botão com estado de loading (item 12)
    │       ├── Card.tsx           # Cartão de conteúdo, tema-aware
    │       ├── FormField.tsx      # Campo de formulário acessível com estado de erro (item 13)
    │       └── Loader.tsx         # Spinner + skeleton (item 12)
    │
    ├── pages/
    │   ├── HomePage.tsx           # Tela inicial: 2 opções acima da dobra (item 2)
    │   ├── BlockchainPage.tsx     # Trilha Blockchain (dourado/preto)
    │   ├── BitcoinPage.tsx        # Trilha Bitcoin (roxo/azul escuro)
    │   ├── ContactPage.tsx        # Formulário → Web3Forms, validação + sanitização
    │   ├── ThankYouPage.tsx       # item 14
    │   ├── PrivacyPolicyPage.tsx  # item 15
    │   ├── TermsPage.tsx          # item 16
    │   └── NotFoundPage.tsx       # item 1 (404 customizada)
    │
    ├── lib/
    │   ├── sanitize.ts            # DOMPurify — sanitização de HTML/texto
    │   ├── validate.ts            # Validação do formulário (client-side)
    │   ├── webform.ts             # Envio do formulário direto ao Web3Forms
    │   └── analytics.ts           # Analytics só carrega após consentimento (item 18)
    │
    ├── hooks/
    │   └── useCookieConsent.ts    # Estado de consentimento (localStorage) + trigger de analytics
    │
    └── types/
        └── index.ts               # Tipos compartilhados (Theme, ContactFormValues, etc.)
```

## Configurando o formulário de contato (Web3Forms)

1. Acesse **https://web3forms.com**, informe seu e-mail — eles te mandam uma
   *access key* na hora, sem precisar criar conta/senha.
2. Copie `.env.example` para `.env` e cole a chave em `VITE_WEB3FORMS_ACCESS_KEY`.
3. Depois de publicar com um domínio real, entre no painel do Web3Forms e
   restrinja a chave a esse domínio (**Settings → Allowed Domains**) — isso
   impede que outro site use sua chave e consuma sua cota de envios.
4. Configure a mesma variável de ambiente (`VITE_WEB3FORMS_ACCESS_KEY`) no
   painel do seu host (Vercel/Netlify/Railway) antes do build de produção —
   ela precisa existir *no momento do build*, porque o Vite embute variáveis
   `VITE_*` no bundle estático.

Sem essa chave configurada, o formulário mostra um erro amigável ("O
formulário de contato ainda não foi configurado") em vez de falhar
silenciosamente — ver `src/lib/webform.ts`.

## Rodando localmente

```bash
npm install
cp .env.example .env   # depois cole sua chave do Web3Forms
npm run dev            # http://localhost:5173
```

Build de produção:

```bash
npm run build     # gera /dist
npm run preview   # serve /dist localmente para conferência
```

## Deploy

Qualquer host de arquivos estáticos funciona. Build command: `npm run build`.
Output directory: `dist`. Não esqueça de configurar a variável de ambiente
`VITE_WEB3FORMS_ACCESS_KEY` no painel do host antes do build.

- **Vercel/Netlify**: detectam Vite automaticamente; `vercel.json` e
  `public/_headers` já configuram os headers de segurança e o fallback de SPA.
- **Railway**: se o serviço estiver marcado como "Unexposed", vá em
  **Settings → Networking → Generate Domain** para publicar a URL.

## Segurança implementada

| Ameaça | Onde | Como |
|---|---|---|
| **XSS** | `src/lib/sanitize.ts`, todas as páginas | React escapa `{children}` por padrão — nenhum componente usa `dangerouslySetInnerHTML` com dado do usuário. Quando HTML rico é inevitável (conteúdo de CMS confiável), passa por `DOMPurify` com allow-list estrita. A CSP em `index.html`/`vercel.json`/`public/_headers` bloqueia `<script>` inline. |
| **Spam no formulário** | `src/pages/ContactPage.tsx`, `src/lib/webform.ts` | Honeypot próprio (`company`, campo escondido) + honeypot do Web3Forms (`botcheck`) + filtro de spam do lado deles. |
| **Validação de input** | `src/lib/validate.ts` | Tamanho máximo, formato de e-mail, normalização de texto antes do envio. Como não há backend próprio, a validação "de verdade" (contra abuso malicioso, não só UX) é feita pelo Web3Forms do lado deles. |
| **Output** | Componentes React | Toda saída dinâmica passa pelo escaping automático do JSX; nada é injetado como HTML bruto. |
| **Headers** | `vercel.json`, `public/_headers` | `Content-Security-Policy`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy`, `Strict-Transport-Security`, `Permissions-Policy`. |
| **Chave exposta no client** | `src/lib/webform.ts` | A *access key* do Web3Forms é pública por design (como uma site key de reCAPTCHA) — a proteção real vem de restringi-la ao seu domínio no painel deles, não de escondê-la. |

> **Precisa de mais controle?** Se no futuro você quiser salvar as mensagens
> no seu próprio banco, mandar e-mails do seu próprio domínio, ou adicionar
> autenticação, o caminho é voltar a um backend próprio (Node/Express com
> CSRF, rate limiting e Postgres via query parametrizada) — é só trocar o
> conteúdo de `src/lib/webform.ts` pela chamada ao seu endpoint. Posso montar
> essa versão de novo a qualquer momento.

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
19. Endereço de contato real → `src/components/layout/Footer.tsx` (`<address>`)

## Observação de conteúdo

Este site tem finalidade **educacional**. Nenhuma página constitui recomendação
de investimento — isso está explícito em `BitcoinPage.tsx` e em `TermsPage.tsx`.
