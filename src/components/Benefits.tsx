import { TrendingUp, FolderOpen, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Eficiência Máxima",
    description: "Reduza o tempo de inatividade em até 40% com monitoramento proativo e alertas automatizados.",
  },
  {
    icon: FolderOpen,
    title: "Visibilidade Total",
    description: "Centralize todas as informações de ativos em uma única plataforma SaaS de alta performance.",
  },
  {
    icon: DollarSign,
    title: "Redução de Custos",
    description: "Otimize os ciclos de substituição e reduza gastos desnecessários com insights orientados a dados.",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 md:py-32 bg-gradient-to-b from-black to-blue-900/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
            Benefícios
          </span>
          <h2 className="text-3xl md:text-5xl font-black mt-6 mb-6 tracking-tight text-white">
            Por que Líderes escolhem o MFP Manager?
          </h2>
          <p className="text-gray-400 text-lg">
            Impacto mensurável nas operações e no faturamento desde o primeiro dia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((b) => (
            <div key={b.title} className="relative group p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:bg-white/[0.04]">
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity">
                <b.icon size={80} className="text-blue-500" />
              </div>
              
              <div className="relative z-10 text-center md:text-left">
                <div className="w-16 h-16 rounded-3xl bg-blue-600/10 flex items-center justify-center mb-8 mx-auto md:mx-0 group-hover:bg-blue-600 transition-colors duration-500">
                  <b.icon size={32} className="text-blue-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white tracking-tight">{b.title}</h3>
                <p className="text-gray-500 leading-relaxed text-lg group-hover:text-gray-400 transition-colors">{b.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
