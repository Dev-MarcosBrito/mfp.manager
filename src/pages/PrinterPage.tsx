import { useTranslation } from "react-i18next"
import { WHATSAPP_URL } from "../components/layout/WhatsAppFloat"
import { Button } from "../components/ui/Button"

function PrinterPage() {
  const { t } = useTranslation()

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-6 overflow-hidden bg-black">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6 animate-fade-in">
            {t("printer_page.badge")}
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tight leading-[1.1]">
            {t("printer_page.title")} <br /> 
            <span className="text-gradient">PRINTER</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            {t("printer_page.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button href={WHATSAPP_URL} variant="primary" size="lg" className="w-full sm:w-auto">
              {t("printer_page.cta_demo")}
            </Button>
            <Button href={WHATSAPP_URL} variant="outline" size="lg" className="w-full sm:w-auto border-white/10">
              {t("printer_page.cta_sales")}
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          <div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-blue-500/30 transition-all duration-500">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-400 mb-2 font-bold">{t("printer_page.stats.monitoring")}</p>
            <p className="text-xl font-bold text-white mb-2">{t("printer_page.stats.real_time")}</p>
            <p className="text-sm text-gray-500 leading-relaxed">{t("printer_page.stats.real_time_desc")}</p>
          </div>
          <div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-blue-500/30 transition-all duration-500">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-400 mb-2 font-bold">{t("printer_page.stats.management")}</p>
            <p className="text-xl font-bold text-white mb-2">{t("printer_page.stats.costs")}</p>
            <p className="text-sm text-gray-500 leading-relaxed">{t("printer_page.stats.costs_desc")}</p>
          </div>
          <div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-blue-500/30 transition-all duration-500">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-400 mb-2 font-bold">{t("printer_page.stats.proactivity")}</p>
            <p className="text-xl font-bold text-white mb-2">{t("printer_page.stats.alerts")}</p>
            <p className="text-sm text-gray-500 leading-relaxed">{t("printer_page.stats.alerts_desc")}</p>
          </div>
          <div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-blue-500/30 transition-all duration-500">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-400 mb-2 font-bold">{t("printer_page.stats.financial")}</p>
            <p className="text-xl font-bold text-white mb-2">{t("printer_page.stats.billing")}</p>
            <p className="text-sm text-gray-500 leading-relaxed">{t("printer_page.stats.billing_desc")}</p>
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
              {t("printer_page.cta_section.title")}
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              {t("printer_page.cta_section.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href={WHATSAPP_URL} variant="primary" size="lg" className="w-full sm:w-auto">
                {t("printer_page.cta_demo")}
              </Button>
              <Button href={WHATSAPP_URL} variant="outline" size="lg" className="w-full sm:w-auto border-white/10">
                {t("printer_page.cta_sales")}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrinterPage
