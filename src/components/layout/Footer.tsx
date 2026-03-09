import { useTranslation } from "react-i18next";
import logoKti from "../../assets/logo-kti.png"
import logoMfp from "../../assets/logo-mfp.png"
import { Link } from "react-router-dom";


const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="border-t border-white/5 bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col gap-6 mb-8">
              <div className="flex items-center gap-4">
                <img src={logoMfp} alt="Logo do MFP Manager" className="h-8 w-auto" loading="lazy" />
                <span className="font-black text-xl tracking-tight text-white">MFP Manager</span>
              </div>
              <div className="flex items-center gap-4">
                <img src={logoKti} alt="Logo da KTI" className="h-8 w-auto" loading="lazy" />
                <span className="font-bold text-lg text-gray-400"> K.T.I Technology and Innovation</span>
              </div>
            </div>
            <p className="text-gray-500 leading-relaxed max-w-sm">
              {t("footer.desc")}
            </p>
          </div>

          {[
            { 
              title: t("footer.products"), 
              links: [
                { label: t("nav.printer"), href: "/printer", isInternal: true }, 
                { label: t("nav.assets"), href: "/assets", isInternal: true }
              ] 
            },
            { 
              title: t("footer.institutional"), 
              links: [
                { label: t("footer.about_kti"), href: "https://www.kti.inf.br/web/sobre/", isInternal: false }, 
                { label: t("footer.contact"), href: "#contact", isInternal: false }
              ] 
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.isInternal ? (
                      <Link
                        to={link.href}
                        className="text-gray-500 hover:text-blue-400 transition-colors text-sm font-medium"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-gray-500 hover:text-blue-400 transition-colors text-sm font-medium"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-600 font-medium">
          <p>© 2026 MFP Manager. {t("footer.rights")}</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">{t("footer.privacy")}</a>
            <a href="#" className="hover:text-white transition-colors">{t("footer.terms")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
