import { BarChart3, ClipboardList, MonitorSmartphone, Settings2 } from "lucide-react";

const features = [
    {
        icon: ClipboardList,
        title: "Registro de ativos",
        description: "Catalogar todos os equipamentos da empresa com perfis detalhados, números de série, localizações e histórico de manutenção.",
    },
    {
        icon: MonitorSmartphone,
        title: "Monitoramento em tempo real",
        description: "Monitore o status do dispositivo, os padrões de uso e os alertas em tempo real com um painel intuitivo.",
    },
    {
        icon: BarChart3,
        title: "Relatórios e análises",
        description: "Gere relatórios abrangentes sobre a utilização, os custos e o ciclo de vida dos ativos para apoiar as decisões estratégicas.",
    },
    {
        icon: Settings2,
        title: "Programação de manutenção",
        description: "Automatize os cronogramas de manutenção preventiva e receba notificações antes que os problemas surjam.",
    },
];

const Features = () => {
    return (
        <section id="features" className="py-20 md:py-32">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider text-red-600">Características</span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4">
                        Tudo o que você precisa para gerenciar ativos.
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Um conjunto completo de ferramentas para organizar, monitorar e otimizar todo o seu portfólio de equipamentos.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {features.map((f, i) => (
                        <div
                            key={f.title}
                            className="group rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                <f.icon size={24} className="text-accent-foreground group-hover:text-primary-foreground transition-colors" />
                            </div>
                            <h3 className="font-heading font-semibold text-lg mb-2">{f.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
