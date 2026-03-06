import { Printer, Dumbbell, Trash2, BatteryCharging, Server, Wrench } from "lucide-react";

const assets = [
  { icon: Printer, label: "Impressoras e MFPs" },
  { icon: Dumbbell, label: "Equipamentos de ginástica" },
  { icon: Trash2, label: "Caçambas de lixo" },
  { icon: BatteryCharging, label: "Dispositivos UPS" },
  { icon: Server, label: "Equipamentos de rede" },
  { icon: Wrench, label: "Ferramentas de manutenção" },
];

const Assets = () => {
  return (
    <section id="assets" className="py-20 md:py-32 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider text-red-600">Tipos de ativos
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4">
            Gerenciar qualquer tipo de equipamento
          </h2>
          <p className="text-muted-foreground text-lg">
            De impressoras a equipamentos de ginástica, o MFP Manager se adapta a todas as suas categorias de ativos.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {assets.map((a) => (
            <div key={a.label} className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group cursor-default">
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center group-hover:bg-primary transition-colors">
                <a.icon size={26} className="text-accent-foreground group-hover:text-primary-foreground transition-colors" />
              </div>
              <span className="text-sm font-medium text-center">{a.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Assets;
