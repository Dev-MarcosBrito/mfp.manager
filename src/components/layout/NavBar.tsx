import { useState, useEffect, useRef } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu, X, ChevronDown, Globe } from "lucide-react"
import { useTranslation } from "react-i18next"
import logoMfp from "../../assets/logo-mfp.png"
import worldIcon from "../../assets/world.png"
import { Button } from "../ui/Button"

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const { t, i18n } = useTranslation()
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousedown", handleClickOutside)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    setLangOpen(false)
    setIsOpen(false)
  }

  const navLinks = [
    { name: t("nav.printer"), path: "/printer" },
    { name: t("nav.assets"), path: "/assets" },
  ]

  const languages = [
    { code: "pt", label: "PT" },
    { code: "en", label: "EN" },
    { code: "es", label: "ES" },
  ]

  const currentLanguage = languages.find(l => l.code === i18n.language.split('-')[0]) || languages[0]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-lg border-b border-white/10 py-2" : "bg-transparent py-4"
      }`}
      aria-label={t("nav.aria_label") || "Navegação principal"}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
          onClick={() => setIsOpen(false)}
        >
          <img src={logoMfp} alt="Logo do MFP Manager" className="h-8 md:h-10 w-auto" />
          <span className="sr-only">Voltar para a página inicial</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium hover:text-blue-400 transition-colors ${
                    isActive ? "text-blue-400" : "text-gray-300"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          
          <div className="flex items-center gap-3">
            {/* Language Switcher Desktop */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium"
              >
                <img src={worldIcon} alt="" className="w-4 h-4 opacity-70" />
                <span>{currentLanguage.label}</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {langOpen && (
                <div className="absolute top-full right-0 mt-2 w-24 py-2 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl animate-fade-in z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                        i18n.language.startsWith(lang.code) ? 'text-blue-400 bg-blue-400/10' : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Button 
              href="https://www.mfpmanager.com/" 
              variant="outline" 
              size="sm"
              className="border-blue-500/50 text-xs"
            >
              {t("nav.login_printer")}
            </Button>
            <Button 
              href="https://www.mfpmanager.com:887/" 
              variant="primary" 
              size="sm"
              className="text-xs"
            >
              {t("nav.login_assets")}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Mobile Language Button (Simple) */}
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Mudar idioma"
          >
            <Globe size={24} />
          </button>
          
          <button
            className="p-2 text-gray-300 hover:text-white transition-colors"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label="Alternar menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 top-[60px] bg-black/95 backdrop-blur-xl z-40 md:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 gap-6 h-full overflow-y-auto">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-xl font-semibold p-4 rounded-xl transition-colors ${
                    isActive ? "bg-blue-600/20 text-blue-400" : "text-gray-300 hover:bg-white/5"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          
          <hr className="border-white/10" />
          
          {/* Mobile Language Options in Menu */}
          <div className="grid grid-cols-3 gap-3">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`py-3 rounded-xl border text-sm font-bold transition-all ${
                  i18n.language.startsWith(lang.code) 
                    ? 'border-blue-500 bg-blue-500/10 text-blue-400' 
                    : 'border-white/10 bg-white/5 text-gray-400'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4 mt-auto pb-10">
            <Button 
              href="https://www.mfpmanager.com/" 
              variant="outline" 
              className="w-full justify-center py-4 text-lg"
              onClick={() => setIsOpen(false)}
            >
              {t("nav.login_printer")}
            </Button>
            <Button 
              href="https://www.mfpmanager.com:887/" 
              variant="primary" 
              className="w-full justify-center py-4 text-lg"
              onClick={() => setIsOpen(false)}
            >
              {t("nav.login_assets")}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Language Overlay (when menu is closed but globe clicked) */}
      {!isOpen && langOpen && (
        <div className="fixed inset-x-0 top-[70px] mx-4 p-4 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl animate-fade-in z-50 md:hidden">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 px-2">{t("nav.choose_language") || "Escolha o Idioma"}</p>
          <div className="flex flex-col gap-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-full text-left px-4 py-3 rounded-xl transition-colors flex items-center justify-between ${
                  i18n.language.startsWith(lang.code) ? 'text-blue-400 bg-blue-400/10' : 'text-gray-300 hover:bg-white/5'
                }`}
              >
                <span className="font-medium">{lang.label}</span>
                {i18n.language.startsWith(lang.code) && <div className="w-2 h-2 rounded-full bg-blue-500" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar
