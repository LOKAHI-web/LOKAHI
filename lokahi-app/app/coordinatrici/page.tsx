import Link from "next/link";

export default function CoordinatriciPage() {
    return (
        <main className="min-h-screen bg-[#fffaf5] text-[#402216]">
            <header className="flex items-center justify-between border-b border-[#402216]/10 px-6 py-6 md:px-12">
                <Link
                    href="/"
                    className="text-sm font-bold tracking-[0.35em]"
                >
                    LOKAHI
                </Link>

                <div className="flex items-center gap-3">
                    <Link
                        href="/chi-siamo"
                        className="rounded-full border border-[#402216]/20 px-5 py-3 text-sm font-bold transition hover:bg-[#402216] hover:text-white"
                    >
                        Chi siamo
                    </Link>

                    <Link
                        href="/#contatti"
                        className="rounded-full bg-[#ef8b43] px-5 py-3 text-sm font-bold transition hover:bg-[#402216] hover:text-white"
                    >
                        Contattaci
                    </Link>
                </div>
            </header>

            {/* INTRODUZIONE */}
            <section className="px-6 pb-16 pt-20 md:px-12 md:pb-24 md:pt-28">
                <div className="mx-auto max-w-6xl">
                    <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#d96e24]">
                        Le coordinatrici LOKAHI
                    </p>

                    <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-[0.95] tracking-[-0.06em] md:text-8xl">
                        Le persone che viaggeranno con te.
                    </h1>

                    <p className="mt-8 max-w-3xl text-lg leading-8 text-[#6d6964] md:text-xl">
                        Una presenza attenta prima, durante e dopo ogni
                        partenza. Perché sentirsi accolte è parte del viaggio.
                    </p>
                </div>
            </section>

            {/* CHIARA */}
            <section className="px-6 pb-24 md:px-12">
                <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[36px] bg-white shadow-[0_24px_80px_rgba(64,34,22,0.12)] md:grid-cols-2">
                    <div className="min-h-[520px]">
                        <img
                            src="/chiara.jpg"
                            alt="Chiara, coordinatrice LOKAHI"
                            className="h-full min-h-[520px] w-full object-cover object-center"
                        />
                    </div>

                    <div className="flex flex-col justify-center p-8 md:p-14">
                        <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#d96e24]">
                            La nostra coordinatrice
                        </p>

                        <h2 className="mt-5 text-5xl font-bold tracking-[-0.05em] md:text-7xl">
                            Chiara
                        </h2>

                        <p className="mt-3 text-lg font-bold text-[#ef8b43]">
                            Coordinatrice LOKAHI
                        </p>

                        <p className="mt-8 text-lg leading-8 text-[#6d6964]">
                            Chiara accompagna ogni partenza insieme a Miriam ed
                            è un punto di riferimento durante tutto il viaggio.
                            Con attenzione, disponibilità e presenza, aiuta il
                            gruppo a sentirsi accolto fin dal primo momento e
                            segue ogni esperienza con cura, energia e
                            spontaneità.
                        </p>
                    </div>
                </div>
            </section>

            {/* STORIA */}
            <section className="bg-[#402216] px-6 py-24 text-white md:px-12 md:py-32">
                <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-20">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#ef8b43]">
                            Come ci siamo incontrate
                        </p>

                        <h2 className="mt-6 text-5xl font-bold leading-[0.95] tracking-[-0.06em] md:text-7xl">
                            Siamo partite da sconosciute. Siamo diventate
                            famiglia.
                        </h2>

                        <div className="mt-9 space-y-6 text-lg leading-8 text-white/75">
                            <p>
                                Chiara e Miriam si sono conosciute durante un
                                viaggio LOKAHI a Fuerteventura, quando Chiara
                                partecipava per la prima volta come
                                viaggiatrice.
                            </p>

                            <p>
                                Si sono incontrate in un momento difficile
                                della loro vita, in cui entrambe avevano
                                bisogno di ritrovare forza e nuovi punti di
                                riferimento. Durante quel viaggio si sono
                                sostenute a vicenda, creando un legame profondo
                                che nel tempo è diventato famiglia.
                            </p>

                            <p>
                                Chiara ha preso a cuore il progetto di Miriam,
                                riconoscendone il valore e condividendone lo
                                spirito. Da quell’incontro è nata una
                                collaborazione sincera: oggi accompagnano
                                insieme ogni partenza LOKAHI.
                            </p>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-[36px]">
                        <img
                            src="/chiara-miriam.jpg"
                            alt="Chiara e Miriam insieme a Fuerteventura"
                            className="h-[650px] w-full object-cover object-center"
                        />
                    </div>
                </div>
            </section>

            {/* CHIUSURA */}
            <section className="px-6 py-24 text-center md:px-12">
                <div className="mx-auto max-w-4xl">
                    <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#d96e24]">
                        In viaggio, insieme
                    </p>

                    <h2 className="mt-6 text-4xl font-bold tracking-[-0.05em] md:text-7xl">
                        Pronta a partire con noi?
                    </h2>

                    <Link
                        href="/#viaggi"
                        className="mt-10 inline-flex rounded-full bg-[#ef8b43] px-8 py-4 text-lg font-bold transition hover:scale-105 hover:bg-[#402216] hover:text-white"
                    >
                        Scopri i viaggi →
                    </Link>
                </div>
            </section>
        </main>
    );
}