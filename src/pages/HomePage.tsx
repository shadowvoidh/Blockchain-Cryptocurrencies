import { Link } from "react-router-dom";
import SEO from "@/components/layout/SEO";

export default function HomePage() {
  return (
    <>
      <SEO
        title="Blockchain e Bitcoin — Escolha sua trilha"
        description="Um guia visual e didático em duas trilhas: entenda a tecnologia Blockchain ou aprofunde-se no Bitcoin, a primeira criptomoeda do mundo."
        path="/"
        ogImage="/og-image-default.png"
      />

      <main id="main-content" className="min-h-[100dvh] bg-black">
        <div className="grid min-h-[100dvh] grid-cols-1 md:grid-cols-2">
          {/* Blockchain option — gold on black */}
          <Link
            to="/blockchain"
            className="group relative flex min-h-[50vh] flex-col justify-start pt-16 sm:pt-24 overflow-hidden bg-chain-bg bg-chain-radial p-8 sm:p-12 md:min-h-[100dvh]"
          >
            <span className="absolute inset-0 border border-chain-gold/0 transition-colors group-hover:border-chain-gold/30" aria-hidden="true" />
            <h1 className="mt-3 font-display text-4xl leading-tight text-chain-ink sm:text-5xl">
              Blockchain
            </h1>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-chain-ink/70">
              O livro-razão digital que sustenta as criptomoedas: como funciona, por que é
              seguro e onde já está sendo aplicado.
            </p>
            <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-chain-gold px-5 py-2.5 text-sm font-semibold text-chain-gold transition-colors group-hover:bg-chain-gold group-hover:text-chain-bg">
              Explorar Blockchain
              <span aria-hidden="true">→</span>
            </span>
          </Link>

          {/* Bitcoin option — violet on deep indigo */}
          <Link
            to="/bitcoin"
            className="group relative flex min-h-[50vh] flex-col justify-start pt-16 sm:pt-24 overflow-hidden bg-coin-bg bg-coin-radial p-8 sm:p-12 md:min-h-[100dvh]"
          >
            <span className="absolute inset-0 border border-coin-violet/0 transition-colors group-hover:border-coin-violet/30" aria-hidden="true" />
            <h1 className="mt-3 font-mono text-4xl leading-tight text-coin-ink sm:text-5xl">
              Bitcoin
            </h1>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-coin-ink/70">
              A primeira criptomoeda do mundo: origem, como as transações acontecem e por que
              ela mudou a forma de pensar dinheiro.
            </p>
            <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-coin-violet px-5 py-2.5 text-sm font-semibold text-coin-ink transition-colors group-hover:bg-coin-violet group-hover:text-white">
              Explorar Bitcoin
              <span aria-hidden="true">→</span>
            </span>
          </Link>
        </div>
      </main>
    </>
  );
}