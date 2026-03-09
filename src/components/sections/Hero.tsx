import { useTranslation } from "react-i18next"
import { WHATSAPP_URL } from "../layout/WhatsAppFloat"
import { Button } from "../ui/Button"

function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden" id="inicio">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-400/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          {t("hero.badge")}
        </div>
                
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-8 tracking-tight leading-[1.1]">
          {t("hero.title")} <br />
          <span className="text-gradient">{t("hero.title_gradient")}</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          {t("hero.subtitle")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button to="/printer" variant="primary" size="lg" className="w-full sm:w-auto">
            {t("hero.cta_printer")}
          </Button>
          <Button to="/assets" variant="outline" size="lg" className="w-full sm:w-auto border-white/10">
            {t("hero.cta_assets")}
          </Button>
          <Button href={WHATSAPP_URL} variant="ghost" size="lg" className="w-full sm:w-auto">
            {t("hero.cta_specialist")}
          </Button>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-blue-500/30 transition-all duration-500">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-400 mb-2 font-bold">{t("hero.stats.performance")}</p>
            <p className="text-2xl font-black text-white">-40%</p>
            <p className="text-sm text-gray-500">{t("hero.stats.downtime")}</p>
          </div>
          <div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-blue-500/30 transition-all duration-500">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-400 mb-2 font-bold">{t("hero.stats.scalability")}</p>
            <p className="text-2xl font-black text-white">10k+</p>
            <p className="text-sm text-gray-500">{t("hero.stats.monitored")}</p>
          </div>
          <div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-blue-500/30 transition-all duration-500">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-400 mb-2 font-bold">ROI</p>
            <p className="text-2xl font-black text-white">Data-Driven</p>
            <p className="text-sm text-gray-500">{t("hero.stats.strategic")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
