import { Link, NavLink } from "react-router-dom"
import logoMfp from "../assets/logo-mfp.png"

function NavBar() {
  return (
    <nav
      className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50"
      aria-label="Navegação principal do site"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4 md:gap-8">
        <Link to="/" className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md">
          <img src={logoMfp} alt="Logo do MFP Manager" className="h-10 w-auto" />
          <span className="sr-only">Voltar para a página inicial do MFP Manager</span>
        </Link>
        <div className="flex items-center justify-center gap-4 md:gap-8 text-sm md:text-base">
          <NavLink
            to="/printer"
            className={({ isActive }) =>
              `hover:text-gray-300 transition-colors ${isActive ? "text-blue-400" : ""}`
            }
          >
            Printer
          </NavLink>
          <NavLink
            to="/assets"
            className={({ isActive }) =>
              `hover:text-gray-300 transition-colors ${isActive ? "text-blue-400" : ""}`
            }
          >
            Assets
          </NavLink>
          <div className="flex items-center justify-center gap-2">
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded-full cursor-pointer text-xs md:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
              Login MFP - Printer
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded-full cursor-pointer text-xs md:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
              Login MFP - Assets
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar