import { Link } from "react-router-dom"
import { WHATSAPP_URL } from "./WhatsAppFloat"

function Hero() {
  return (
    <section className="py-20 md:py-32 px-6 bg-hero-gradient scroll-mt-24" id="inicio">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          Gestão inteligente de <br />
          <span className="text-blue-400">todos os seus ativos</span>
        </h1>
        <p className="text-base md:text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
          O MFPMANAGER® é um software criado para simplificar o gerenciamento e a manutenção do parque de ativos de TI.
          Com ele, é possível monitorar e administrar impressoras, computadores e diversos dispositivos da infraestrutura,
          estejam eles conectados à rede ou não.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8 md:mb-10">
        <Link
          to="/printer"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-base md:text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/50 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          Ver solução para Printer
        </Link>
        <Link
          to="/assets"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-base md:text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/50 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          Ver gestão de Assets
        </Link>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center border-2 border-white rounded-full hover:bg-white hover:text-black text-white px-8 py-4 text-base md:text-lg font-medium transition-all duration-300 hover:scale-105 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          Solicite uma demonstração
        </a>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-300">
        <div className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-center">
          <p className="text-xs uppercase tracking-widest text-blue-400 mb-1">Menos downtime</p>
          <p className="text-lg font-semibold">até 40% de redução</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-center">
          <p className="text-xs uppercase tracking-widest text-blue-400 mb-1">Ativos monitorados</p>
          <p className="text-lg font-semibold">milhares de equipamentos</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-center">
          <p className="text-xs uppercase tracking-widest text-blue-400 mb-1">Redução de custos</p>
          <p className="text-lg font-semibold">decisões guiadas por dados</p>
        </div>
      </div>
    </section>
  )
}

export default Hero