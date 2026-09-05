import Link from "next/link";

type Attivita = {
    orario?: string;
    testo: string;
    stato?: "incluso" | "non-incluso" | "facoltativo";
};

type Giorno = {
    data: string;
    titolo: string;
    descrizione: string;
    attivita: Attivita[];
};

const programma: Giorno[] = [
    {
        data: "Domenica 28 marzo",
        titolo: "Benvenute in Marocco",
        descrizione:
            "Il viaggio comincia: arrivo, incontro con il gruppo e prima serata insieme nella nostra Surf House.",
        attivita: [
            { testo: "Arrivo in Marocco" },
            { testo: "Trasferimento e sistemazione nella Surf House" },
            { testo: "Cena nella Surf House", stato: "incluso" },
            { testo: "Giochi rompi ghiacchio" },
        ],
    },
    {
        data: "Lunedì 29 marzo",
        titolo: "La prima onda",
        descrizione:
            "La nostra prima giornata di surf, tra oceano, relax e un’esperienza dedicata al benessere.",
        attivita: [
            { orario: "08:00", testo: "Colazione", stato: "incluso" },
            { orario: "09:00", testo: "Lezione e sessione di surf", stato: "incluso" },
            { testo: "Pranzo in spiaggia", stato: "incluso" },
            { orario: "14:45", testo: "Rientro nella Surf House" },
            { testo: "Tempo per doccia e relax" },
            {
                testo: "Esperienza yoga", stato: "incluso"
            },
            { testo: "Cena nella Surf House", stato: "incluso" },
        ],
    },
    {
        data: "Martedì 30 marzo",
        titolo: "Surf e sapori marocchini",
        descrizione:
            "Una giornata tra onde e tradizioni locali, culminata in un’esperienza di cucina marocchina.",
        attivita: [
            { orario: "08:00", testo: "Colazione", stato: "incluso" },
            { orario: "09:00", testo: "Lezione e sessione di surf", stato: "incluso" },
            { testo: "Pranzo in spiaggia", stato: "incluso" },
            { orario: "14:45", testo: "Rientro nella Surf House" },
            { testo: "Tempo per doccia e relax" },
            {
                testo:
                    "Visita al mercato e spesa insieme al cuoco, seguite da una cooking class a Tamraght",
                stato: "incluso",
            },
            { testo: "Cena", stato: "incluso" },
        ],
    },
    {
        data: "Mercoledì 31 marzo",
        titolo: "Paradise Valley e Souk El Had",
        descrizione:
            "Lasciamo la costa per scoprire paesaggi naturali, prodotti locali e l’atmosfera autentica del souk.",
        attivita: [
            { orario: "08:00", testo: "Colazione", stato: "incluso" },
            { orario: "09:00", testo: "Partenza per Paradise Valley", stato: "incluso" },
            {
                orario: "10:00",
                testo: "Sosta presso una cooperativa di prodotti locali",
            },
            {
                testo:
                    "Visita e tempo libero a Paradise Valley, un’oasi naturale tra montagne, palme e piscine naturali, perfetta per passeggiare, rilassarsi e scoprire il lato più autentico del Marocco.",
            },
            { testo: "Pranzo", stato: "incluso" },
            { orario: "14:30", testo: "Partenza per Souk El Had", stato: "incluso" },
            { testo: "Visita al Souk El Had (Mercato piu grande del marocco)" },
            { orario: "18:00", testo: "Rientro nella Surf House" },
            { testo: "Cena", stato: "incluso" },
        ],
    },
    {
        data: "Giovedì 1 aprile",
        titolo: "Imsouane, dune e sandboarding",
        descrizione:
            "Una giornata avventurosa dedicata al surf, ai paesaggi oceanici e alla magia delle dune.",
        attivita: [
            { orario: "08:00", testo: "Colazione", stato: "incluso" },
            { orario: "09:00", testo: "Partenza dalla Surf House" },
            { testo: "Surf a Imsouane" },
            { testo: "Pranzo al mercato", stato: "non-incluso" },
            {
                orario: "16:00",
                testo:
                    "Sandboarding tra le dune: saliremo su una tavola simile a quella da snowboard e scivoleremo sulla sabbia, vivendo un’esperienza divertente e indimenticabile.", stato: "incluso",
            },
            { testo: "Rientro nella Surf House" },
            { testo: "Cena", stato: "incluso" },
        ],
    },
    {
        data: "Venerdì 2 aprile",
        titolo: "Taghazout al tramonto",
        descrizione:
            "Dopo una nuova sessione di surf, raggiungeremo Taghazout per vivere insieme il tramonto e la serata.",
        attivita: [
            { orario: "08:00", testo: "Colazione", stato: "incluso" },
            { orario: "09:00", testo: "Lezione e sessione di surf", stato: "incluso" },
            { testo: "Pranzo in spiaggia", stato: "incluso" },
            { orario: "15:00", testo: "Rientro nella Surf House" },
            { testo: "Tempo per doccia e relax" },
            { orario: "17:00", testo: "Partenza per Taghazout" },
            { testo: "Tramonto allo Skate Park" },
            { testo: "Cena con musica", stato: "non-incluso" },
            { testo: "Serata insieme fino a mezzanotte" },
        ],
    },
    {
        data: "Sabato 3 aprile",
        titolo: "Ultime onde e serata finale",
        descrizione:
            "L’ultima giornata piena sarà dedicata al surf, alle esperienze marocchine e a una serata speciale insieme.",
        attivita: [
            { orario: "09:00", testo: "Colazione", stato: "incluso" },
            { orario: "10:00", testo: "Lezione e sessione di surf", stato: "incluso" },
            { testo: "Pranzo in spiaggia", stato: "incluso" },
            { orario: "15:30", testo: "Fine del surf e rientro" },
            {
                orario: "19:00",
                testo:
                    "Possibilità di scegliere un’attività extra tra passeggiata a cavallo, hammam o henna experience",
                stato: "facoltativo",
            },
            { testo: "Cena BBQ", stato: "incluso" },
            { testo: "Musica e serata finale insieme" },
        ],
    },
    {
        data: "Domenica 4 aprile",
        titolo: "Il momento dei saluti",
        descrizione:
            "Un’ultima colazione insieme prima di salutare il Marocco e portare a casa tutti i ricordi del viaggio.",
        attivita: [
            { testo: "Colazione", stato: "incluso" },
            { testo: "Check-out e partenza" },
        ],
    },
];

function Etichetta({
    stato,
}: {
    stato: Attivita["stato"];
}) {
    if (!stato) return null;

    if (stato === "incluso") {
        return (
            <span className="shrink-0 rounded-full bg-[#dce8d5] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#315b35]">
                Incluso
            </span>
        );
    }

    if (stato === "non-incluso") {
        return (
            <span className="shrink-0 rounded-full bg-[#f5ddd4] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#8a3f2c]">
                Non incluso
            </span>
        );
    }

    return (
        <span className="shrink-0 rounded-full bg-[#fbe5c7] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#8a541c]">
            Facoltativo
        </span>
    );
}

export default function MaroccoPage() {
    return (
        <main className="min-h-screen bg-[#fffaf5] text-[#402216]">
            {/* COPERTINA */}
            <section className="relative flex min-h-[78vh] items-end overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1650709137023-399fe2326bd7?auto=format&fit=crop&w=2000&q=85')",
                    }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#29150e] via-[#402216]/55 to-[#402216]/20" />


                <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-14 pt-36 text-white md:px-12 md:pb-20">
                    <Link
                        href="/#viaggi"
                        className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold backdrop-blur-md transition hover:bg-white hover:text-[#402216]"
                    >
                        ← Torna ai viaggi
                    </Link>

                    <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#ffc078] md:text-base">
                        28 marzo – 4 aprile 2027
                    </p>

                    <h1 className="mt-5 max-w-4xl text-6xl font-bold leading-[0.88] tracking-[-0.06em] sm:text-7xl md:text-8xl lg:text-9xl">
                        Marocco
                    </h1>

                    <p className="mt-7 max-w-2xl text-lg leading-8 text-white/85 md:text-xl">
                        Otto giorni tra surf, oceano, sapori, tramonti e avventure da
                        condividere con un gruppo di donne queer.
                    </p>
                </div>
            </section>

            {/* INTRODUZIONE */}
            <section className="px-6 py-16 md:px-12 md:py-24 lg:px-20">
                <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.75fr_1.25fr] md:items-start">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d96e24]">
                            Immagina
                        </p>

                        <h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.05em] md:text-6xl">
                            L’oceano davanti, una nuova avventura dentro.
                        </h2>
                    </div>

                    <div className="rounded-[32px] bg-[#f5e7d8] p-7 md:p-10">
                        <p className="text-lg leading-8 text-[#6d564b]">
                            Immagina di svegliarti vicino all’oceano, imparare a cavalcare
                            le onde e scoprire luoghi ricchi di profumi, colori e tradizioni.
                        </p>

                        <p className="mt-5 text-lg leading-8 text-[#6d564b]">
                            Ma la parte più bella sarà farlo insieme: condividere giornate,
                            risate e nuove emozioni con persone che all’inizio saranno
                            sconosciute e che, alla fine, potrebbero diventare molto di più.
                        </p>
                    </div>
                </div>
            </section>

            {/* PROGRAMMA */}
            <section className="px-6 pb-24 md:px-12 lg:px-20">
                <div className="mx-auto max-w-5xl">
                    <div className="mb-10 text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d96e24]">
                            Programma del viaggio
                        </p>

                        <h2 className="mt-4 text-4xl font-bold tracking-[-0.05em] md:text-6xl">
                            Giorno dopo giorno
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#796359]">
                            Premi su ogni giornata per scoprire tutte le esperienze previste.
                            Il programma potrebbe subire piccoli cambiamenti organizzativi.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {programma.map((giorno, index) => (
                            <details
                                key={giorno.data}
                                className="group overflow-hidden rounded-[28px] border border-[#ead8c8] bg-white shadow-[0_14px_50px_rgba(64,34,22,0.08)]"
                            >
                                <summary className="flex cursor-pointer list-none items-center gap-4 p-5 md:gap-7 md:p-8">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ef8b43] text-lg font-bold text-[#402216] md:h-14 md:w-14">
                                        {index + 1}
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d96e24] md:text-sm">
                                            {giorno.data}
                                        </p>

                                        <h3 className="mt-1 text-xl font-bold leading-tight md:text-3xl">
                                            {giorno.titolo}
                                        </h3>
                                    </div>

                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#402216] text-2xl text-white transition group-open:rotate-45 group-open:bg-[#ef8b43] group-open:text-[#402216]">
                                        +
                                    </div>
                                </summary>

                                <div className="border-t border-[#f0e3d8] px-5 pb-6 pt-5 md:px-8 md:pb-9">
                                    <p className="max-w-3xl leading-7 text-[#796359]">
                                        {giorno.descrizione}
                                    </p>

                                    <div className="mt-6 space-y-3">
                                        {giorno.attivita.map((attivita, attivitaIndex) => (
                                            <div
                                                key={`${attivita.testo}-${attivitaIndex}`}
                                                className="flex flex-col gap-3 rounded-2xl bg-[#fff8f1] p-4 sm:flex-row sm:items-center"
                                            >
                                                <div className="flex min-w-0 flex-1 items-start gap-3">
                                                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ef8b43]" />

                                                    <div className="min-w-0">
                                                        {attivita.orario && (
                                                            <span className="mr-2 font-bold text-[#d96e24]">
                                                                {attivita.orario}
                                                            </span>
                                                        )}

                                                        <span className="leading-7 text-[#51382e]">
                                                            {attivita.testo}
                                                        </span>
                                                    </div>
                                                </div>

                                                <Etichetta stato={attivita.stato} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* SERVIZI INCLUSI E NON INCLUSI */}
            <section className="bg-[#402216] px-6 py-20 text-white md:px-12 lg:px-20 lg:py-28">
                <div className="mx-auto max-w-6xl">
                    <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#ef8b43]">
                        Informazioni utili
                    </p>

                    <h2 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-[-0.05em] md:text-7xl">
                        Cosa comprende il viaggio.
                    </h2>

                    <div className="mt-12 grid gap-6 lg:grid-cols-2">
                        {/* SERVIZI INCLUSI */}
                        <div className="rounded-[32px] bg-[#ef8b43] p-7 text-[#402216] md:p-10">
                            <div className="flex items-center gap-4">
                                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#402216] text-xl font-bold text-white">
                                    ✓
                                </span>

                                <h3 className="text-3xl font-bold">
                                    Servizi inclusi
                                </h3>
                            </div>

                            <ul className="mt-9 space-y-5 leading-7">
                                {[
                                    "7 notti nella Surf House",
                                    "7 colazioni, 5 pranzi e 6 cene",
                                    "6 lezioni e sessioni di surf con tutta l’attrezzatura necessaria",
                                    "Esperienza yoga",
                                    "Visita al mercato e cooking class a Tamraght",
                                    "Escursione a Paradise Valley",
                                    "Visita alla cooperativa di prodotti locali e al Souk El Had",
                                    "Esperienza di sandboarding sulle dune",
                                    "Tutti i trasferimenti previsti dal programma",
                                    "Coordinatrice presente durante tutto il viaggio",
                                ].map((servizio) => (
                                    <li key={servizio} className="flex items-start gap-3">
                                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#402216]" />
                                        <span>{servizio}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* SERVIZI NON INCLUSI */}
                        <div className="rounded-[32px] border border-white/20 bg-[#5a372a] p-7 text-white md:p-10">
                            <div className="flex items-center gap-4">
                                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-xl font-bold text-[#402216]">
                                    ×
                                </span>

                                <h3 className="text-3xl font-bold">
                                    Servizi non inclusi
                                </h3>
                            </div>

                            <ul className="mt-9 space-y-5 leading-7 text-white/80">
                                {[
                                    "Volo di andata e ritorno per il Marocco",
                                    "Pranzo al mercato del pesce durante la giornata a Imsouane",
                                    "Cena con musica durante la serata a Taghazout",
                                    "Attività extra facoltative: passeggiata a cavallo, hammam o henna experience",
                                    "Spese personali e tutto ciò che non è indicato nei servizi inclusi",
                                ].map((servizio) => (
                                    <li key={servizio} className="flex items-start gap-3">
                                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ef8b43]" />
                                        <span>{servizio}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CHIUSURA */}
            <section className="bg-[#402216] px-6 py-16 text-center text-white md:px-12 md:py-20">
                <div className="mx-auto max-w-3xl">
                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#ef8b43]">
                        Il viaggio ci aspetta
                    </p>

                    <h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-0.05em] md:text-6xl">
                        Prenotabile a breve.
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/70">
                        Il viaggio non è ancora prenotabile, ma puoi già scoprire il programma giorno per giorno. Le prenotazioni apriranno tra qualche settimana: continua a seguirci per non perdere l’apertura!
                    </p>

                    <Link
                        href="/#viaggi"
                        className="mt-9 inline-flex rounded-full bg-[#ef8b43] px-8 py-4 text-lg font-bold text-[#402216] transition hover:scale-105 hover:bg-white"
                    >
                        Scopri gli altri viaggi →
                    </Link>
                </div>
            </section>
        </main>
    );
}