import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/layout/SEO";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function BlockchainPage() {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep((prev) => (prev + 1) as 1 | 2 | 3);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep((prev) => (prev - 1) as 1 | 2 | 3);
  };

  return (
    <div className="flex min-h-screen flex-col bg-chain-bg bg-chain-radial text-chain-ink">
      <SEO
        title="O que é Blockchain? Conceito, vantagens e aplicações"
        description="Entenda o que é Blockchain: um livro-razão digital descentralizado e imutável. Veja vantagens (confiança, segurança, rastreabilidade) e aplicações reais."
        path="/blockchain"
        ogImage="/og-image-blockchain.png"
      />
      <Header theme="blockchain" />

      <main id="main-content" className="flex-1">
        {/* Barra de Progresso / Indicador de Telas */}
        <div className="container-edu pt-8">
          <div className="flex items-center justify-between border-b border-chain-gold/20 pb-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-chain-gold/70">
              Trilha Blockchain
            </span>
            <div className="flex gap-2">
              {[1, 2, 3].map((step) => (
                <button
                  key={step}
                  onClick={() => setCurrentStep(step as 1 | 2 | 3)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentStep === step
                      ? "w-8 bg-chain-gold"
                      : "w-2.5 bg-chain-gold/30 hover:bg-chain-gold/50"
                  }`}
                  aria-label={`Ir para Tela ${step}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Conteúdo Dinâmico por Tela */}
        <div className="container-edu py-10 sm:py-14">
          {/* TELA 1: O que é Blockchain? */}
          {currentStep === 1 && (
            <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-chain-gold/70"></span>
              <h1 className="mt-2 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">
                O que é Blockchain?
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-chain-ink/75 sm:text-lg">
                O Blockchain é um livro-razão digital compartilhado e imutável que permite o
                registro de transações e o rastreamento de ativos dentro de uma rede — funcionando
                como uma fonte única da verdade para todos os participantes.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-chain-ink/75">
                Ele opera como um banco de dados descentralizado, com cópias distribuídas entre
                vários computadores, o que o torna resistente a adulterações. Cada transação é
                validada por um mecanismo de consenso, garantindo que toda a rede concorde com o
                estado do registro.
              </p>

              <img
                src="/images/blockchain-network-diagram.png"
                alt="Diagrama de cinco blocos conectados em sequência por setas"
                width={1000}
                height={500}
                loading="lazy"
                className="mt-8 w-full max-w-3xl rounded-xl border border-chain-gold/20 shadow-lg transition-transform duration-300 hover:scale-[1.01]"
              />

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button theme="blockchain" onClick={handleNext}>
                  Ver vantagens →
                </Button>
                <Link to="/bitcoin">
                  <Button theme="blockchain" variant="outline">
                    Ir para trilha Bitcoin
                  </Button>
                </Link>
              </div>
            </section>
          )}

          {/* TELA 2: Vantagens do Blockchain */}
          {currentStep === 2 && (
            <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-chain-gold/70"></span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl">Vantagens do Blockchain</h2>
              <p className="mt-3 max-w-2xl text-sm text-chain-ink/65">
                Conheça os pilares de segurança e transparência que tornam essa tecnologia revolucionária:
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                <Card theme="blockchain" title="Maior confiança">
                  Cria uma rede segura e exclusiva para membros, garantindo acesso preciso e
                  oportuno a dados. Registros confidenciais são compartilhados apenas com
                  participantes autorizados da rede.
                </Card>
                <Card theme="blockchain" title="Maior segurança">
                  É necessário consenso entre os membros da rede para validar cada transação, e
                  todas as transações validadas são imutáveis. Nenhuma transação pode ser
                  excluída — nem mesmo por um administrador do sistema.
                </Card>
                <Card theme="blockchain" title="Melhor rastreabilidade">
                  Oferece rastreabilidade instantânea, com uma trilha de auditoria transparente
                  da jornada de um ativo — útil em setores que priorizam procedência e práticas
                  éticas verificáveis.
                </Card>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button theme="blockchain" variant="outline" onClick={handlePrev}>
                  ← Voltar 
                </Button>
                <Button theme="blockchain" onClick={handleNext}>
                  Ver exemplos de aplicações →
                </Button>
              </div>
            </section>
          )}

          {/* TELA 3: Exemplos de Aplicações */}
          {currentStep === 3 && (
            <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-chain-gold/70"></span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl">Exemplos de aplicações</h2>
              <p className="mt-3 max-w-2xl text-sm text-chain-ink/65">
                As três principais formas de aplicação do Blockchain no mundo real:
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                <Card theme="blockchain" title="Segurança de dados">
                  Sem um único ponto central de falha, dados sensíveis ficam protegidos contra
                  ataques em massa e vazamentos não autorizados. No setor de saúde, por exemplo,
                  prontuários podem ser compartilhados com segurança entre clínicas e hospitais,
                  com cada atualização rastreável e acessível apenas por profissionais
                  autorizados.
                </Card>
                <Card theme="blockchain" title="Pagamentos e rastreio">
                  Transações são validadas quase instantaneamente no livro-razão, dando visão
                  clara de caixa e eliminando inconsistências típicas de processos bancários
                  tradicionais.
                </Card>
                <Card theme="blockchain" title="Smart contracts">
                  Programas de código que executam ações automaticamente quando condições
                  pré-estabelecidas são atingidas — sem necessidade de intermediários ou
                  cartórios, reduzindo custos, atrasos e atritos operacionais.
                </Card>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button theme="blockchain" variant="outline" onClick={handlePrev}>
                  ← Voltar para Vantagens
                </Button>
                <Link to="/bitcoin">
                  <Button theme="blockchain">
                    Ir para trilha Bitcoin →
                  </Button>
                </Link>
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
      <StickyMobileCTA theme="blockchain" label="Explorar Bitcoin" to="/bitcoin" />
    </div>
  );
}