<div align="center">

# 💱 Guia Cripto   Blockchain & Bitcoin

### ⚠️Aviso Legal

## Este site possui finalidade exclusivamente educacional. Todo o conteúdo disponibilizado não constitui aconselhamento financeiro, recomendação de investimento ou incentivo à compra de ativos digitais.

### Plataforma educacional e interativa sobre fundamentos da Web3 e Criptomoedas

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Status](https://img.shields.io/badge/Status-Online-brightgreen?style=for-the-badge)](#)

<br />

[![Acessar Projeto](https://img.shields.io/badge/Acessar_Site-7C3AED?style=for-the-badge&logo=bitcoin&logoColor=white)](https://blockchain-cryptocurrencies-production.up.railway.app/)

<p align="center">
  Construído a partir do conteúdo do PDF de referência:<br />
  <strong>"Blockchain e Criptomoedas"  Pedro Carnio</strong>
</p>

</div>

---

## 📖 Sobre o Projeto

O **Guia Cripto** é uma aplicação web educacional desenvolvida para desmistificar o funcionamento da tecnologia **Blockchain** e da rede **Bitcoin**. O site é dividido em duas trilhas interativas independentes, cada uma com identidade visual e paleta de cores próprias:

- 🔗 **Trilha 01 — Blockchain** (Tema Dourado e Preto / `chain-*`): Focada em livro-razão distribuído, imutabilidade, descentralização e casos de uso enterprise.
- 🪙 **Trilha 02 — Bitcoin** (Tema Roxo e Azul Escuro / `coin-*`): Navegação em etapas/telas abordando a criação por Satoshi Nakamoto, conceitos chave, fluxo de transação em 7 passos, vantagens e desafios.

---

## ✨ Funcionalidades e Destaques

- **Navegação Interativa por Etapas:** A trilha do Bitcoin permite alternar dinamicamente entre conteúdos com animações suaves de transição.
- **Mapeamento do Site (`/sitemap`):** Página dedicada para visualização rápida da arquitetura e das seções do projeto.
- **Design System com Design Tokens:** Dois temas totalmente isolados configurados nativamente via Tailwind CSS.
- **Acessibilidade & UX:** Suporte a `focus-visible`, navegação por teclado, leitor de tela (`aria-*`), atalhos de pulo de conteúdo e suporte a `prefers-reduced-motion`.
- **Conformidade LGPD:** Banner de consentimento de cookies dinâmico que gerencia a inicialização dos scripts de Analytics.
- **Formulário Seguro de Contato:** Sanitização de dados no cliente (`DOMPurify`) e integração direta com Web3Forms sem necessidade de backend próprio.

---

## 🛠️ Tech Stack

- **Core:** React 18, TypeScript, Vite
- **Estilização:** Tailwind CSS, Lucide React (ícones)
- **Roteamento:** React Router DOM (v6) com carregamento sob demanda (`React.lazy` + `Suspense`)
- **SEO & Head Management:** `react-helmet-async` (meta tags dinâmicas por página e Open Graph)
- **Segurança & Formulários:** DOMPurify, Web3Forms API

---

## 💻 Como Rodar o Projeto Localmente

### Pré-requisitos
- Node.js (v18 ou superior)
- Gerenciador de pacotes `npm` ou `yarn`

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/shadowvoidh/Blockchain-Cryptocurrencies.git](https://github.com/shadowvoidh/Blockchain-Cryptocurrencies.git)
   cd Blockchain-Cryptocurrencies

    Instale as dependências:
    npm install

    Configure as variáveis de ambiente:
    Crie um arquivo .env na raiz do projeto baseado no .env.example:

    Bash
    cp .env.example .env
    Adicione sua chave de acesso do Web3Forms no .env:

    Snippet de código
    VITE_WEB3FORMS_ACCESS_KEY=sua_chave_aqui
    Inicie o servidor de desenvolvimento:

    Bash
    npm run dev
    Acesse a aplicação em http://localhost:5173.


#📁 Estrutura de Pastas
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


## 🌘Autor
* **Shadow_Voidh** - (https://github.com/shadowvoidh)

## 📬 Contato
* **GitHub:** [@shadowvoidh](https://github.com/shadowvoidh)
* **Instagram:** [@shadow_voidh](https://www.instagram.com/shadow_voidh/)
* **LinkedIn:** [Pedro Carnio](https://linkedin.com/in/pedrocarnio)
* **Discord:** shadow_voidh
* **E-mail:** shadow.voidh@gmail.com

