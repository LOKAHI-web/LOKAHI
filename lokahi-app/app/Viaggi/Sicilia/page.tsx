import Link from "next/link";

const programma = [
  {
    giorno: "6 settembre",
    titolo: "Benvenute in Sicilia",
    attivita: [
      "Arrivo alle ore 17:00 e check-in nella villa riservata al gruppo ad Arenella.",
      "Aperitivo di benvenuto con bevande e snack.",
      "Giochi rompighiaccio per iniziare a conoscerci.",
      "Pizzata di gruppo in spiaggia inclusa.",
      "Dopo cena: confronto, attività, ping-pong e calcio balilla.",
    ],
  },
  {
    giorno: "7 settembre",
    titolo: "Arenella e Ortigia",
    attivita: [
      "Colazione in villa.",
      "Mattinata di relax nella spiaggia di Arenella.",
      "Pranzo in villa.",
      "Pomeriggio alla scoperta dell’isola di Ortigia, nel cuore di Siracusa.",
      "Cena libera e torneo di beer pong.",
    ],
  },
  {
    giorno: "8 settembre",
    titolo: "Isola Bella e Taormina",
    attivita: [
      "Colazione in villa.",
      "Mattinata nella spiaggia di Isola Bella.",
      "Pranzo libero.",
      "Passeggiata serale alla scoperta di Taormina.",
      "Cena libera.",
    ],
  },
  {
    giorno: "9 settembre",
    titolo: "Fontane Bianche e Noto",
    attivita: [
      "Mattinata di relax nella spiaggia di Fontane Bianche.",
      "Pranzo nella nostra villa.",
      "Degustazione Donnafugata facoltativa.",
      "Passeggiata serale tra le meraviglie barocche di Noto.",
      "Cena libera.",
    ],
  },
  {
    giorno: "10 settembre",
    titolo: "Catania e l’Etna",
    attivita: [
      "Colazione in villa.",
      "Visita al mercato di Catania, tra colori, profumi e vita locale.",
      "Pranzo libero.",
      "Escursione sull’Etna, il vulcano attivo più alto d’Europa.",
      "Cena inclusa a Catania e possibilità di concludere la serata con un drink.",
    ],
  },
  {
    giorno: "11 settembre",
    titolo: "Vendicari e Marzamemi",
    attivita: [
      "Colazione in villa.",
      "Mattinata tra la Riserva di Vendicari e la spiaggia di Calamosche.",
      "Pranzo libero.",
      "Visita a Marzamemi, uno dei borghi più affascinanti della Sicilia.",
      "Cena libera oppure in villa.",
    ],
  },
  {
    giorno: "12 settembre",
    titolo: "Il momento dei saluti",
    attivita: [
      "Colazione insieme.",
      "Ultima attività di gruppo per salutarci e ripercorrere le emozioni vissute.",
      "Check-out e partenze.",
    ],
  },
];

export default function SiciliaPage() {
  return (
    <main className="min-h-screen bg-[#fffaf5] text-[#402216]">
      <header className="px-6 py-6 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            href="/"
            className="font-semibold tracking-[0.28em]"
          >
            LOKΛHI
          </Link>

          <Link
            href="/#viaggi"
            className="rounded-full bg-[#ef8b43] px-5 py-3 font-bold"
          >
            Tutti i viaggi
          </Link>
        </div>
      </header>

      <section className="px-6 pb-16 pt-12 md:px-12 lg:px-20 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d96e24]">
            6–12 settembre 2026 · Sold out
          </p>

          <h1 className="mt-6 max-w-5xl text-6xl font-bold leading-[0.9] tracking-[-0.06em] md:text-8xl lg:text-[110px]">
            Sicilia: un viaggio da vivere insieme.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-[#6d6964]">
            Una settimana tra mare, natura, borghi, sapori siciliani e
            connessioni autentiche. Un’esperienza pensata per sentirsi accolte,
            libere e parte di qualcosa di speciale.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-12 lg:px-20">
        <div
          className="mx-auto min-h-[280px] max-w-4xl rounded-[34px] bg-cover bg-center md:min-h-[380px]"
          style={{ backgroundImage: "url('/sicilia-cannoli.jpg')" }}
        />
      </section>

      <section className="bg-[#402216] px-6 py-20 text-white md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ef8b43]">
              L’obiettivo del viaggio
            </p>

            <h2 className="mt-5 text-5xl font-bold leading-[0.98] tracking-[-0.05em] md:text-7xl">
              Sentirti vista, accolta e libera.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-9 text-white/75">
            <p>
              Vogliamo creare uno spazio sicuro e dare vita a una piccola
              famiglia. Viverci come se ci conoscessimo da sempre, come succede
              con le anime che si riconoscono subito.
            </p>

            <p>
              Durante il viaggio ci saranno momenti, esperienze e attività
              pensate per farti sentire vista, accolta e libera di essere
              esattamente chi sei.
            </p>

            <p>
              Insieme scopriremo luoghi meravigliosi e parti nuove di noi
              stesse. Condividerai momenti difficili da dimenticare con persone
              che oggi sono sconosciute e che presto non lo saranno più.
            </p>

            <p>
              Quando tornerai a casa non porterai con te soltanto fotografie,
              ma connessioni vere e la sensazione di aver vissuto qualcosa che
              ti ha lasciato un segno.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d96e24]">
            Programma del viaggio
          </p>

          <h2 className="mt-5 text-5xl font-bold tracking-[-0.05em] md:text-7xl">
            Giorno dopo giorno.
          </h2>

          <p className="mt-6 text-lg text-[#6d6964]">
            Premi su ogni giornata per scoprire tutte le attività previste.
          </p>

          <div className="mt-12 overflow-hidden rounded-[32px] bg-white shadow-[0_24px_70px_rgba(64,34,22,0.10)]">
            <div className="bg-[#402216] px-6 py-7 text-center text-xl font-bold uppercase tracking-[0.12em] text-white md:text-2xl">
              Alla scoperta del tuo viaggio
            </div>

            <div className="px-6 py-5 md:px-12 md:py-8">
              {programma.map((tappa, index) => (
                <details
                  key={tappa.giorno}
                  className="group relative border-l-2 border-dashed border-[#402216]/60 pb-2 pl-8 last:border-transparent md:pl-12"
                >
                  <span className="absolute -left-[11px] top-8 h-5 w-5 rounded-full bg-[#ef8b43] ring-4 ring-white md:-left-[13px] md:h-6 md:w-6" />

                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 border-b border-[#402216]/15 py-6">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d96e24]">
                        Giorno {index + 1} · {tappa.giorno}
                      </p>

                      <h3 className="mt-2 text-xl font-semibold uppercase leading-tight md:text-3xl">
                        {tappa.titolo}
                      </h3>
                    </div>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ef8b43] text-2xl font-bold transition group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <ul className="space-y-3 border-b border-[#402216]/15 py-6 pl-5 text-base leading-7 text-[#6d6964] md:text-lg">
                    {tappa.attivita.map((attivita) => (
                      <li key={attivita} className="list-disc">
                        {attivita}
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </div>

          <p className="mt-8 text-sm leading-6 text-[#6d6964]">
            Il programma può subire piccole variazioni per motivi organizzativi
            o meteorologici.
          </p>

          <p className="mt-3 text-sm font-semibold leading-6 text-[#402216]">
            Se hai allergie o intolleranze alimentari, comunicacelo via email
            prima della prenotazione.
          </p>
        </div>
      </section>

      <footer className="bg-[#402216] px-6 py-10 text-white/70 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="font-bold tracking-[0.25em] text-white">LOKΛHI</p>
          <p>© 2026 LOKΛHI · Tutti i diritti riservati</p>
        </div>
      </footer>
    </main>
  );
}