import { WHATSAPP_URL } from "./WhatsAppFloat"

const CTA = () => {
  return (
    <section className="py-20 md:py-32 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center rounded-2xl bg-hero-gradient p-12 md:p-16 shadow-hero">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
          Pronto para assumir o controle de seus ativos?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
          Junte-se a empresas que já utilizam o MFP Manager para reduzir custos, ganhar visibilidade e eliminar o improviso na gestão de ativos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-red-500/50 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              Solicite uma demonstração
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-red-400 rounded-full text-white hover:bg-red-500/10 hover:border-red-500 px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              Fale com o time de vendas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
