import telaPc from '../assets/mfp-tela-pc-1.png'
import telaMobile1 from '../assets/mfp-mobile-tela-1.png'
import telaMobile2 from '../assets/mfp-mobile-tela-2.png'
import telaMobile3 from '../assets/mfp-mobile-tela-3.png'


function About() {
    return (
        <section id="sobre" className="py-20 md:py-32 scroll-mt-24 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                        Ecossistema
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black mt-6 mb-6 tracking-tight">
                        Experiência Omnichannel: Web e App
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Acompanhe seus ativos com total visibilidade. Do painel administrativo web ao aplicativo móvel, 
                        você tem o controle na palma da mão com sincronização em tempo real.
                    </p>
                </div>

                <div className="grid gap-16">
                    {/* Web Platform */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-blue-600/5 blur-3xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="relative">
                            <h3 className="text-xl font-bold text-blue-400 mb-8 flex items-center gap-3 justify-center">
                                <span className="w-8 h-[1px] bg-blue-500/30" />
                                Plataforma Web de Alta Performance
                                <span className="w-8 h-[1px] bg-blue-500/30" />
                            </h3>
                            <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-4 backdrop-blur-sm shadow-2xl">
                                <img
                                    src={telaPc}
                                    alt="Plataforma web MFP Manager"
                                    className="w-full h-auto rounded-xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Mobile App */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-blue-400/5 blur-3xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="relative">
                            <h3 className="text-xl font-bold text-blue-400 mb-8 flex items-center gap-3 justify-center">
                                <span className="w-8 h-[1px] bg-blue-500/30" />
                                Aplicativo Móvel Intuitivo
                                <span className="w-8 h-[1px] bg-blue-500/30" />
                            </h3>
                            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                                {[telaMobile1, telaMobile2, telaMobile3].map((img, idx) => (
                                    <div key={idx} className="rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-3 backdrop-blur-sm shadow-xl hover:scale-105 transition-transform duration-500">
                                        <img
                                            src={img}
                                            alt={`App MFP Manager tela ${idx + 1}`}
                                            className="max-w-[140px] md:max-w-[180px] h-auto rounded-[2rem]"
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
