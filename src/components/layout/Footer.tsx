import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white/70">
      <div className="container-edu grid gap-10 py-12 sm:grid-cols-3">
        <div>
          <p className="font-display text-lg text-white">Guia Cripto</p>
          <p className="mt-3 text-sm leading-relaxed">
            Conteúdo educacional sobre Blockchain e Bitcoin, baseado em material acadêmico <br></br>
            produzido por Pedro Carnio | Shadow_Voidh🌒.
          </p>
          
<br></br>
          <p className="container-edu text-xs text-white/40">
          © {new Date().getFullYear()} Guia Cripto Educação Digital Ltda. Conteúdo com finalidade
          exclusivamente educacional — não constitui recomendação de investimento.
          </p>
        </div>
        
        <div>
          <h2 className="text-sm font-semibold text-white">Navegação</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/sitemap" className="hover:text-white">Mapeamento do Site</Link></li>
            <li><Link to="/blockchain" className="hover:text-white">Blockchain</Link></li>
            <li><Link to="/bitcoin" className="hover:text-white">Bitcoin</Link></li>
            <li><Link to="/politica-de-privacidade" className="hover:text-white">Política de Privacidade</Link></li>
            <li><Link to="/termos-de-uso" className="hover:text-white">Termos de Uso</Link></li>
          </ul>
        </div>

    <div>
  <h2 className="text-sm font-semibold text-white">Contato & Redes</h2>
  <address className="mt-3 not-italic text-sm leading-relaxed space-y-2.5">
    <div>
      <strong className="text-white font-medium block">Shadow_Voidh</strong>
      <span className="text-xs text-slate-400">Paraná - PR, Brasil</span>
    </div>

    {/* Email */}
    <div className="flex items-center gap-2.5">
      <svg className="h-4 w-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
      <a href="mailto:shadow.voidh@gmail.com" className="hover:text-white transition-colors">
        shadow.voidh@gmail.com
      </a>
    </div>

    {/* Telefone */}
    <div className="flex items-center gap-2.5">
      <svg className="h-4 w-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      <a href="tel:+554100000000" className="hover:text-white transition-colors">
        +55 (41) 0000-0000
      </a>
    </div>

    {/* Discord */}
    <div className="flex items-center gap-2.5">
      <svg className="h-4 w-4 shrink-0 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028z" />
      </svg>
      <span className="text-slate-300">
        Discord: <strong className="text-white font-mono text-xs">Shadow_Voidh</strong>
      </span>
    </div>
  </address>

  {/* Links Sociais */}
  <div className="mt-4 flex items-center gap-2.5">
    {/* GitHub */}
    <a
      href="https://github.com/Shadow_Voidh"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-400 hover:border-white/20 hover:bg-white/10 hover:text-white transition-all"
    >
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    </a>

    {/* LinkedIn */}
    <a
      href="https://linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-400 hover:border-white/20 hover:bg-white/10 hover:text-white transition-all"
    >
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    </a>

    {/* Instagram */}
    <a
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-400 hover:border-white/20 hover:bg-white/10 hover:text-white transition-all"
    >
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    </a>
  </div>
</div>


    </div>
    </footer>
  );
}
