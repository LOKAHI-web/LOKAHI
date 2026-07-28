const trips = [
  {
    destination: "Sicilia",
    dates: "6–12 settembre 2026",
    status: "Ultimo posto",
    description:
      "Siracusa, mare, natura, i crateri dell’Etna e tutto il sapore dello street food siciliano.",
    image:
      "/sicilia-cannoli.jpg",
  },
  {
    destination: "Messico",
    dates: "25 ottobre–3 novembre 2026",
    status: "Ultimi 2 posti",
    description:
      "Un viaggio nel cuore del Messico durante il Día de los Muertos, tra colori, tradizioni e celebrazioni indimenticabili.",
    image:
      "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=1400&q=85",
  },
  {
    destination: "Islanda",
    dates: "22–29 novembre 2026",
    status: "Sold out",
    description:
      "Alla ricerca dell’aurora boreale, tra paesaggi immensi, natura selvaggia e meraviglie di ghiaccio.",
    image:
      "https://images.unsplash.com/photo-1529963183134-61a90db47eaf?auto=format&fit=crop&w=1400&q=85",
  },
  {
    destination: "Mercatini di Natale",
    dates: "6–8 dicembre 2026",
    status: "Lavori in corso",
    description:
      "Tre giorni tra Innsbruck, Vipiteno e Levico Terme, immersi nelle luci, nei profumi e nella magia dei mercatini di Natale.",
    image:
      "/mercatini-natale.jpg",
  },
  {
    destination: "Surf Week Fuerteventura",
    dates: "30 dicembre 2026–5 gennaio 2027",
    status: "Iscrizioni aperte",
    description:
      "Un Capodanno tra oceano, surf, surf skate, dry surf, trekking, natura e nuove amicizie queer.",
    image:
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1400&q=85",
  },
  {
    destination: "Marocco",
    dates: "28 marzo–4 aprile 2027",
    status: "Lavori in corso",
    description:
      "Pasqua in Marocco, tra oceano e natura: surf, passeggiate a cavallo, medine, luoghi autentici e sapori tipici marocchini.",
    image:
      "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=1400&q=85",
  },
];

const values = [
  {
    number: "01",
    title: "Spazi accoglienti",
    text: "Un ambiente rispettoso e inclusivo, in cui sentirsi libere di essere sé stesse.",
  },
  {
    number: "02",
    title: "Piccoli gruppi",
    text: "Più ascolto, più connessioni e un’esperienza costruita con ritmi umani.",
  },
  {
    number: "03",
    title: "Esperienze autentiche",
    text: "Luoghi, attività e incontri scelti per andare oltre il turismo superficiale.",
  },
  {
    number: "04",
    title: "Organizzazione presente",
    text: "Informazioni chiare e accompagnamento prima, durante e dopo la partenza.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffaf5] text-[#402216]">
      <header className="fixed left-1/2 top-4 z-50 flex w-[calc(100%-24px)] max-w-6xl -translate-x-1/2 items-center justify-between rounded-full border border-white/20 bg-black/35 px-5 py-3 text-white shadow-xl backdrop-blur-xl">
        <a
          href="#home"
          className="text-sm font-semibold tracking-[0.28em]"
          aria-label="LOKAHI home"
        >
          LOKΛHI
        </a>

        <nav className="hidden items-center gap-7 text-sm md:flex">
          <a className="transition hover:text-orange-300" href="#viaggi">
            Viaggi
          </a>
          <a className="transition hover:text-orange-300" href="#esperienza">
            L’esperienza
          </a>
          <a className="transition hover:text-orange-300" href="/chi-siamo">
            Chi siamo
          </a>
          <a className="transition hover:text-orange-300" href="#faq">
            FAQ
          </a>
          <a
            href="#contatti"
            className="rounded-full bg-[#ef8b43] px-5 py-2.5 font-semibold text-[#402216] transition hover:bg-[#ff9c55]"
          >
            Richiedi informazioni
          </a>
        </nav>

        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-full bg-[#ef8b43] px-4 py-2 text-xs font-semibold text-[#402216]">
            ☰ Menu
          </summary>

          <nav className="absolute right-0 top-12 flex w-56 flex-col gap-1 rounded-2xl bg-[#402216] p-3 text-sm text-white shadow-xl">
            <a className="rounded-xl px-4 py-3 hover:bg-white/10" href="#viaggi">
              Viaggi
            </a>

            <a className="rounded-xl px-4 py-3 hover:bg-white/10" href="#esperienza">
              L’esperienza
            </a>

            <a className="rounded-xl px-4 py-3 hover:bg-white/10" href="/chi-siamo">
              Chi siamo
            </a>

            <a className="rounded-xl px-4 py-3 hover:bg-white/10" href="#faq">
              FAQ
            </a>

            <a
              className="mt-1 rounded-xl bg-[#ef8b43] px-4 py-3 font-semibold text-[#402216]"
              href="#contatti"
            >
              Richiedi informazioni
            </a>
          </nav>
        </details>
      </header>

      <section
        id="home"
        className="relative flex min-h-[94vh] items-end overflow-hidden bg-cover bg-center px-6 pb-20 pt-40 text-white md:px-12 lg:px-20"
        style={{
          backgroundImage:
            "linear-gradient(105deg, rgba(20,15,12,.88) 0%, rgba(20,15,12,.52) 48%, rgba(20,15,12,.12) 100%), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=88')",
        }}
      >
        <div className="relative z-10 max-w-5xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
            Viaggi di gruppo dedicati a donne queer
          </p>

          <h1 className="max-w-5xl text-6xl font-bold leading-[0.91] tracking-[-0.06em] sm:text-7xl lg:text-[108px]">
            Parti con sconosciute.
            <br />
            Torni con amiche queer.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
            Nuovi luoghi, nuovi legami e la libertà di essere te stessa.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#viaggi"
              className="rounded-full bg-[#ef8b43] px-7 py-4 text-center font-bold text-[#402216] transition hover:-translate-y-0.5 hover:bg-[#ff9c55]"
            >
              Scopri le partenze
            </a>

            <a
              href="/chi-siamo"
              className="rounded-full border border-white/40 px-7 py-4 text-center font-semibold text-white transition hover:bg-white hover:text-black"
            >
              Conosci LOKΛHI
            </a>
          </div>
        </div>
      </section>

      <section id="viaggi" className="px-6 py-24 md:px-12 lg:px-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#d96e24]">
                Prossime partenze
              </p>
              <h2 className="max-w-3xl text-5xl font-bold leading-[0.96] tracking-[-0.055em] md:text-7xl">
                Il prossimo viaggio potrebbe essere il tuo.
              </h2>
            </div>

            <p className="max-w-xl leading-8 text-[#6d6964]">
              Ogni esperienza è pensata per piccoli gruppi, con attenzione alla
              sicurezza, alla qualità delle relazioni e ai ritmi di ogni
              partecipante.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {trips.map((trip) => (
              <article
                key={trip.destination}
                className="overflow-hidden rounded-[30px] bg-white shadow-[0_24px_70px_rgba(42,30,19,.14)]"
              >
                <div
                  className="relative min-h-[340px] bg-cover bg-center"
                  style={{ backgroundImage: `url('${trip.image}')` }}
                >
                  <span className="absolute left-5 top-5 rounded-full bg-black/55 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                    {trip.status}
                  </span>
                </div>

                <div className="p-7">
                  <p className="text-sm text-[#77716b]">{trip.dates}</p>
                  <h3 className="mt-3 text-3xl font-bold tracking-[-0.04em]">
                    {trip.destination}
                  </h3>
                  <p className="mt-3 min-h-20 leading-7 text-[#6d6964]">
                    {trip.description}
                  </p>
                  <a
                    href="#contatti"
                    className="mt-6 inline-block font-bold text-[#d96e24]"
                  >
                    Scopri il viaggio →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="esperienza"
        className="grid gap-16 bg-[#402216] px-6 py-24 text-white md:px-12 lg:grid-cols-[.85fr_1.15fr] lg:px-20 lg:py-32"
      >
        <div className="max-w-xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
            Perché LOKΛHI
          </p>
          <h2 className="text-5xl font-bold leading-[0.98] tracking-[-0.055em] md:text-7xl">
            Non solo una destinazione.
          </h2>
          <p className="mt-7 leading-8 text-white/60">
            Una comunità temporanea che può restare con te. Viaggiare insieme
            significa sentirsi accolte, conoscere persone nuove e vivere ogni
            luogo senza nascondere chi si è.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {values.map((value) => (
            <article
              key={value.number}
              className="rounded-[26px] border border-white/10 bg-white/[0.04] p-7"
            >
              <span className="font-bold text-[#ef8b43]">{value.number}</span>
              <h3 className="mt-12 text-2xl font-bold tracking-[-0.04em]">
                {value.title}
              </h3>
              <p className="mt-3 leading-7 text-white/60">{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="chi-siamo"
        className="px-6 py-24 md:px-12 lg:px-20 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[34px] bg-white shadow-[0_24px_70px_rgba(42,30,19,.14)] lg:grid-cols-2">
          <div className="relative min-h-[440px] overflow-hidden bg-[#ef8b43]">
            <img
              src="/logo-lokahi.png"
              alt="Logo LOKAHI"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>

          <div className="flex flex-col justify-center p-9 md:p-16">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#d96e24]">
              Chi siamo
            </p>
            <h2 className="text-4xl font-bold leading-[1.02] tracking-[-0.05em] md:text-6xl">
              LOKΛHI nasce per far incontrare persone, luoghi e possibilità.
            </h2>
            <p className="mt-7 leading-8 text-[#6d6964]">
              Qui inseriremo la storia della fondatrice, il significato del
              progetto e il modo in cui vengono immaginati e accompagnati i
              viaggi.
            </p>
            <a
              href="/chi-siamo"
              className="mt-7 font-bold text-[#d96e24]"
            >
              Scopri di più →
            </a>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#d96e24]">
            Domande frequenti
          </p>
          <h2 className="mb-12 text-5xl font-bold tracking-[-0.055em] md:text-7xl">
            Prima di partire.
          </h2>

          {[
            [
              "Il volo è incluso nel prezzo?",
              "Dipende dalla destinazione. Generalmente, nei viaggi all’interno dell’Europa il volo non è incluso, mentre nei viaggi fuori dall’Europa è incluso. Le condizioni esatte saranno sempre indicate nella pagina di ogni viaggio.",
            ],
            [
              "Serve il passaporto?",
              "Dipende dalla destinazione. Per molti viaggi europei è sufficiente la carta d’identità valida per l’espatrio; per le destinazioni fuori dall’Europa è generalmente necessario il passaporto. I documenti richiesti saranno specificati nella scheda del viaggio.",
            ],
            [
              "Posso partecipare da sola?",
              "Certamente. Quasi tutte le partecipanti partono da sole: il viaggio nasce proprio per incontrare persone nuove, condividere esperienze autentiche e creare connessioni.",
            ],
            [
              "Posso partecipare con un’amica?",
              "Sì, purché sia una donna queer e condivida lo spirito e i valori dell’esperienza.",
            ],
            [
              "Posso partecipare con la mia compagna?",
              "Assolutamente sì. Partecipare in coppia può diventare un’occasione per vivere qualcosa di nuovo insieme e rafforzare la vostra relazione.",
            ],
            [
              "Come sono organizzate le camere?",
              "Le camere sono generalmente doppie o triple, con letti singoli o matrimoniali a seconda della struttura. La sistemazione precisa sarà indicata nella pagina del viaggio.",
            ],
            [
              "È possibile richiedere una camera singola?",
              "Dipende dal viaggio e dalla disponibilità delle strutture. Quando possibile, si può richiedere una camera singola pagando un supplemento e contattando la coordinatrice. Consigliamo comunque di condividere la camera con una o due partecipanti, perché anche la quotidianità e la convivenza fanno parte dell’esperienza LOKΛHI.",
            ],
            [
              "Sono timida: potrebbe essere un problema?",
              "Assolutamente no. Molte partecipanti arrivano con un po’ di timore. Attraverso momenti di conoscenza e attività rompighiaccio, creeremo gradualmente un ambiente spontaneo, accogliente e senza pressioni.",
            ],
            [
              "Posso partecipare se sono lesbica o bisessuale?",
              "Sì. I viaggi LOKΛHI sono dedicati alle donne queer, comprese donne lesbiche e bisessuali.",
            ],
            [
              "Qual è l’età delle partecipanti?",
              "È possibile partecipare dai 18 anni. La maggior parte delle partecipanti ha tra i 25 e i 35 anni, ma i gruppi possono comprendere donne più giovani o più adulte. Ciò che conta è condividere lo spirito del viaggio.",
            ],
            [
              "Come vengono gestite allergie, intolleranze o scelte alimentari?",
              "Comunicaci in anticipo allergie, intolleranze o esigenze come un’alimentazione vegetariana o vegana. La coordinatrice farà il possibile per organizzare soluzioni adeguate, compatibilmente con la destinazione e le strutture disponibili.",
            ],
            [
              "Come funziona la cassa comune?",
              "La cassa comune non è prevista in tutti i viaggi. Quando presente, serve a gestire alcune spese condivise. La coordinatrice registra ogni movimento e condivide con il gruppo un riepilogo aggiornato, così che tutte possano controllare le spese.",
            ],
            [
              "Come organizzeremo i dettagli prima della partenza?",
              "Circa uno o due mesi prima della partenza, la coordinatrice creerà un gruppo WhatsApp dedicato. Qui condividerà informazioni, appuntamenti, aggiornamenti e una lista delle cose essenziali da portare.",
            ],
            [
              "Mi sono lasciata da poco: un viaggio del genere potrebbe aiutarmi?",
              "Sì, soprattutto se senti il bisogno di uscire dalla routine e ritrovare leggerezza. Il viaggio può offrirti nuovi stimoli, incontri e uno spazio accogliente in cui dedicare tempo a te stessa.",
            ],
            [
              "Devo comparire nelle fotografie e nei video pubblicati sui social?",
              "No. Prima del viaggio potrai scegliere liberamente se autorizzare fotografie e video destinati alla comunicazione di LOKΛHI. La partecipazione al viaggio non dipende dal consenso e la scelta di non comparire verrà rispettata.",
            ],
          ].map(([question, answer]) => (
            <details
              key={question}
              className="border-t border-black/15 py-6 last:border-b"
            >
              <summary className="cursor-pointer list-none text-lg font-bold">
                {question}
              </summary>
              <p className="mt-4 max-w-2xl leading-7 text-[#6d6964]">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section
        id="contatti"
        className="m-3 flex flex-col items-start justify-between gap-10 rounded-[34px] bg-[#ef8b43] px-7 py-20 md:m-6 md:px-14 lg:flex-row lg:items-end lg:px-20 lg:py-24"
      >
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em]">
            Pronta a partire?
          </p>
          <h2 className="max-w-4xl text-5xl font-bold leading-[0.98] tracking-[-0.055em] md:text-7xl">
            Entra nel prossimo viaggio LOKΛHI.
          </h2>
          <p className="mt-6 max-w-2xl leading-8">
            Lascia il tuo contatto per ricevere partenze, disponibilità e tutte
            le informazioni necessarie.
          </p>
        </div>

        <a
          href="mailto:lokahi.form@gmail.com"
          className="w-full rounded-full bg-white px-8 py-4 text-center font-bold text-[#402216] transition hover:-translate-y-0.5 lg:w-auto"
        >
          Scrivici
        </a>
      </section>

      <footer className="grid gap-10 bg-[#402216] px-6 pb-8 pt-20 text-white/65 md:grid-cols-2 md:px-12 lg:px-20">
        <div>
          <p className="font-bold tracking-[0.25em] text-white">LOKAHI</p>
          <p className="mt-3">Viaggi queer. Connessioni autentiche.</p>
        </div>

        <div className="flex flex-wrap gap-6 md:justify-end">
          <a href="#viaggi">Viaggi</a>
          <a href="/chi-siamo">Chi siamo</a>
          <a href="#faq">FAQ</a>
          <a href="#contatti">Contatti</a>
        </div>

        <p className="border-t border-white/10 pt-7 text-sm md:col-span-2">
          © 2026 LOKΛHI · Tutti i diritti riservati
        </p>
      </footer>
    </main>
  );
}