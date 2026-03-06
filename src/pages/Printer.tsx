import { WHATSAPP_URL } from "../components/WhatsAppFloat"

function PrinterPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Monitoramento inteligente de impressoras e MFPs
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Acompanhe status, consumo, alertas e manutenção do seu parque de impressão em tempo real,
            com dashboards claros e alertas automáticos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-base md:text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/40 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Solicitar demonstração do módulo Printer
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-blue-400 rounded-full text-white hover:bg-blue-500/10 hover:border-blue-500 px-8 py-3 text-base md:text-lg font-medium transition-all duration-300 hover:scale-105 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Conversar com um especialista
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl md:text-3xl font-heading font-bold">
              Tudo o que você precisa para controlar o parque de impressão
            </h2>
            <p className="text-muted-foreground">
              Centralize contratos, contadores, consumo de toner e chamados em um único painel. O MFP
              Manager foi pensado para provedores de outsourcing e equipes internas de TI que precisam
              de visibilidade total.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div className="rounded-xl border border-white/10 bg-black/40 px-4 py-3">
              <p className="text-xs uppercase tracking-widest text-blue-400 mb-1">Controle de custos</p>
                <p className="text-base font-semibold">Visão por contrato e centro de custo</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/40 px-4 py-3">
              <p className="text-xs uppercase tracking-widest text-blue-400 mb-1">Alertas proativos</p>
                <p className="text-base font-semibold">Falhas e suprimentos antes de impactar o usuário</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/40 px-4 py-3">
              <p className="text-xs uppercase tracking-widest text-blue-400 mb-1">Histórico completo</p>
                <p className="text-base font-semibold">Chamados, manutenções e trocas rastreadas</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="font-heading font-semibold text-lg">Principais destaques</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Alertas automáticos de falhas e suprimentos.</li>
              <li>Relatórios por contrato, centro de custo e localização.</li>
              <li>Histórico completo de chamados e manutenções.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default PrinterPage
