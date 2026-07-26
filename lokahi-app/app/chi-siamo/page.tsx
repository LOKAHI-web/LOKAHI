import Link from "next/link";

const values = [
    {
        number: "01",
        title: "Libertà",
        text: "La libertà di essere sé stesse, senza nascondersi e senza doversi giustificare.",
    },
    {
        number: "02",
        title: "Assenza di giudizio",
        text: "Uno spazio accogliente in cui ogni storia viene ascoltata e rispettata.",
    },
    {
        number: "03",
        title: "Condivisione",
        text: "Esperienze, emozioni e domande condivise con persone capaci di comprenderle.",
    },
    {
        number: "04",
        title: "Appartenenza",
        text: "La consapevolezza di non essere sole e di poter trovare il proprio posto.",
    },
    {
        number: "05",
        title: "Sostegno reciproco",
        text: "Un gruppo in cui aiutarsi, rispettarsi e crescere insieme.",
    },
    {
        number: "06",
        title: "Autenticità",
        text: "Relazioni vere, esperienze profonde e la possibilità di mostrarsi per ciò che si è.",
    },
];

export default function ChiSiamo() {
    return (
        <main className="min-h-screen bg-[#fffaf5] text-[#402216]">
            <header className="sticky top-0 z-50 border-b border-black/10 bg-[#fffaf5]/90 px-6 py-4 backdrop-blur-xl md:px-12 lg:px-20">
                <div className="mx-auto flex max-w-7xl items-center justify-between">
                    <Link
                        href="/"
                        className="text-sm font-bold tracking-[0.28em]"
                        aria-label="Torna alla home di LOKΛHI"
                    >
                        LOKΛHI
                    </Link>

                    <Link
                        href="/#contatti"
                        className="rounded-full bg-[#ef8b43] px-5 py-3 text-sm font-bold"
                    >
                        Contattaci
                    </Link>
                </div>
            </header>

            <section className="px-6 pb-24 pt-20 md:px-12 lg:px-20 lg:pb-32 lg:pt-28">
                <div className="mx-auto max-w-7xl">
                    <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#d96e24]">
                        La nostra storia
                    </p>

                    <h1 className="max-w-5xl text-6xl font-bold leading-[0.92] tracking-[-0.06em] md:text-8xl lg:text-[105px]">
                        Dalla solitudine alla libertà.
                    </h1>

                    <p className="mt-8 max-w-3xl text-lg leading-8 text-[#6d6964] md:text-xl">
                        LOKΛHI nasce dalla storia di Miriam e dal desiderio di offrire
                        alle donne queer uno spazio sicuro in cui incontrarsi, raccontarsi
                        ed essere finalmente sé stesse.
                    </p>
                </div>
            </section>

            <section className="px-6 pb-24 md:px-12 lg:px-20 lg:pb-32">
                <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[34px] bg-white shadow-[0_24px_70px_rgba(42,30,19,.14)] lg:grid-cols-[0.8fr_1.2fr]">
                    <div className="relative min-h-[520px] overflow-hidden bg-[#ef8b43]">
                        <img
                            src="/miriam.jpg"
                            alt="Miriam, fondatrice di LOKAHI"
                            className="absolute inset-0 h-full w-full object-cover object-center"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-8 pt-24 text-white">
                            <p className="text-3xl font-bold">Miriam</p>
                            <p className="mt-2 text-sm uppercase tracking-[0.25em] text-white/80">
                                Fondatrice di LOKΛHI
                            </p>
                        </div>
                    </div>

                    <div className="p-9 md:p-16">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d96e24]">
                            Chi è Miriam
                        </p>

                        <h2 className="mt-5 text-4xl font-bold leading-[1.02] tracking-[-0.05em] md:text-6xl">
                            Il coraggio di riconoscersi.
                        </h2>

                        <div className="mt-8 space-y-6 leading-8 text-[#6d6964]">
                            <p>
                                Miriam ha sempre saputo di essere lesbica, ma ha impiegato
                                21 anni per riuscire ad accettarsi pienamente.
                            </p>

                            <p>
                                Per molto tempo si è sentita sbagliata, incompresa e sola.
                                Non aveva punti di riferimento né persone con cui potersi
                                aprire liberamente. Ha custodito dentro di sé una parte
                                fondamentale della propria identità, senza trovare uno spazio
                                in cui sentirsi davvero ascoltata.
                            </p>

                            <p>
                                A 21 anni ha fatto coming out. Da quel momento è iniziato
                                il suo percorso verso l’accettazione, la consapevolezza e,
                                soprattutto, la libertà di essere sé stessa.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#402216] px-6 py-24 text-white md:px-12 lg:px-20 lg:py-32">
                <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
                            Perché nasce LOKΛHI
                        </p>

                        <h2 className="mt-5 text-5xl font-bold leading-[0.98] tracking-[-0.055em] md:text-7xl">
                            Lo spazio che Miriam avrebbe voluto trovare.
                        </h2>
                    </div>

                    <div className="space-y-6 text-lg leading-9 text-white/65">
                        <p>
                            LOKΛHI nasce dal desiderio di offrire ad altre donne ciò che è
                            mancato a Miriam durante il suo percorso: un punto di riferimento,
                            una comunità e uno spazio libero dal giudizio.
                        </p>

                        <p>
                            Attraverso viaggi ed esperienze di gruppo dedicati a donne Queer.
                            LOKΛHI crea occasioni per incontrarsi, confrontarsi e vivere liberamente il proprio orientamento
                            sessuale.
                        </p>

                        <p>
                            Persone inizialmente sconosciute possono scoprire di avere
                            vissuto emozioni, paure ed esperienze simili. Da questo incontro
                            può nascere qualcosa di prezioso: la consapevolezza di non essere
                            più sole.
                        </p>
                    </div>
                </div>
            </section>

            <section className="px-6 py-24 md:px-12 lg:px-20 lg:py-32">
                <div className="mx-auto max-w-7xl">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d96e24]">
                        La nostra missione
                    </p>

                    <h2 className="mt-5 max-w-5xl text-5xl font-bold leading-[0.98] tracking-[-0.055em] md:text-7xl">
                        Aiutare ogni donna queer a vivere la propria libertà.
                    </h2>

                    <div className="mt-12 grid gap-6 md:grid-cols-2">
                        <p className="rounded-[28px] bg-white p-8 text-lg leading-8 text-[#6d6964] shadow-[0_20px_60px_rgba(42,30,19,.10)]">
                            LOKΛHI vuole essere un luogo sicuro in cui fare domande,
                            raccontarsi, imparare, ascoltare ed essere ascoltate. Uno spazio
                            dove non sia necessario nascondersi o giustificarsi.
                        </p>

                        <p className="rounded-[28px] bg-[#ef8b43] p-8 text-lg leading-8">
                            Vogliamo che ogni partecipante possa provare libertà, leggerezza
                            e sicurezza, incontrando persone capaci di comprenderla e
                            riscoprendo il valore dell’appartenenza.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-white px-6 py-24 md:px-12 lg:px-20 lg:py-32">
                <div className="mx-auto max-w-7xl">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d96e24]">
                        I valori che ci guidano
                    </p>

                    <h2 className="mt-5 max-w-4xl text-5xl font-bold leading-[0.98] tracking-[-0.055em] md:text-7xl">
                        Insieme, senza lasciare indietro nessuna.
                    </h2>

                    <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {values.map((value) => (
                            <article
                                key={value.number}
                                className="rounded-[26px] border border-black/10 p-7"
                            >
                                <span className="font-bold text-[#d96e24]">
                                    {value.number}
                                </span>
                                <h3 className="mt-10 text-2xl font-bold">{value.title}</h3>
                                <p className="mt-3 leading-7 text-[#6d6964]">
                                    {value.text}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="m-3 rounded-[34px] bg-[#ef8b43] px-7 py-20 md:m-6 md:px-14 lg:px-20 lg:py-24">
                <p className="text-xs font-bold uppercase tracking-[0.2em]">
                    Cosa significa la parola LOKΛHI
                </p>

                <h2 className="mt-5 max-w-5xl text-5xl font-bold leading-[0.98] tracking-[-0.055em] md:text-7xl">
                    Equilibrio tra corpo, mente e spiritualità
                </h2>

                <p className="mt-5 max-w-3xl text-lg leading-8">
                    È l’incontro tra persone diverse che si ascoltano, si sostengono
                    e si riconoscono. Persone che, insieme, si ritrovano in uno spazio
                    sicuro e autentico, capace di farle sentire accolte e subito a casa.
                </p>

                <Link
                    href="/#viaggi"
                    className="mt-9 inline-block rounded-full bg-white px-7 py-4 font-bold"
                >
                    Scopri i nostri viaggi
                </Link>
            </section>

            <footer className="flex flex-col gap-5 bg-[#402216] px-6 py-12 text-white/65 md:flex-row md:items-center md:justify-between md:px-12 lg:px-20">
                <p className="font-bold tracking-[0.25em] text-white">LOKAHI</p>
                <p className="text-sm">© 2026 LOKAHI · Tutti i diritti riservati</p>
            </footer>
        </main>
    );
}