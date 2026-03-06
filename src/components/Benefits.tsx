import { TrendingUp, FolderOpen, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Aumentar a eficiência",
    description: "Reduza o tempo de inatividade em até 40% com monitoramento proativo e alertas de manutenção automatizados em todos os equipamentos.",
  },
  {
    icon: FolderOpen,
    title: "Organização Total",
    description: "Centralize todas as informações de ativos em uma única plataforma. Encontre qualquer equipamento, seu status e histórico em segundos.",
  },
  {
    icon: DollarSign,
    title: "Reduzir custos",
    description: "Identifique ativos subutilizados, otimize os ciclos de substituição e reduza gastos desnecessários com insights baseados em dados.",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider text-blue-500">Benefícios</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4">
          Por que as empresas escolhem o MFP Manager?
          </h2>
          <p className="text-muted-foreground text-lg">
          Impacto mensurável nas operações desde o primeiro dia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((b) => (
            <div key={b.title} className="text-center p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-6">
                <b.icon size={30} className="text-accent-foreground" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">{b.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
