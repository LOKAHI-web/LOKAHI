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
      "Mattinata di relax sulla spiaggia di Fontane Bianche.",
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
            LOKAHI
          </Link>

          <Link
            href="/#viaggi"
            className="rounded-full bg-[#ef8b43] px-5 py-3 font-bold"
          >
            Tutti i viaggi
          </Link>
        </div>
      </header>

      <section className="px-6 pb-20 pt-14 md:px-12 lg:px-20 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d96e24]">
            Sicilia · 6–12 settembre 2026
          </p>

          <h1 className="mt-6 max-w-5xl text-6xl font-bold leading-[0.92] tracking-[-0.06em] md:text-8xl lg:text-[110px]">
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
          className="mx-auto min-h-[300px] max-w-5xl rounded-[34px] bg-cover bg-center md:min-h-[420px]"
          style={{
            backgroundImage: "url('/sicilia-cannoli.jpg')",
          }}
        />
      </section>

      <section className="bg-[#402216] px-6 py-20 text-white md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ef8b43]">
              L’obiettivo del viaggio
            </p>

            <h2 className="mt-5 text-5xl font-bold leading-[0.98] tracking-[-0.05em] md:text-7xl">
              Creare uno spazio sicuro e una piccola famiglia.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-9 text-white/75">
            <p>
              Vogliamo viverci come se ci conoscessimo da sempre, come succede
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

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#6d6964]">
            Premi su ogni giornata per scoprire le attività previste.
          </p>

          <div className="mt-14 space-y-4">
            {programma.map((tappa) => (
              <details
                key={tappa.giorno}
                className="group rounded-[28px] bg-white p-6 shadow-[0_18px_50px_rgba(64,34,22,0.08)] md:p-9"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#d96e24]">
                      {tappa.giorno}
                    </p>

                    <h3 className="mt-2 text-2xl font-bold md:text-3xl">
                      {tappa.titolo}
                    </h3>
                  </div>

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ef8b43] text-2xl font-bold text-[#402216] transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>

                <ul className="mt-6 list-disc space-y-3 border-t border-[#402216]/10 pl-6 pt-6 leading-8 text-[#6d6964]">
                  {tappa.attivita.map((attivita) => (
                    <li key={attivita}>{attivita}</li>
                  ))}
                </ul>
              </details>
            ))}
          </div>

          <div className="mt-12 rounded-[28px] bg-[#ef8b43] p-7 md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.18em]">
              Informazione importante
            </p>

            <p className="mt-4 text-lg leading-8">
              Se hai allergie, intolleranze o esigenze alimentari particolari,
              comunicalo via email prima della prenotazione.
            </p>
          </div>

          <div className="mt-12">
            <Link
              href="/#viaggi"
              className="inline-block rounded-full bg-[#402216] px-7 py-4 font-bold text-white"
            >
              Torna a tutti i viaggi
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}