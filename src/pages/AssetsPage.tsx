import Assets from "../components/Assents"
import { WHATSAPP_URL } from "../components/WhatsAppFloat"

function AssetsPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Gerencie todos os seus ativos em um só lugar
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Explore em detalhes como o MFP Manager ajuda sua empresa a controlar impressoras, equipamentos
            de ginástica, dispositivos de rede e muito mais.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-base md:text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-red-500/40 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              Ver demonstração de gestão de ativos
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-red-400 rounded-full text-white hover:bg-red-500/10 hover:border-red-500 px-8 py-3 text-base md:text-lg font-medium transition-all duration-300 hover:scale-105 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              Conversar com um especialista
            </a>
          </div>
        </div>
      </section>

      <Assets />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-center md:text-left">
            Casos de uso em diferentes segmentos
          </h2>
          <p className="text-muted-foreground mb-8 text-center md:text-left">
            Desde parques de impressão até academias, obras e data centers, o MFP Manager se adapta à realidade de cada
            operação e ajuda a padronizar processos de inventário, manutenção e reposição.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div className="rounded-xl border border-white/10 bg-black/40 px-4 py-3">
              <p className="text-xs uppercase tracking-widest text-red-400 mb-1">Academias e clubes</p>
              <p className="text-base font-semibold">Controle de equipamentos de ginástica e planos de manutenção.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/40 px-4 py-3">
              <p className="text-xs uppercase tracking-widest text-red-400 mb-1">Indústrias e logística</p>
              <p className="text-base font-semibold">Rastreamento de ativos críticos em pátios, armazéns e filiais.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/40 px-4 py-3">
              <p className="text-xs uppercase tracking-widest text-red-400 mb-1">TI e infraestrutura</p>
              <p className="text-base font-semibold">Inventário de servidores, switches, no-breaks e periféricos.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AssetsPage

