import Link from "next/link";

export default function IslandaPage() {
    return (
        <main className="min-h-screen bg-[#fffaf5] text-[#402216]">
            <section className="relative flex min-h-screen items-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1529963183134-61a90db47eaf?auto=format&fit=crop&w=2000&q=85')",
                    }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#101c24]/95 via-[#173a4a]/55 to-[#101c24]/25" />

                <Link
                    href="/#viaggi"
                    className="absolute left-6 top-6 z-20 rounded-full border border-white/40 bg-black/20 px-5 py-3 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white hover:text-[#402216]"
                >
                    ← Tutti i viaggi
                </Link>

                <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-32 text-center text-white md:px-12">
                    <div className="mx-auto inline-block rotate-[-6deg] rounded-lg bg-[#ef8b43] px-7 py-4 text-xl font-black uppercase tracking-[0.2em] text-[#402216] shadow-2xl md:text-3xl">
                        Sold out
                    </div>

                    <p className="mt-10 text-sm font-bold uppercase tracking-[0.35em] text-[#ffc18f] md:text-lg">
                        22 – 29 novembre 2026
                    </p>

                    <h1 className="mt-5 text-6xl font-bold tracking-[-0.07em] md:text-9xl">
                        Islanda
                    </h1>

                    <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/85 md:text-2xl md:leading-10">
                        Alla ricerca dell’aurora boreale, tra paesaggi immensi,
                        natura selvaggia e meraviglie di ghiaccio.
                    </p>
                </div>
            </section>

            <section className="px-6 py-24 md:px-12">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#d96e24]">
                        Viaggio al completo
                    </p>

                    <h2 className="mt-6 text-4xl font-bold leading-tight tracking-[-0.05em] md:text-7xl">
                        I posti sono terminati.
                    </h2>

                    <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#6d6964] md:text-xl">
                        Questo viaggio è ufficialmente sold out. Continua a
                        seguirci per scoprire le prossime partenze e le nuove
                        avventure firmate LOKAHI.
                    </p>

                    <Link
                        href="/#viaggi"
                        className="mt-10 inline-flex rounded-full bg-[#ef8b43] px-8 py-4 text-lg font-bold text-[#402216] transition hover:scale-105 hover:bg-[#402216] hover:text-white"
                    >
                        Scopri gli altri viaggi →
                    </Link>
                </div>
            </section>
        </main>
    );
}