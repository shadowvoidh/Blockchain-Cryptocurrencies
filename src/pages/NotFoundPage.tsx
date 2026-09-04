import { Link } from "react-router-dom";
import SEO from "@/components/layout/SEO";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="Página não encontrada"
        description="A página que você procura não existe ou foi movida."
        path="/404"
        noIndex
      />
      <Header theme="neutral" />

      <main id="main-content" className="container-edu flex flex-col items-start py-20 sm:py-28">
        <span className="font-mono text-sm text-white/40">Erro 404</span>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl">Esta página não existe.</h1>
        <p className="mt-4 max-w-md text-white/70">
          O endereço pode ter mudado, ou o conteúdo foi removido. Volte para o início e escolha
          uma das trilhas — Blockchain ou Bitcoin.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/">
            <Button theme="blockchain">Voltar ao início</Button>
          </Link>
          <Link to="/contato">
            <Button theme="blockchain" variant="outline">Avisar sobre um link quebrado</Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
