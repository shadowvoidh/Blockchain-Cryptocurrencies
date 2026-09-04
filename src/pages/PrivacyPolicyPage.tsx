import SEO from "@/components/layout/SEO";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="Política de Privacidade"
        description="Como o Guia Cripto coleta, usa e protege dados pessoais, em conformidade com a LGPD."
        path="/politica-de-privacidade"
      />
      <Header theme="neutral" />

      <main id="main-content" className="container-edu max-w-3xl py-14 sm:py-20">
        <h1 className="font-display text-4xl">Política de Privacidade</h1>
        <p className="mt-2 text-sm text-white/50">Última atualização: 3 de setembro de 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-white/75">
          <section>
            <h2 className="text-lg font-semibold text-white">1. Quem somos</h2>
            <p className="mt-2">
              Este site é operado por Guia Cripto Educação Digital Ltda. ("nós"), com sede em
              Av. Paulista, 1374, Conjunto 12, São Paulo — SP. Esta política explica como
              tratamos dados pessoais em conformidade com a Lei Geral de Proteção de Dados
              (Lei 13.709/2018 — LGPD).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">2. Dados que coletamos</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Dados fornecidos por você no formulário de contato: nome, e-mail, assunto e mensagem.</li>
              <li>Dados técnicos de navegação (endereço IP, tipo de dispositivo, páginas visitadas), coletados apenas mediante consentimento via o banner de cookies.</li>
              <li>Cookies estritamente necessários ao funcionamento do site (ex.: token de segurança CSRF, preferência de consentimento).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">3. Como usamos seus dados</h2>
            <p className="mt-2">
              Usamos os dados do formulário de contato exclusivamente para responder sua
              mensagem. Dados de navegação, quando consentidos, são usados de forma agregada
              para entender quais conteúdos são mais úteis — nunca vendemos ou compartilhamos
              dados pessoais com terceiros para fins de marketing.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">4. Base legal e retenção</h2>
            <p className="mt-2">
              Tratamos dados de contato com base no seu consentimento (art. 7º, I, LGPD) e no
              legítimo interesse em responder solicitações. Mensagens de contato são retidas
              por até 24 meses e depois excluídas, salvo obrigação legal de retenção maior.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">5. Seus direitos</h2>
            <p className="mt-2">
              Você pode solicitar confirmação de tratamento, acesso, correção, anonimização,
              portabilidade ou eliminação dos seus dados, e pode revogar o consentimento a
              qualquer momento. Para exercer esses direitos, escreva para{" "}
              <a href="mailto:shadow.voidh@gmail.com" className="underline">
                shadow.voidh@gmail.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">6. Segurança</h2>
            <p className="mt-2">
              Adotamos medidas técnicas e organizacionais — como criptografia em trânsito
              (HTTPS), proteção contra CSRF, validação e sanitização de entradas, e cookies com
              flags HttpOnly/Secure — para proteger seus dados contra acesso não autorizado,
              perda ou alteração.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">7. Alterações desta política</h2>
            <p className="mt-2">
              Podemos atualizar esta política periodicamente. Alterações relevantes serão
              indicadas pela data de "última atualização" no topo desta página.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
