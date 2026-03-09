import { WHATSAPP_URL } from "../layout/WhatsAppFloat"
import { Button } from "../ui/Button"

const CTA = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-t from-blue-900/20 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center rounded-[3rem] border border-white/5 bg-white/[0.02] backdrop-blur-xl p-12 md:p-20 shadow-2xl relative overflow-hidden">
          {/* Inner Glow */}
          <div className="absolute inset-0 bg-blue-600/5 -z-10" />
          
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white">
            Pronto para assumir o controle total?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Junte-se a centenas de empresas que já utilizam o MFP Manager para eliminar o improviso e ganhar visibilidade total sobre seu parque tecnológico.
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
  );
};

export default CTA;
