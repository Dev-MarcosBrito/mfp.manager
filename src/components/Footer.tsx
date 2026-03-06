import logoKti from "../assets/logo-kti.png"
import logoMfp from "../assets/logo-mfp.png"

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border bg-card py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-6 mb-4">
              <div className="w-8 h-8 rounded-lg bg-hero-gradient flex items-center justify-center gap-2">
                <img src={logoKti} alt="Logo da KTI" className="h-12 w-auto" loading="lazy" />
                <img src={logoMfp} alt="Logo do MFP Manager" className="h-12 w-auto" loading="lazy" />
              </div>
              <span className="font-heading font-bold text-lg">MFP Manager</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Intelligent management platform for corporate equipment and assets.
            </p>
          </div>

          {[
            { title: "Produtos", links: [{ label: "Printer", href: "/Printer" }, { label: "Assets", href: "/assets" }] },
            { title: "Empresa", links: [{ label: "Sobre", href: "#sobre" }, { label: "Contato", href: "#contact" }] },
            { title: "Suporte", links: [{ label: "Ajuda", href: "#contact" }] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-heading font-semibold text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 MFP Manager. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
