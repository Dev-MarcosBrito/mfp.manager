import { BarChart3, ClipboardList, MonitorSmartphone, Settings2 } from "lucide-react";

const features = [
    {
        icon: ClipboardList,
        title: "Registro de ativos",
        description: "Catalogar todos os equipamentos da empresa com perfis detalhados, números de série e histórico completo.",
    },
    {
        icon: MonitorSmartphone,
        title: "Monitoramento em tempo real",
        description: "Acompanhe o status e alertas em tempo real com um painel intuitivo e centralizado.",
    },
    {
        icon: BarChart3,
        title: "Relatórios e análises",
        description: "Gere relatórios abrangentes sobre utilização e ciclo de vida para apoiar decisões estratégicas.",
    },
    {
        icon: Settings2,
        title: "Manutenção Preventiva",
        description: "Automatize cronogramas e receba notificações proativas antes que os problemas surjam.",
    },
];

const Features = () => {
    return (
        <section id="features" className="py-20 md:py-32 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                        Funcionalidades
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black mt-6 mb-6 tracking-tight">
                        Gestão Completa de Ponta a Ponta
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Um conjunto de ferramentas premium projetadas para organizar e otimizar todo o seu ecossistema de TI.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {features.map((f, i) => (
                        <div
                            key={f.title}
                            className="group relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/30"
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            {/* Glow Effect on Hover */}
                            <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 rounded-3xl" />
                            
                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-500 shadow-lg shadow-blue-500/10">
                                    <f.icon size={28} className="text-blue-500 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{f.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors">{f.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
