import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/layout/SEO";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function BitcoinPage() {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep((prev) => (prev + 1) as 1 | 2 | 3 | 4);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep((prev) => (prev - 1) as 1 | 2 | 3 | 4);
  };

  return (
    <div className="flex min-h-screen flex-col bg-coin-bg bg-coin-radial text-coin-ink">
      <SEO
        title="O que é Bitcoin? Origem, conceitos e aplicações"
        description="Entenda o Bitcoin: a primeira criptomoeda, criada em 2008 por Satoshi Nakamoto. Descentralização, blockchain, criptografia, mineração, vantagens e desafios."
        path="/bitcoin"
        ogImage="/og-image-bitcoin.png"
      />
      <Header theme="bitcoin" />

      <main id="main-content" className="flex-1">
        <div className="container-edu py-10 sm:py-16">
          {/* TELA 1: O que é Bitcoin? */}
          {currentStep === 1 && (
            <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-coin-violet/80">
                Trilha Bitcoin
              </span>
              <h1 className="mt-4 max-w-3xl font-mono text-4xl leading-tight sm:text-5xl">
                O que é Bitcoin?
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-coin-ink/75 sm:text-lg">
                Bitcoin é uma moeda digital que usa criptografia para garantir transações seguras.
                Diferente do dinheiro tradicional, ela existe apenas no ambiente digital — sem
                cédulas, sem moedas físicas.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-coin-ink/75">
                O conceito ganhou força em 2008, com a criação do Bitcoin por uma pessoa (ou grupo)
                sob o pseudônimo <span className="text-coin-violet">Satoshi Nakamoto</span>.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button theme="bitcoin" onClick={handleNext}>
                  Ver conceitos principais →
                </Button>
                <Link to="/blockchain">
                  <Button theme="bitcoin" variant="outline">
                    Ir para trilha Blockchain
                  </Button>
                </Link>
              </div>
            </section>
          )}

          {/* TELA 2: Conceitos principais */}
          {currentStep === 2 && (
            <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="font-mono text-3xl sm:text-4xl">Conceitos principais</h2>
              <p className="mt-3 max-w-2xl text-sm text-coin-ink/65">
                Os pilares fundamentais sobre os quais a rede Bitcoin foi construída:
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <Card theme="bitcoin" title="Descentralização">
                  Redes mantidas por milhares de computadores espalhados pelo mundo, sem um
                  ponto central de controle ou governança única.
                </Card>
                <Card theme="bitcoin" title="Blockchain">
                  O "livro de registro digital" público e imutável onde todas as transações são
                  gravadas em blocos conectados entre si.
                </Card>
                <Card theme="bitcoin" title="Criptografia">
                  Algoritmos matemáticos avançados que protegem os dados, garantindo a autoria e
                  a segurança de cada operação.
                </Card>
                <Card theme="bitcoin" title="Mineração / Validação">
                  Processo pelo qual novos blocos são verificados e adicionados à rede pelos
                  participantes, que competem para resolver um problema computacional (o
                  "hash") e são recompensados por isso.
                </Card>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button theme="bitcoin" variant="outline" onClick={handlePrev}>
                  ← Voltar
                </Button>
                <Button theme="bitcoin" onClick={handleNext}>
                  Como funciona uma transação →
                </Button>
              </div>
            </section>
          )}

          {/* TELA 3: Como funciona uma transação */}
          {currentStep === 3 && (
            <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="font-mono text-3xl sm:text-4xl">Como funciona uma transação</h2>
              <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  "Um usuário quer enviar Bitcoin para outro.",
                  "A transação é submetida à rede.",
                  "Os mineradores trabalham para validá-la.",
                  "O primeiro a resolver o problema cria um novo bloco com a transação.",
                  "O novo bloco é adicionado à blockchain.",
                  "A rede reconhece o novo bloco (consenso).",
                  "A transação é concluída e o saldo é atualizado.",
                ].map((step, i) => (
                  <li key={i} className="rounded-xl border border-coin-violet/30 bg-coin-surface p-5">
                    <span className="font-mono text-xs text-coin-violet">{String(i + 1).padStart(2, "0")}</span>
                    <p className="mt-2 text-sm text-coin-ink/80">{step}</p>
                  </li>
                ))}
              </ol>

              <img
                src="/images/bitcoin-transaction-flow.png"
                alt="Fluxo de uma transação em Bitcoin"
                width={1000}
                height={500}
                loading="lazy"
                className="mt-10 w-full max-w-3xl rounded-xl border border-coin-violet/20"
              />
              <p className="mt-4 text-xs text-coin-ink/50">
                Um novo bloco costuma ser criado a cada 10 minutos, com mineradores já buscando
                o próximo bloco.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button theme="bitcoin" variant="outline" onClick={handlePrev}>
                  ← Voltar para Conceitos
                </Button>
                <Button theme="bitcoin" onClick={handleNext}>
                  Ver exemplos de aplicação →
                </Button>
              </div>
            </section>
          )}

          {/* TELA 4: Exemplos de aplicação */}
          {currentStep === 4 && (
            <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="font-mono text-3xl sm:text-4xl">Exemplos de aplicação</h2>
              
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <Card theme="bitcoin" title="Pagamentos globais">
                  Envio de valores para qualquer parte do mundo em minutos, com taxas reduzidas.
                </Card>
                <Card theme="bitcoin" title="Contratos inteligentes">
                  Programas autoexecutáveis que cumprem regras acordadas sem precisar de
                  advogados ou cartórios (ex: rede Ethereum).
                </Card>
                <Card theme="bitcoin" title="Finanças descentralizadas (DeFi)">
                  Empréstimos, investimentos e negociações sem a intermediação de instituições
                  bancárias tradicionais.
                </Card>
                <Card theme="bitcoin" title="NFTs e propriedade digital">
                  Registro de autenticidade para arte digital, itens de jogos e ativos do mundo
                  real.
                </Card>
              </div>

              {/* Vantagens vs Desafios */}
              <div className="mt-12 grid gap-8 border-t border-coin-violet/15 pt-8 sm:grid-cols-2">
                <div>
                  <h3 className="font-mono text-2xl text-coin-violet">Vantagens</h3>
                  <ul className="mt-4 space-y-2 text-sm text-coin-ink/80">
                    <li>• Inclusão financeira: acesso para qualquer pessoa com internet.</li>
                    <li>• Segurança: praticamente impossível de falsificar, graças à blockchain.</li>
                    <li>• Agilidade: transações sem fronteiras geográficas, 24 horas por dia.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-mono text-2xl text-coin-amber">Desafios</h3>
                  <ul className="mt-4 space-y-2 text-sm text-coin-ink/80">
                    <li>• Regulamentação: falta de clareza jurídica em diversos países.</li>
                    <li>• Volatilidade: oscilações bruscas nos preços.</li>
                    <li>• Erros do usuário: perda de chaves privadas resulta em perda definitiva.</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 rounded-xl border border-coin-amber/30 bg-coin-amber/10 p-5 text-sm text-coin-ink/80">
                Este conteúdo é educacional e não constitui aconselhamento financeiro ou
                recomendação de investimento.
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button theme="bitcoin" variant="outline" onClick={handlePrev}>
                  ← Voltar para Transação
                </Button>
                <Link to="/blockchain">
                  <Button theme="bitcoin">
                    Ir para trilha Blockchain →
                  </Button>
                </Link>
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
      <StickyMobileCTA theme="bitcoin" label="Explorar Blockchain" to="/blockchain" />
    </div>
  );
}