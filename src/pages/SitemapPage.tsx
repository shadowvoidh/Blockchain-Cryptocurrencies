import { Link } from "react-router-dom";
import SEO from "@/components/layout/SEO";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function SitemapPage() {
  const siteStructure = [
    {
      title: "Página Inicial",
      path: "/",
      description: "Ponto de entrada do site com apresentação e escolha das trilhas educacionais.",
      badge: "Início",
      badgeColor: "border-slate-700 text-slate-300 bg-slate-800/50",
      sections: [
        "Seleção da Trilha 01 (Blockchain)",
        "Seleção da Trilha 02 (Bitcoin)",
      ],
    },
    {
      title: "Trilha 01 — Blockchain",
      path: "/blockchain",
      description: "Guia interativo passo a passo sobre a tecnologia de livro-razão distribuído.",
      badge: "Trilha 01",
      badgeColor: "border-chain-gold/40 text-chain-gold bg-chain-gold/10",
      sections: [
        "Tela 1: O que é Blockchain? (Conceito e Diagrama de Blocos)",
        "Tela 2: Vantagens (Confiança, Segurança e Rastreabilidade)",
        "Tela 3: Exemplos de Aplicações (Saúde, Pagamentos, Smart Contracts)",
      ],
    },
    {
      title: "Trilha 02 — Bitcoin",
      path: "/bitcoin",
      description: "Guia dinâmico focado na primeira criptomoeda descentralizada do mundo.",
      badge: "Trilha 02",
      badgeColor: "border-coin-violet/40 text-coin-violet bg-coin-violet/10",
      sections: [
        "Tela 1: O que é Bitcoin? (Satoshi Nakamoto)",
        "Tela 2: Conceitos Principais (Descentralização, Mineração, Criptografia)",
        "Tela 3: Como Funciona uma Transação (Fluxo em 7 Passos)",
        "Tela 4: Aplicações Práticas, Vantagens e Desafios",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-black text-slate-100">
      <SEO
        title="Mapeamento do Site — Guia Cripto"
        description="Confira a estrutura completa de navegação, páginas e trilhas educacionais do Guia Cripto."
        path="/sitemap"
      />
      <Header theme="blockchain" />

      <main id="main-content" className="flex-1 py-12 sm:py-16">
        <div className="container-edu">
          {/* Cabeçalho */}
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-chain-gold/80">
              Navegação Geral
            </span>
            <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
              Mapeamento do Site
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
              Visualize de forma clara toda a estrutura de páginas, etapas interativas e conteúdos disponíveis na plataforma Guia Cripto.
            </p>
          </div>

          {/* Cards do Mapa do Site */}
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {siteStructure.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/[0.04]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className={`rounded-full border px-3 py-1 font-mono text-xs font-medium ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                    <span className="font-mono text-xs text-slate-500">{item.path}</span>
                  </div>

                  <h2 className="mt-4 font-display text-2xl text-white">
                    <Link to={item.path} className="transition-colors hover:text-chain-gold">
                      {item.title}
                    </Link>
                  </h2>

                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-6 border-t border-white/10 pt-4">
                    <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                      Conteúdos internos:
                    </span>
                    <ul className="mt-3 space-y-2.5 text-sm text-slate-300">
                      {item.sections.map((section, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-chain-gold/60" />
                          <span>{section}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10">
                  <Link
                    to={item.path}
                    className="inline-flex items-center gap-2 font-mono text-sm font-medium text-chain-gold transition-all hover:translate-x-1"
                  >
                    Ir para esta página →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Atalhos Rápidos */}
          <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h3 className="font-mono text-lg text-white">Acesso Rápido</h3>
            <div className="mt-4 flex flex-wrap gap-4">
              <Link
                to="/"
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:bg-white/10 hover:text-white"
              >
                🏠 Página Inicial
              </Link>
              <Link
                to="/blockchain"
                className="rounded-xl border border-chain-gold/30 bg-chain-gold/10 px-5 py-2.5 text-sm font-medium text-chain-gold transition-colors hover:bg-chain-gold/20"
              >
                🔗 Trilha Blockchain
              </Link>
              <Link
                to="/bitcoin"
                className="rounded-xl border border-coin-violet/30 bg-coin-violet/10 px-5 py-2.5 text-sm font-medium text-coin-violet transition-colors hover:bg-coin-violet/20"
              >
                🪙 Trilha Bitcoin
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}