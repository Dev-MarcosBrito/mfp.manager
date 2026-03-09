import { useState, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react"
import logoMfp from "../assets/logo-mfp.png"
import { Button } from "./ui/Button"

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { name: "Printer", path: "/printer" },
    { name: "Assets", path: "/assets" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-lg border-b border-white/10 py-2" : "bg-transparent py-4"
      }`}
      aria-label="Navegação principal do site"
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
          onClick={() => setIsOpen(false)}
        >
          <img src={logoMfp} alt="Logo do MFP Manager" className="h-8 md:h-10 w-auto" />
          <span className="sr-only">Voltar para a página inicial do MFP Manager</span>
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
            <Button 
              href="https://www.mfpmanager.com/" 
              variant="outline" 
              size="sm"
              className="border-blue-500/50 text-xs"
            >
              Login Printer
            </Button>
            <Button 
              href="https://www.mfpmanager.com:887/" 
              variant="primary" 
              size="sm"
              className="text-xs"
            >
              Login Assets
            </Button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Alternar menu de navegação"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 top-[60px] bg-black/95 backdrop-blur-xl z-40 md:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 gap-6 h-full">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-xl font-semibold p-2 rounded-lg transition-colors ${
                    isActive ? "bg-blue-600/20 text-blue-400" : "text-gray-300"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          
          <hr className="border-white/10" />
          
          <div className="flex flex-col gap-4 mt-auto pb-10">
            <Button 
              href="https://www.mfpmanager.com/" 
              variant="outline" 
              className="w-full justify-center py-4"
              onClick={() => setIsOpen(false)}
            >
              Login MFP - Printer
            </Button>
            <Button 
              href="https://www.mfpmanager.com:887/" 
              variant="primary" 
              className="w-full justify-center py-4"
              onClick={() => setIsOpen(false)}
            >
              Login MFP - Assets
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
