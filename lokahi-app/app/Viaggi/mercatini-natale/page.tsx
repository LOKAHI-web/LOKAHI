import Link from "next/link";

const programma = [
    {
        giorno: "6 dicembre",
        titolo: "Vipiteno e arrivo a Innsbruck",
        attivita: [
            "Partiremo da Forlì alle ore 6:30 con due minibus e faremo diverse fermate nel Nord Italia per accogliervi tutte.",
            "Prima tappa: il Natale delle Campane, il caratteristico mercatino di Natale di Vipiteno. Pranzeremo liberamente e avrete tempo per passeggiare tra vie illuminate, addobbi natalizi e bancarelle ricche di tradizione.",
            "Per chi lo desidera, sarà possibile vivere l’esperienza della pista da slittino innevata e illuminata del Monte Cavallo: 10 chilometri di divertimento, panorami invernali e risate da condividere.",
            "Nel tardo pomeriggio partiremo verso Innsbruck, raggiungeremo il nostro hotel ed effettueremo il check-in.",
            "La giornata terminerà con una cena tipica inclusa in hotel, con menù fisso.",
            "Chiacchiere, giochi e tante risate",
        ],
    },
    {
        giorno: "7 dicembre",
        titolo: "La magia di Innsbruck",
        attivita: [
            "Inizieremo la giornata con una ricca colazione a buffet in hotel.",
            "Raggiungeremo il famoso centro storico di Innsbruck, dove avrete tempo libero per visitarlo, pranzare e scoprire le vie illuminate, i mercatini e i meravigliosi panorami sulle montagne.",
            "Nel tardo pomeriggio torneremo in hotel per concederci un momento di benessere tra piscina coperta e sauna.",
            "Tra relax, chiacchiere e giochi pensati per conoscerci meglio, continueremo a creare connessioni e nuovi ricordi insieme.",
            "Concluderemo la giornata con una cena tipica inclusa in hotel, con menù fisso.",
            "Chiacchiere, giochi e tante risate",
        ],
    },
    {
        giorno: "8 dicembre",
        titolo: "Levico Terme e il Parco degli Asburgo",
        attivita: [
            "Dopo la colazione a buffet in hotel, partiremo per la nostra ultima tappa.",
            "Visiteremo il Mercatino di Natale Asburgico di Levico Terme, ospitato nel suggestivo Parco Secolare degli Asburgo.",
            "Tra alberi secolari, casette di legno, profumi natalizi e atmosfere fiabesche, avremo tempo per pranzare, acquistare gli ultimi souvenir e goderci insieme le ultime ore del viaggio.",
            "Nel primo pomeriggio inizieremo il rientro, ripercorrendo le fermate effettuate durante il viaggio di andata.",
        ],
    },
];

const incluso = [
    "Due notti in hotel 3 stelle, con sistemazione in camere doppie.",
    "Tassa di soggiorno.",
    "Accesso alla piscina coperta e alla sauna dell’hotel.",
    "Due colazioni a buffet.",
    "Due cene tipiche in hotel con menù fisso.",
    "Attività e giochi pensati per divertirci e conoscerci meglio.",
    "Due coordinatrici di gruppo presenti durante tutto il weekend.",
];

const nonIncluso = [
    "Pranzi.",
    "Bevande ed eventuali consumazioni extra.",
    "Servizio navetta di andata e ritorno con conducente: 50 € a persona, da pagare in loco.",
    "La cassa comune da 30 €, viene utilizzata per coprire i costi di benzina, autostrada, parcheggi e vignetta autostradaleAustriaca",
    "Esperienza facoltativa in slittino: costo indicativo di circa 30–40 € a persona, da pagare in loco.",
    "Tutto ciò che non è indicato nella sezione “Servizi inclusi”.",
];

const fermate = [
    {
        luogo: "Casello di Forlì",
        orario: "6:30",
    },
    {
        luogo: "Casello di Bologna o Aereporto di bologna",
        orario: "7:30",
    },
    {
        luogo: "Casello di Modena Nord",
        orario: "7:50",
    },
    {
        luogo: "Casello di Verona Nord",
        orario: "8:50",
    },
];

export default function MercatiniNatalePage() {
    return (
        <main className="min-h-screen bg-[#fffaf5] text-[#402216]">
            {/* COPERTINA */}
            <section
                className="relative flex min-h-[760px] w-full items-center justify-center bg-[length:115%_115%] bg-center bg-no-repeat px-6 py-28"
                style={{
                    backgroundImage: "url('/mercatini-natale.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-[#24130c]/75 via-[#24130c]/55 to-[#24130c]/80" />

                <Link
                    href="/#viaggi"
                    className="absolute left-6 top-6 z-10 rounded-full border border-white/50 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white hover:text-[#402216] md:left-12 md:top-10"
                >
                    ← Tutti i viaggi
                </Link>

                <div className="relative z-10 mx-auto max-w-5xl text-center text-white">
                    <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#ef8b43] md:text-lg">
                        Programma
                    </p>

                    <h1 className="mt-5 text-6xl font-bold tracking-[-0.06em] sm:text-7xl md:text-8xl lg:text-9xl">
                        Immagina
                    </h1>

                    <div className="mx-auto mt-10 max-w-4xl space-y-6 text-lg leading-8 text-white/95 md:text-2xl md:leading-10">
                        <p>
                            La magia dei mercatini di Natale: le luci che illuminano
                            le strade, il profumo del vin brulé e della cannella, le
                            bancarelle piene di colori e tradizione.
                        </p>

                        <p>
                            Ma la vera bellezza sarà viverla insieme ad altre donne
                            queer, condividendo risate, emozioni e complicità e
                            trasformando una semplice passeggiata tra casette di
                            legno in un’esperienza unica.
                        </p>
                    </div>

                    <div className="mt-10 inline-flex rounded-full bg-[#ef8b43] px-6 py-3 font-bold text-[#402216]">
                        6–8 dicembre 2026
                    </div>
                </div>
            </section>

            {/* PROGRAMMA */}
            <section className="px-6 py-20 md:px-12 lg:px-20">
                <div className="mx-auto max-w-5xl">
                    <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#d96e24]">
                        Giorno dopo giorno
                    </p>

                    <h2 className="mt-5 max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.05em] md:text-7xl">
                        Tre giorni dentro la magia del Natale.
                    </h2>

                    <p className="mt-7 max-w-3xl text-lg leading-8 text-[#6d6964] md:text-xl">
                        Apri ogni giornata per scoprire tutte le esperienze che
                        vivremo insieme.
                    </p>

                    <p className="mt-4 text-sm font-semibold text-[#d96e24]">
                        Scopri più avanti tutte le fermate previste per la navetta.
                    </p>

                    <div className="mt-14 space-y-5">
                        {programma.map((tappa, index) => (
                            <details
                                key={tappa.giorno}
                                className="group overflow-hidden rounded-[28px] bg-white shadow-[0_18px_55px_rgba(64,34,22,0.10)]"
                            >
                                <summary className="flex cursor-pointer list-none items-center gap-4 p-5 md:gap-7 md:p-8">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ef8b43] text-lg font-bold text-[#402216] md:h-14 md:w-14">
                                        {index + 1}
                                    </div>

                                    <div className="min-w-0 flex-1 text-left">
                                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d96e24] md:text-sm">
                                            {tappa.giorno}
                                        </p>

                                        <h3 className="mt-1 text-xl font-bold leading-tight md:text-3xl">
                                            {tappa.titolo}
                                        </h3>
                                    </div>

                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#402216] text-2xl text-white transition group-open:rotate-45 group-open:bg-[#ef8b43] group-open:text-[#402216]">
                                        +
                                    </div>
                                </summary>

                                <div className="border-t border-[#efe4dc] px-6 py-8 md:px-10">
                                    <ul className="space-y-5">
                                        {tappa.attivita.map((attivita) => (
                                            <li
                                                key={attivita}
                                                className="flex gap-4 text-base leading-7 text-[#6d6964] md:text-lg md:leading-8"
                                            >
                                                <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#ef8b43]" />
                                                <span>{attivita}</span>
                                            </li>
                                        ))}
                                    </ul>


                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* COSTI AGGIUNTIVI */}
            <section className="px-6 pb-20 md:px-12 lg:px-20">
                <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
                    <div className="rounded-[28px] bg-[#ef8b43] p-7 md:p-9">
                        <p className="text-sm font-bold uppercase tracking-[0.25em]">
                            Navetta A/R
                        </p>
                        <p className="mt-3 text-4xl font-bold">50 €</p>
                        <p className="mt-2 leading-7">
                            A persona, con conducente, da pagare direttamente in
                            loco.
                        </p>
                    </div>

                    <div className="rounded-[28px] bg-[#402216] p-7 text-white md:p-9">
                        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#ef8b43]">
                            Slittino facoltativo
                        </p>
                        <p className="mt-3 text-4xl font-bold">Circa 30–40 €</p>
                        <p className="mt-2 leading-7 text-white/80">
                            A persona, da pagare in loco. L’attività non è
                            obbligatoria.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVIZI */}
            <section className="bg-[#402216] px-6 py-20 text-white md:px-12 lg:px-20">
                <div className="mx-auto max-w-6xl">
                    <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#ef8b43]">
                        Informazioni utili
                    </p>

                    <h2 className="mt-5 text-5xl font-bold tracking-[-0.05em] md:text-7xl">
                        Cosa comprende il viaggio.
                    </h2>

                    <div className="mt-14 grid gap-7 lg:grid-cols-2">
                        <div className="rounded-[30px] bg-[#ef8b43] p-7 text-[#402216] md:p-10">
                            <div className="flex items-center gap-4">
                                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#402216] text-xl font-bold text-white">
                                    ✓
                                </span>
                                <h3 className="text-3xl font-bold">Servizi inclusi</h3>
                            </div>

                            <ul className="mt-8 space-y-4">
                                {incluso.map((servizio) => (
                                    <li
                                        key={servizio}
                                        className="flex gap-3 leading-7 text-[#402216]"
                                    >
                                       <span className="font-bold text-[#402216]">•</span>
                                        <span>{servizio}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-[30px] border border-white/20 bg-white/10 p-7 backdrop-blur-sm md:p-10">
                            <div className="flex items-center gap-4">
                                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl font-bold text-[#402216]">
                                    ×
                                </span>
                                <h3 className="text-3xl font-bold">Non inclusi</h3>
                            </div>

                            <ul className="mt-8 space-y-4">
                                {nonIncluso.map((servizio) => (
                                    <li
                                        key={servizio}
                                        className="flex gap-3 leading-7 text-white/80"
                                    >
                                        <span className="font-bold text-[#402216]">•</span>
                                        <span>{servizio}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FERMATE NAVETTA */}
            <section className="px-6 py-20 md:px-12 lg:px-20">
                <div className="mx-auto max-w-5xl">
                    <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#d96e24]">
                        Partiamo insieme
                    </p>

                    <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <h2 className="max-w-3xl text-5xl font-bold tracking-[-0.05em] md:text-7xl">
                            Fermate navetta.
                        </h2>

                        <p className="max-w-xs text-sm leading-6 text-[#6d6964]">
                            Gli orari indicati sono orientativi e potranno subire
                            variazioni in base al traffico e alle esigenze del
                            gruppo.
                        </p>
                    </div>

                    <div className="mt-12 overflow-hidden rounded-[30px] bg-white shadow-[0_18px_55px_rgba(64,34,22,0.10)]">
                        {fermate.map((fermata, index) => (
                            <div
                                key={fermata.luogo}
                                className="flex items-center gap-5 border-b border-[#efe4dc] px-6 py-6 last:border-b-0 md:px-10"
                            >
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ef8b43] font-bold">
                                    {index + 1}
                                </span>

                                <div className="flex flex-1 flex-col justify-between gap-2 sm:flex-row sm:items-center">
                                    <p className="text-lg font-bold md:text-xl">
                                        {fermata.luogo}
                                    </p>

                                    <p className="text-xl font-bold text-[#d96e24]">
                                        {fermata.orario}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PREZZO EARLY BIRD */}
            <section className="px-4 pb-12 sm:px-6 md:px-12 lg:px-20">
                <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[28px] bg-[#402216] px-5 py-8 text-center text-white shadow-[0_20px_60px_rgba(64,34,22,0.22)] sm:px-7 sm:py-10 md:px-12 md:py-12">
                    <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#ef8b43]/20 blur-2xl" />
                    <div className="absolute -bottom-14 -left-12 h-44 w-44 rounded-full bg-[#ef8b43]/15 blur-3xl" />

                    <div className="relative z-10">
                        <p className="inline-flex rounded-full bg-[#ef8b43] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#402216] sm:text-sm">
                            Offerta Early Bird
                        </p>

                        <h2 className="mx-auto mt-4 max-w-3xl text-2xl font-bold leading-tight tracking-[-0.05em] sm:text-3xl md:text-5xl">
                            Regalati un Natale da vivere insieme.
                        </h2>

                        <div className="mt-5">
                            <p className="text-sm font-semibold text-white/60">
                                Prezzo originale
                            </p>

                            <p className="mt-1 text-3xl font-bold text-white/50 line-through decoration-[#ef8b43] decoration-2 md:text-4xl">
                                599 €
                            </p>

                            <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-[#ef8b43]">
                                Prezzo riservato
                            </p>

                            <div className="mt-1 flex items-end justify-center gap-2">
                                <span className="text-5xl font-bold tracking-[-0.07em] sm:text-6xl md:text-7xl">
                                    509 €
                                </span>

                                <span className="mb-2 text-sm font-semibold text-white/70 sm:text-base">
                                    a persona
                                </span>
                            </div>
                        </div>

                        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-sm font-bold text-[#402216]">
                            <span>✓</span>
                            <span>Possibilità di pagamento a rate</span>
                        </div>

                        <div className="mx-auto mt-5 max-w-xl rounded-[18px] border border-[#ef8b43]/40 bg-white/10 px-4 py-3 backdrop-blur-sm">
                            <p className="text-lg font-bold text-[#ef8b43] md:text-xl">
                                Risparmia 90 €
                            </p>

                            <p className="mt-1 text-sm leading-6 text-white/85">
                                Prenota entro il 15 ottobre 2026 per approfittare del prezzo
                                speciale. Dopo questa data il prezzo aumenterà.
                            </p>
                        </div>

                        <Link
                            href="https://docs.google.com/forms/d/e/1FAIpQLSc-PXvJPfNgXID4ixIXP8CH6MNm1skbw2rvLA_k4OPeyj6VWg/viewform?usp=header"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#ef8b43] px-10 py-4 text-xl font-bold text-[#402216] shadow-[0_10px_30px_rgba(0,0,0,0.20)] transition hover:scale-105 hover:bg-white sm:w-auto"
                        >
                            Clicca qui per prenota e bloccare il tuo posto con soli 309 €
                        </Link>
                    </div>
                </div>
            </section>

            {/* CHIUSURA */}
            <section className="px-6 pb-20 md:px-12 lg:px-20">
                <div className="mx-auto max-w-5xl rounded-[34px] bg-[#ef8b43] px-7 py-14 text-center md:px-14 md:py-20">
                    <p className="text-sm font-bold uppercase tracking-[0.3em]">
                        Mercatini di Natale 2026
                    </p>

                    <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-[-0.05em] md:text-6xl">
                        Il Natale è ancora più bello quando lo viviamo insieme.
                    </h2>
                </div>
            </section>

            {/* PULSANTE FISSO */}
            <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc-PXvJPfNgXID4ixIXP8CH6MNm1skbw2rvLA_k4OPeyj6VWg/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center justify-center rounded-full bg-[#ef8b43] px-7 py-4 text-base font-bold text-[#402216] shadow-[0_12px_35px_rgba(64,34,22,0.35)] transition hover:scale-105 hover:bg-white md:bottom-7 md:left-auto md:right-7 md:translate-x-0"
            >
                Prenota qui →
            </a>
        </main>
    );
}