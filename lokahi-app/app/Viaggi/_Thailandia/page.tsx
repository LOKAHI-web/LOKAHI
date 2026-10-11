import Link from "next/link";

export default function ThailandiaPage() {
    return (
        <main className="min-h-screen bg-[#fffaf5] text-[#402216]">
            {/* COPERTINA */}
            <section className="relative flex min-h-screen w-full items-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1745368916323-eab9a653e380?auto=format&fit=crop&w=2000&q=85')",
                    }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#25160f] via-[#402216]/55 to-[#17352d]/20" />

                <Link
                    href="/#viaggi"
                    className="absolute left-6 top-6 z-20 rounded-full border border-white/40 bg-black/20 px-5 py-3 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white hover:text-[#402216] md:left-10 md:top-10"
                >
                    ← Tutti i viaggi
                </Link>

                <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-32 text-center text-white md:px-12">
                    <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#ffc078] md:text-base">
                        27 febbraio – 9 marzo 2027
                    </p>

                    <h1 className="mt-5 text-6xl font-bold leading-none tracking-[-0.06em] sm:text-7xl md:text-9xl">
                        Thailandia
                    </h1>

                    <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/85 md:text-xl">
                        Templi, isole tropicali, natura, sapori locali e nuove
                        connessioni da vivere insieme.
                    </p>

                    <div className="mx-auto mt-14 max-w-4xl rounded-[32px] border border-white/25 bg-black/25 px-6 py-10 shadow-2xl backdrop-blur-md md:px-12 md:py-14">
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ffc078] md:text-sm">
                            Stiamo preparando qualcosa di speciale
                        </p>

                        <h2 className="mt-5 text-4xl font-bold uppercase leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-7xl">
                            Programma
                            <br />
                            in arrivo
                        </h2>

                        <p className="mx-auto mt-6 max-w-xl leading-7 text-white/80">
                            L’itinerario completo e tutte le informazioni sul
                            viaggio saranno pubblicati prossimamente.
                        </p>
                    </div>
                </div>
            </section>

            {/* ANTEPRIMA */}
            <section className="px-6 py-16 md:px-12 md:py-24 lg:px-20">
                <div className="mx-auto max-w-5xl text-center">
                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d96e24]">
                        Un assaggio del viaggio
                    </p>

                    <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-[-0.05em] md:text-6xl">
                        Un nuovo mondo da scoprire insieme.
                    </h2>

                    <div className="mt-12 grid gap-4 md:grid-cols-3">
                        <div className="rounded-[28px] bg-[#f5e7d8] p-7">
                            <span className="text-3xl">🌴</span>
                            <h3 className="mt-5 text-2xl font-bold">
                                Natura
                            </h3>
                            <p className="mt-3 leading-7 text-[#6d564b]">
                                Isole tropicali, mare e paesaggi sorprendenti.
                            </p>
                        </div>

                        <div className="rounded-[28px] bg-[#ef8b43] p-7">
                            <span className="text-3xl">🏯</span>
                            <h3 className="mt-5 text-2xl font-bold">
                                Tradizioni
                            </h3>
                            <p className="mt-3 leading-7 text-[#5e3524]">
                                Templi, cultura e luoghi ricchi di storia.
                            </p>
                        </div>

                        <div className="rounded-[28px] bg-[#402216] p-7 text-white">
                            <span className="text-3xl">🥭</span>
                            <h3 className="mt-5 text-2xl font-bold">
                                Sapori
                            </h3>
                            <p className="mt-3 leading-7 text-white/70">
                                Profumi, mercati e autentica cucina thailandese.
                            </p>
                        </div>
                    </div>

                    <p className="mx-auto mt-12 max-w-2xl text-lg leading-8 text-[#6d564b]">
                        Continua a seguirci: presto pubblicheremo il programma
                        giorno per giorno e tutte le informazioni per partecipare.
                    </p>

                    <Link
                        href="/#viaggi"
                        className="mt-8 inline-flex rounded-full bg-[#ef8b43] px-8 py-4 text-lg font-bold transition hover:scale-105 hover:bg-[#402216] hover:text-white"
                    >
                        Torna a tutti i viaggi →
                    </Link>
                </div>
            </section>
        </main>
    );
}