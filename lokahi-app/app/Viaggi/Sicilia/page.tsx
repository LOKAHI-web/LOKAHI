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
      "Pranzo nella villa.",
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

      <section className="px-6 pb-16 pt-10 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <span className="inline-block rounded-full bg-[#ef8b43] px-5 py-2 text-sm font-bold">
            Sold out
          </span>

          <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-[#d96e24]">
            6–12 settembre 2026
          </p>

          <h1 className="mt-4 max-w-5xl text-6xl font-bold leading-[0.92] tracking-[-0.06em] md:text-8xl">
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
          className="mx-auto min-h-[420px] max-w-7xl rounded-[34px] bg-cover bg-center md:min-h-[620px]"
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
              Uno spazio sicuro. Una piccola famiglia.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-9 text-white/75">
            <p>
              Vogliamo creare uno spazio nel quale vivere insieme come se ci
              conoscessimo da sempre, come accade con le anime che si
              riconoscono subito.
            </p>

            <p>
              Durante il viaggio ci saranno esperienze e attività pensate per
              farti sentire vista, accolta e libera di essere esattamente chi
              sei. Scopriremo luoghi meravigliosi e, soprattutto, parti nuove
              di noi stesse.
            </p>

            <p>
              Partirai con persone che oggi sono sconosciute e che presto non
              lo saranno più. Quando tornerai a casa non porterai con te
              soltanto fotografie, ma connessioni vere e il ricordo di
              qualcosa che ti ha lasciato un segno.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d96e24]">
            Programma
          </p>

          <h2 className="mt-5 text-5xl font-bold tracking-[-0.05em] md:text-7xl">
            Giorno dopo giorno.
          </h2>

          <div className="mt-14 space-y-6">
            {programma.map((tappa) => (
              <article
                key={tappa.giorno}
                className="rounded-[28px] bg-white p-7 shadow-[0_20px_60px_rgba(64,34,22,0.08)] md:p-10"
              >
                <p className="font-bold uppercase tracking-[0.18em] text-[#d96e24]">
                  {tappa.giorno}
                </p>

                <h3 className="mt-3 text-3xl font-bold tracking-[-0.04em]">
                  {tappa.titolo}
                </h3>

                <ul className="mt-6 space-y-3 text-lg leading-8 text-[#6d6964]">
                  {tappa.attivita.map((attivita) => (
                    <li key={attivita} className="flex gap-3">
                      <span className="text-[#ef8b43]">●</span>
                      <span>{attivita}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl rounded-[34px] bg-[#ef8b43] p-8 md:p-14">
          <p className="text-sm font-bold uppercase tracking-[0.2em]">
            Informazione importante
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em]">
            Intolleranze o allergie?
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8">
            Comunicale via e-mail prima della prenotazione, così potremo
            organizzare tutto nel modo migliore.
          </p>
        </div>
      </section>

      <section className="bg-[#402216] px-6 py-20 text-center text-white">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ef8b43]">
          Questo viaggio è sold out
        </p>

        <h2 className="mx-auto mt-5 max-w-3xl text-5xl font-bold tracking-[-0.05em] md:text-7xl">
          La prossima esperienza potrebbe essere la tua.
        </h2>

        <Link
          href="/#viaggi"
          className="mt-9 inline-block rounded-full bg-[#ef8b43] px-8 py-4 font-bold text-[#402216]"
        >
          Scopri i prossimi viaggi
        </Link>
      </section>
    </main>
  );
}