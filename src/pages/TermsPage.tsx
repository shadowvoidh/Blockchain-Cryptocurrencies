import SEO from "@/components/layout/SEO";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="Termos de Uso"
        description="Termos e condições de uso do conteúdo educacional sobre Blockchain e Bitcoin publicado neste site."
        path="/termos-de-uso"
      />
      <Header theme="neutral" />

      <main id="main-content" className="container-edu max-w-3xl py-14 sm:py-20">
        <h1 className="font-display text-4xl">Termos de Uso</h1>
        <p className="mt-2 text-sm text-white/50">Última atualização: 3 de setembro de 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-white/75">
          <section>
            <h2 className="text-lg font-semibold text-white">1. Aceitação dos termos</h2>
            <p className="mt-2">
              Ao acessar e usar este site, você concorda com estes Termos de Uso. Se não
              concordar, pedimos que não utilize o site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">2. Finalidade do conteúdo</h2>
            <p className="mt-2">
              Todo o conteúdo sobre Blockchain e Bitcoin publicado aqui tem finalidade
              exclusivamente educacional e informativa. Nada neste site constitui
              recomendação, consultoria de investimento, jurídica ou financeira.
              Criptomoedas envolvem risco, incluindo volatilidade de preço e possibilidade de
              perda total do capital investido.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">3. Uso permitido</h2>
            <p className="mt-2">
              Você pode acessar e ler o conteúdo para uso pessoal e não comercial. É proibido
              reproduzir, distribuir ou modificar o conteúdo sem autorização prévia, tentar
              acessar áreas restritas do sistema, ou usar o site de forma que comprometa sua
              segurança ou disponibilidade (ex.: automação abusiva, tentativas de exploração
              de vulnerabilidades).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">4. Propriedade intelectual</h2>
            <p className="mt-2">
              O material original apresentado neste site é baseado em conteúdo acadêmico
              produzido por Jonatan Natan, Luiz Felipe e Pedro Carnio, adaptado para este
              formato. Marcas, logotipos e nomes de terceiros mencionados pertencem aos seus
              respectivos titulares.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">5. Limitação de responsabilidade</h2>
            <p className="mt-2">
              Fazemos esforços razoáveis para manter as informações atualizadas e precisas,
              mas não garantimos exatidão absoluta. Não nos responsabilizamos por decisões
              financeiras tomadas com base no conteúdo deste site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">6. Alterações</h2>
            <p className="mt-2">
              Podemos atualizar estes termos a qualquer momento. O uso contínuo do site após
              alterações implica aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">7. Contato</h2>
            <p className="mt-2">
              Dúvidas sobre estes termos podem ser enviadas para{" "}
              <a href="mailto:contato@exemplo-blockchain-edu.com.br" className="underline">
                contato@exemplo-blockchain-edu.com.br
              </a>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
