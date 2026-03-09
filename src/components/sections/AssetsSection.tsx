import { useTranslation } from "react-i18next";
import { Printer, Dumbbell, Trash2, BatteryCharging, Server, Wrench } from "lucide-react";

const Assets = () => {
  const { t } = useTranslation();

  const assets = [
    { icon: Printer, label: t("assets_section.items.printers") },
    { icon: Dumbbell, label: t("assets_section.items.gym") },
    { icon: Trash2, label: t("assets_section.items.trash") },
    { icon: BatteryCharging, label: t("assets_section.items.ups") },
    { icon: Server, label: t("assets_section.items.network") },
    { icon: Wrench, label: t("assets_section.items.maintenance") },
  ];

  return (
    <section id="assets" className="py-20 md:py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
            {t("assets_section.badge")}
          </span>
          <h2 className="text-3xl md:text-5xl font-black mt-6 mb-6 tracking-tight">
            {t("assets_section.title")}
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            {t("assets_section.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {assets.map((a, i) => (
            <div 
              key={i} 
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
  );
};

export default Assets;
