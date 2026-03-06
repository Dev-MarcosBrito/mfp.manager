import telaPc from '../assets/mfp-tela-pc-1.png'
import telaMobile1 from '../assets/mfp-mobile-tela-1.png'
import telaMobile2 from '../assets/mfp-mobile-tela-2.png'
import telaMobile3 from '../assets/mfp-mobile-tela-3.png'


function About() {
    return (
        <section id="sobre" className="py-16 md:py-24 scroll-mt-24">
            <div className="max-w-5xl mx-auto px-4">
                <header className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">Experiência completa Web e App</h2>
                    <p className="text-muted-foreground">
                        Acompanhe seus ativos tanto no painel web quanto no aplicativo móvel, com a mesma qualidade de
                        informações em qualquer dispositivo.
                    </p>
                </header>

                <div className="space-y-10">
                    <div>
                        <h3 className="flex justify-center items-center text-blue-500 font-semibold mb-4">Web</h3>
                        <div className="flex justify-center">
                            <img
                                src={telaPc}
                                alt="Tela principal da plataforma web do MFP Manager"
                                className="max-w-full h-auto rounded-xl shadow-card"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    <div>
                        <h3 className="flex justify-center items-center text-blue-500 font-semibold mb-4">App</h3>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <img
                                src={telaMobile1}
                                alt="Tela do aplicativo móvel mostrando lista de ativos"
                                className="max-w-[160px] h-auto rounded-xl shadow-card"
                                loading="lazy"
                            />
                            <img
                                src={telaMobile2}
                                alt="Tela do aplicativo móvel com detalhes de um equipamento"
                                className="max-w-[160px] h-auto rounded-xl shadow-card"
                                loading="lazy"
                            />
                            <img
                                src={telaMobile3}
                                alt="Tela do aplicativo móvel com métricas de desempenho"
                                className="max-w-[160px] h-auto rounded-xl shadow-card"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About