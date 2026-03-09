import { WHATSAPP_URL } from "../components/layout/WhatsAppFloat"
import { Button } from "../components/ui/Button"
import { Dumbbell, Trash2, BatteryCharging, Server, Wrench, } from "lucide-react";

const assets = [  
  { icon: Dumbbell, label: "Equipamentos de ginástica" },
  { icon: Trash2, label: "Caçambas de lixo" },
  { icon: BatteryCharging, label: "Dispositivos UPS" },
  { icon: Server, label: "Equipamentos de rede" },
  { icon: Wrench, label: "Ferramentas de manutenção" },
];

function AssetsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-6 overflow-hidden bg-black">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6 animate-fade-in">
            Gestão Versátil de Ativos
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tight leading-[1.1]">
            MFP MANAGER <br /> 
            <span className="text-gradient">ASSETS</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Uma solução multissetorial para controle total de ativos. 
            Organize, monitore e otimize qualquer tipo de equipamento em uma plataforma centralizada e inteligente.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button href={WHATSAPP_URL} variant="primary" size="lg" className="w-full sm:w-auto">
              Solicitar Demonstração Assets
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          <div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-blue-500/30 transition-all duration-500">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-400 mb-2 font-bold">Monitoramento</p>
            <p className="text-xl font-bold text-white mb-2">Intervalo de 3min</p>
            <p className="text-sm text-gray-500 leading-relaxed">Informações sempre atualizadas em tempo real.</p>
          </div>
          <div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-blue-500/30 transition-all duration-500">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-400 mb-2 font-bold">Economia</p>
            <p className="text-xl font-bold text-white mb-2">Controle de Custos</p>
            <p className="text-sm text-gray-500 leading-relaxed">Gestão por contrato e centro de custo.</p>
          </div>
          <div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-blue-500/30 transition-all duration-500">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-400 mb-2 font-bold">Inteligência</p>
            <p className="text-xl font-bold text-white mb-2">Alertas Proativos</p>
            <p className="text-sm text-gray-500 leading-relaxed">Prevenção de falhas antes de impactar o usuário.</p>
          </div>
          <div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-blue-500/30 transition-all duration-500">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-400 mb-2 font-bold">Operacional</p>
            <p className="text-xl font-bold text-white mb-2">Fechamento Mensal</p>
            <p className="text-sm text-gray-500 leading-relaxed">Gestão de faturamento e integração automática.</p>
          </div>
        </div>
      </section>

      {/* Asset Types Grid */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-black">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
              Versatilidade
            </span>
            <h2 className="text-3xl md:text-5xl font-black mt-6 mb-6 tracking-tight">
              Gerencie Qualquer Equipamento
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              De tecnologia a infraestrutura física, o MFP Manager se adapta a qualquer categoria de ativo.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {assets.map((a, i) => (
              <div 
                key={a.label} 
                className="group relative flex flex-col items-center gap-4 p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/30"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-3xl" />
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-500 shadow-lg shadow-blue-500/10">
                    <a.icon size={32} className="text-blue-500 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-sm font-bold text-center text-gray-400 group-hover:text-white transition-colors">{a.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-t from-blue-900/20 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center rounded-[3rem] border border-white/5 bg-white/[0.02] backdrop-blur-xl p-12 md:p-20 shadow-2xl relative overflow-hidden">
            {/* Inner Glow */}
            <div className="absolute inset-0 bg-blue-600/5 -z-10" />
            
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white">
              Pronto para assumir o controle total?
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Elimine o improviso e ganhe visibilidade total sobre seu patrimônio com a solução de gestão de ativos mais completa do mercado.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href={WHATSAPP_URL} variant="primary" size="lg" className="w-full sm:w-auto">
                Solicitar Demonstração
              </Button>
              <Button href={WHATSAPP_URL} variant="outline" size="lg" className="w-full sm:w-auto border-white/10">
                Falar com o Time
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AssetsPage
