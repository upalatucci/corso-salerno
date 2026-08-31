export const GOSHO_URL =
  "https://biblioteca.sgi-italia.org/rsnd/il-conseguimento-della-buddita-in-questa-esistenza";
export const NRU_PDF = "/materiale-studio/accelerazione.pdf";
export const STUDY_INFO = "/info#materiali-studio";
export const DAIMOKU_PAGE = "/daimoku";

export type QuestionType = "choice" | "complete";

export interface QuizQuestion {
  type: QuestionType;
  source: string;
  prompt: string;
  passage?: string;
  options: string[];
  answer: string;
  explain: string;
  deepenLabel: string;
  deepenHref: string;
}

export interface Quiz {
  id: string;
  title: string;
  eyebrow: string;
  lead: string;
  accent: string;
  questions: QuizQuestion[];
}

export interface QuizResultBand {
  minRatio: number;
  title: string;
  text: string;
}

export interface WheelChallenge {
  id: string;
  short: string;
  title: string;
  theme: string;
  challenge: string;
  why: string;
  deepenLabel: string;
  deepenHref: string;
}

const GOSHO_SOURCE = "Gosho · Il conseguimento della Buddità in questa esistenza";
const NRU_SOURCE = "NRU vol. 6 · Capitolo «Accelerazione»";

export const quizzes: Quiz[] = [
  {
    id: "gosho",
    title: "Completa il gosho",
    eyebrow: "Il conseguimento della Buddità",
    lead:
      "Passi da completare e domande sul gosho che studieremo al corso. Ogni risposta è un invito ad aprire il testo.",
    accent: "gosho",
    questions: [
      {
        type: "complete",
        source: GOSHO_SOURCE,
        prompt: "Completa il passo d'apertura del gosho.",
        passage:
          "Se vuoi liberarti dalle sofferenze di nascita e morte che sopporti dal tempo senza inizio e ottenere sicuramente la suprema illuminazione in questa esistenza, devi cogliere la mistica verità che è originariamente inerente a tutti gli esseri viventi. Questa verità è {blank}.",
        options: [
          "Myoho-renge-kyo",
          "il nirvana dopo la morte",
          "la terra pura di Amida",
          "il silenzio della mente",
        ],
        answer: "Myoho-renge-kyo",
        explain:
          "Nichiren Daishonin apre lo scritto così: la verità mistica inerente a ogni vita è Myoho-renge-kyo. Recitarla significa cogliere ciò che è già in noi — non un paradiso lontano. Al corso approfondiremo proprio questa possibilità: la Buddità in questa esistenza.",
        deepenLabel: "Leggi il gosho",
        deepenHref: GOSHO_URL,
      },
      {
        type: "choice",
        source: GOSHO_SOURCE,
        prompt:
          "Da Kamakura, Nichiren Daishonin indirizza questo gosho a un discepolo. Chi è?",
        options: [
          "Toki Jonin",
          "Shijo Kingo",
          "Nanjo Tokimitsu",
          "Ikegami Munenaka",
        ],
        answer: "Toki Jonin",
        explain:
          "È una lettera a Toki Jonin, che viveva a Wakamiya e serviva il signore di Chiba. I cenni storici in Biblioteca di Nichiren aiutano a capire il contesto: un giovane Daishonin che già indica la pratica concreta per la Buddità in questa vita.",
        deepenLabel: "Leggi i cenni storici",
        deepenHref: GOSHO_URL,
      },
      {
        type: "choice",
        source: GOSHO_SOURCE,
        prompt: "In quale periodo fu scritto questo gosho?",
        options: [
          "Nel 1255, a Kamakura",
          "Nel 1253, quando proclamò Nam-myoho-renge-kyo",
          "Nel 1271, durante l'esilio a Sado",
          "Nel 1962, lo stesso anno del capitolo Accelerazione",
        ],
        answer: "Nel 1255, a Kamakura",
        explain:
          "I cenni storici: settimo anno di Kencho (1255). Il Daishonin ha trentaquattro anni e vive a Kamakura, sede del governo militare. È uno scritto di princìpi, due anni dopo la proclamazione del daimoku e prima delle grandi persecuzioni.",
        deepenLabel: "Apri i cenni storici",
        deepenHref: GOSHO_URL,
      },
      {
        type: "choice",
        source: GOSHO_SOURCE,
        prompt:
          "Quanti anni aveva il Daishonin quando scrisse questa lettera?",
        options: ["Trentaquattro", "Ventidue", "Cinquanta", "Sessantuno"],
        answer: "Trentaquattro",
        explain:
          "Trentaquattro anni, a Kamakura. Non è ancora l'esilio né Minobu: è il momento in cui fissa i princìpi. Al corso studieremo proprio questo nucleo — la Legge è la tua vita — per viverlo oggi, non come storia lontana.",
        deepenLabel: "Rileggi i cenni storici",
        deepenHref: GOSHO_URL,
      },
      {
        type: "complete",
        source: GOSHO_SOURCE,
        prompt: "Completa il passo sulla Legge dentro di te.",
        passage:
          "Perciò, quando invochi myoho e reciti renge, devi sforzarti di credere profondamente che Myoho-renge-kyo è {blank}.",
        options: [
          "la tua vita stessa",
          "un insegnamento riservato ai sacerdoti",
          "una preghiera per un altro mondo",
          "solo il titolo di un sutra antico",
        ],
        answer: "la tua vita stessa",
        explain:
          "Se reciti ma pensi che la Legge sia fuori di te, scrivi il Daishonin, stai abbracciando un insegnamento inferiore. Il corso ruota intorno a questo: non cercare l'illuminazione altrove. La Legge è la tua vita.",
        deepenLabel: "Rileggi questo passo",
        deepenHref: GOSHO_URL,
      },
      {
        type: "complete",
        source: GOSHO_SOURCE,
        prompt: "Come si lucida lo specchio della vita?",
        passage:
          "Risveglia in te una profonda fede e lucida con cura il tuo specchio notte e giorno. Come dovresti lucidarlo? Solo recitando {blank}.",
        options: [
          "Nam-myoho-renge-kyo",
          "i nomi di tutti i Budda",
          "mantra in silenzio",
          "soltanto i capitoli del sutra",
        ],
        answer: "Nam-myoho-renge-kyo",
        explain:
          "La mente annebbiata è uno specchio appannato: lucidandolo riflette il vero aspetto della realtà. La pratica indicata è una sola: Nam-myoho-renge-kyo. Per il corso l'obiettivo proposto è 90 minuti al giorno: ogni daimoku è un colpo di panno sullo specchio.",
        deepenLabel: "Vai al conta daimoku",
        deepenHref: DAIMOKU_PAGE,
      },
      {
        type: "choice",
        source: GOSHO_SOURCE,
        prompt:
          "«Quando una persona è illusa è chiamata essere comune, quando è illuminata è chiamata Budda». Cosa implica?",
        options: [
          "Budda ed essere comune non sono due nature separate: cambia lo stato di vita",
          "Solo dopo molte esistenze si può diventare Budda",
          "Gli esseri comuni non possiedono la natura di Budda",
          "L'illuminazione è riservata a chi abbandona la vita quotidiana",
        ],
        answer:
          "Budda ed essere comune non sono due nature separate: cambia lo stato di vita",
        explain:
          "È lo stesso specchio: appannato o limpido. Non diventi qualcun altro — riveli ciò che già sei. Per questo il titolo del gosho è una promessa concreta: in questa esistenza, non in un'altra vita.",
        deepenLabel: "Apri il gosho",
        deepenHref: GOSHO_URL,
      },
      {
        type: "complete",
        source: GOSHO_SOURCE,
        prompt: "Completa la metafora di chi cerca l'illuminazione fuori di sé.",
        passage:
          "Se cerchi l'illuminazione al di fuori di te, anche eseguire diecimila pratiche e diecimila buone azioni sarà inutile, come se un povero stesse giorno e notte a contare {blank}, senza guadagnare nemmeno mezzo centesimo.",
        options: [
          "le ricchezze del suo vicino",
          "le stelle del cielo",
          "i propri errori",
          "le pagine dei sutra",
        ],
        answer: "le ricchezze del suo vicino",
        explain:
          "Ammirare la felicità altrui senza percepire la propria natura di Budda non cambia la vita. Al corso porteremo esperienze, non confronti. La ricchezza da scoprire è già nella propria vita.",
        deepenLabel: "Leggi il passo",
        deepenHref: GOSHO_URL,
      },
      {
        type: "complete",
        source: GOSHO_SOURCE,
        prompt: "Completa il passo su terre pure e impure.",
        passage:
          "Se la mente degli esseri viventi è impura, anche la loro terra è impura, ma se la loro mente è pura, lo è anche la loro terra; non ci sono terre pure e terre impure di per sé: la differenza sta unicamente nella bontà o malvagità della nostra {blank}.",
        options: ["mente", "sorte", "nascita", "posizione sociale"],
        answer: "mente",
        explain:
          "L'ambiente riflette lo stato interiore. Trasformare la mente con la pratica trasforma la terra in cui viviamo — famiglia, lavoro, territorio. È il cuore della rivoluzione umana, e del capitolo Accelerazione: persone comuni che rivitalizzano la vita lì dove sono.",
        deepenLabel: "Apri il gosho",
        deepenHref: GOSHO_URL,
      },
      {
        type: "choice",
        source: GOSHO_SOURCE,
        prompt:
          "«Myo» è la misteriosa natura della vita, «ho» le sue manifestazioni. Cosa simboleggia «renge», il fiore di loto?",
        options: [
          "La meraviglia e il mistero di questa Legge",
          "Solo la purezza di chi non ha mai sofferto",
          "Un ornamento dei templi",
          "La separazione tra sacro e quotidiano",
        ],
        answer: "La meraviglia e il mistero di questa Legge",
        explain:
          "Il gosho lo dice così: renge «simboleggia la meraviglia e il mistero di questa Legge». Il loto fiorisce nel fango — causa e effetto insieme — e la Buddità non aspetta un terreno già pulito. Le tue difficoltà di ora sono il fango da cui può spuntare il fiore.",
        deepenLabel: "Rileggi myo, ho, renge, kyo",
        deepenHref: GOSHO_URL,
      },
      {
        type: "complete",
        source: GOSHO_SOURCE,
        prompt: "Completa il passo sui Budda e sugli insegnamenti.",
        passage:
          "Non pensare mai che qualcuno degli ottantamila sacri insegnamenti di Shakyamuni o qualcuno dei Budda e bodhisattva delle tre esistenze e delle dieci direzioni sia {blank}.",
        options: [
          "al di fuori di te",
          "dentro un tempio lontano",
          "solo nei sutra antichi",
          "riservato ai monaci",
        ],
        answer: "al di fuori di te",
        explain:
          "Anche i Budda non sono altrove. Se li cerchi fuori, la pratica diventa austerità infinita. È lo stesso filo di «Myoho-renge-kyo è la tua vita stessa»: al corso non si va a prendere qualcosa che manca, si rivela ciò che c'è già.",
        deepenLabel: "Apri il gosho",
        deepenHref: GOSHO_URL,
      },
      {
        type: "choice",
        source: GOSHO_SOURCE,
        prompt:
          "La pratica buddista, scrive il Daishonin, non ti solleverà dalle sofferenze di nascita e morte a meno che…",
        options: [
          "Tu non percepisca la vera natura della tua vita",
          "Tu non abbandoni famiglia e lavoro",
          "Tu non accumuli meriti per molte esistenze",
          "Tu non viva già in una terra pura",
        ],
        answer: "Tu non percepisca la vera natura della tua vita",
        explain:
          "Senza percepire la natura della propria vita, cita T'ien-t'ai, non si sradicano le colpe gravi. Recitare e «guardare fuori» non basta. Il corso chiede proprio questa percezione: lucidare lo specchio, qui, in questa esistenza.",
        deepenLabel: "Rileggi il passo",
        deepenHref: GOSHO_URL,
      },
    ],
  },
  {
    id: "accelerazione",
    title: "Quiz Accelerazione",
    eyebrow: "Nuova Rivoluzione Umana · vol. 6",
    lead:
      "Dokan, dialogo, unità, «quando accade un grande male…»: i temi del capitolo su cui si basa il corso, per arrivare già in moto.",
    accent: "nru",
    questions: [
      {
        type: "choice",
        source: NRU_SOURCE,
        prompt:
          "Il capitolo si apre su Dokan, un luogo considerato «ruvido» e difficile. Cos'era?",
        options: [
          "Un quartiere di baracche sulla baia di Hakata, a Fukuoka",
          "Un tempio isolato sulle montagne di Minobu",
          "La sede centrale della Soka Gakkai a Tokyo",
          "Un villaggio di pescatori a Kamakura",
        ],
        answer: "Un quartiere di baracche sulla baia di Hakata, a Fukuoka",
        explain:
          "A Dokan, tra stenti e pregiudizi, persone comuni iniziano a praticare e a rivitalizzare la propria vita. L'accelerazione di kosen-rufu non parte dai palazzi: parte da chi soffre. Al corso chiederemo: dov'è il mio Dokan — e come ne divento protagonista?",
        deepenLabel: "Apri il capitolo (PDF)",
        deepenHref: NRU_PDF,
      },
      {
        type: "choice",
        source: NRU_SOURCE,
        prompt:
          "In quale periodo si svolgono i fatti del capitolo «Accelerazione»?",
        options: [
          "Nel 1962, verso il secondo anniversario della presidenza di Shin'ichi",
          "Nel 1960, il giorno in cui Shin'ichi diventa presidente",
          "Nel 1958, alla scomparsa di Josei Toda",
          "Nel 1975, alla fondazione della SGI",
        ],
        answer:
          "Nel 1962, verso il secondo anniversario della presidenza di Shin'ichi",
        explain:
          "Shin'ichi è presidente dal 3 maggio 1960. Il capitolo arriva al 3 maggio 1962: la 24ª riunione generale, due anni dopo. Dokan, lo studio dei nuovi membri, l'appello all'unità: tutto accade in quei primi mesi del 1962, in cui kosen-rufu prende slancio.",
        deepenLabel: "Apri il capitolo",
        deepenHref: NRU_PDF,
      },
      {
        type: "choice",
        source: NRU_SOURCE,
        prompt:
          "Perché, in quel periodo, il movimento «accelera»?",
        options: [
          "In due anni i membri sono raddoppiati e kosen-rufu prende slancio verso i tre milioni di famiglie",
          "La Soka Gakkai sta riducendo le attività dopo la guerra",
          "Shin'ichi si ritira dallo studio per dedicarsi solo all'organizzazione",
          "Si interrompono i viaggi di incoraggiamento a Kyushu",
        ],
        answer:
          "In due anni i membri sono raddoppiati e kosen-rufu prende slancio verso i tre milioni di famiglie",
        explain:
          "Non è fretta vuota: a Dokan vite spezzate ricominciano, i nuovi membri vengono nutriti con lo studio, l'unità diventa pilastro. L'accelerazione è l'ichinen che si fa azione — lo stesso che chiediamo al Territorio da qui a ottobre.",
        deepenLabel: "Rileggi Accelerazione",
        deepenHref: NRU_PDF,
      },
      {
        type: "complete",
        source: NRU_SOURCE,
        prompt:
          "Al memoriale per Josei Toda, Shin'ichi cita un gosho e rinnova la determinazione. Completa il passo.",
        passage: "Quando accade un grande male, {blank}.",
        options: [
          "seguirà un grande bene",
          "è meglio restare in silenzio",
          "la pratica va sospesa",
          "si deve aspettare tempi migliori",
        ],
        answer: "seguirà un grande bene",
        explain:
          "Dal gosho «Grande male e grande bene»: l'ostacolo non è il contrario della vittoria, è il suo segnale. Nel capitolo, critiche e attacchi non fermano Shin'ichi: diventa più determinato. Porta al corso una difficoltà con questa convinzione.",
        deepenLabel: "Leggi Accelerazione",
        deepenHref: NRU_PDF,
      },
      {
        type: "choice",
        source: NRU_SOURCE,
        prompt:
          "Dopo risultati di propagazione senza precedenti, Shin'ichi non si ferma al numero. Cosa fa per i nuovi membri?",
        options: [
          "Si dedica a nutrirli con lo studio del Buddismo di Nichiren e va a incoraggiarli",
          "Lascia che si organizzino da soli, senza guida",
          "Sospende le attività per consolidare solo il quartier generale",
          "Chiede loro di non dialogare fino all'anno successivo",
        ],
        answer:
          "Si dedica a nutrirli con lo studio del Buddismo di Nichiren e va a incoraggiarli",
        explain:
          "Viaggia a Chugoku e Shikoku. L'accelerazione vera non è solo «di più»: è di più profondità. Per questo il corso unisce gosho e NRU: iscriversi non basta, si studia e ci si incoraggia a vicenda.",
        deepenLabel: "Apri il capitolo",
        deepenHref: NRU_PDF,
      },
      {
        type: "complete",
        source: NRU_SOURCE,
        prompt:
          "Alla 24ª riunione generale (3 maggio, secondo anniversario della presidenza) Shin'ichi lancia un appello. Completalo.",
        passage:
          "Facciamo della Soka Gakkai il {blank} del Giappone e avanziamo con un'unità indistruttibile per la felicità del popolo e la prosperità della società.",
        options: [
          "pilastro",
          "rifugio nascosto",
          "partito",
          "tribunale",
        ],
        answer: "pilastro",
        explain:
          "Unità per la felicità delle persone, non per il prestigio. È lo spirito con cui vogliamo arrivare a Marina di Camerota: un territorio che diventa pilastro per chi soffre, non un gruppo chiuso.",
        deepenLabel: "Rileggi la scena",
        deepenHref: NRU_PDF,
      },
      {
        type: "complete",
        source: NRU_SOURCE,
        prompt:
          "Shin'ichi cita il Daishonin per spiegare che l'organizzazione riflette la determinazione dei responsabili.",
        passage:
          "Se il generale si perde di coraggio, i soldati {blank}.",
        options: [
          "diventeranno codardi",
          "combattono meglio",
          "trovano un altro maestro",
          "vincono lo stesso",
        ],
        answer: "diventeranno codardi",
        explain:
          "Dal gosho «La supremazia della Legge». Per ispirare bisogna prima bruciare di convinzione: preghiera, gioia, il massimo di oggi. Ognuno, al corso, è un po' «generale» della propria vita e del proprio gruppo.",
        deepenLabel: "Apri Accelerazione",
        deepenHref: NRU_PDF,
      },
      {
        type: "choice",
        source: NRU_SOURCE,
        prompt:
          "Lo scrittore Mimpei Sugiura, dopo aver visto le trasformazioni dei membri, cosa riconosce come più grande risultato della Soka Gakkai?",
        options: [
          "Risvegliare il potere del popolo e rivitalizzarne la vita",
          "Costruire grandi edifici",
          "Vincere dibattiti teorici",
          "Ritirarsi dalla società",
        ],
        answer:
          "Risvegliare il potere del popolo e rivitalizzarne la vita",
        explain:
          "Sugiura cercava di liberare chi soffriva con la sola assistenza, e si era arenato. Vide membri cambiare malattia, povertà, destino — e diventare protagonisti della società. È l'accelerazione: non «aiutare da fuori», ma risvegliare da dentro. Come il gosho: la Legge è la tua vita.",
        deepenLabel: "Leggi l'episodio",
        deepenHref: NRU_PDF,
      },
      {
        type: "choice",
        source: NRU_SOURCE,
        prompt:
          "Di fronte a calunnie e menzogne, Shin'ichi definisce kosen-rufu anche in un altro modo. Quale?",
        options: [
          "Una battaglia di dialogo: spezzare la rete di bugie e far conoscere la verità",
          "Una gara a chi recita di più, senza parlare",
          "Un dibattito riservato agli studiosi",
          "Una ritirata silenziosa dalle critiche",
        ],
        answer:
          "Una battaglia di dialogo: spezzare la rete di bugie e far conoscere la verità",
        explain:
          "«Quando è il momento di parlare, si deve parlare e lottare per la verità. Non farlo è semplicemente vigliaccheria.» Il corso si prepara anche così: un dialogo in più, una testimonianza, un invito. Kosen-rufu accelera quando le voci sincere si moltiplicano.",
        deepenLabel: "Apri il capitolo",
        deepenHref: NRU_PDF,
      },
      {
        type: "complete",
        source: NRU_SOURCE,
        prompt: "Completa la guida di Shin'ichi ai responsabili.",
        passage:
          "I responsabili devono mettere da parte ogni egoismo e vanità, determinandosi con forza a dedicarsi pienamente {blank}. Questa è la via vera e corretta per praticare il Buddismo.",
        options: [
          "ai membri",
          "alla propria immagine",
          "solo allo studio teorico",
          "agli incarichi di prestigio",
        ],
        answer: "ai membri",
        explain:
          "L'unica preoccupazione di Shin'ichi, sotto gli attacchi, è incoraggiare. Arrivare al corso «incoraggiati» significa anche diventare noi incoraggiamento per qualcuno. Gira la ruota: potrebbe toccarti proprio questa sfida.",
        deepenLabel: "Rileggi Accelerazione",
        deepenHref: NRU_PDF,
      },
      {
        type: "complete",
        source: NRU_SOURCE,
        prompt: "Completa le parole di Shin'ichi sulla verità.",
        passage:
          "Quando è il momento di parlare, si deve parlare e lottare per la verità. Non farlo è semplicemente {blank}.",
        options: [
          "vigliaccheria",
          "saggezza",
          "pazienza",
          "diplomazia",
        ],
        answer: "vigliaccheria",
        explain:
          "«Il silenzio è d'oro» non vale quando la menzogna corre. Kosen-rufu, in questo capitolo, è anche una battaglia di parole sincere. Un dialogo, un vocale, una testimonianza: è già parlare per la verità.",
        deepenLabel: "Apri il capitolo",
        deepenHref: NRU_PDF,
      },
      {
        type: "choice",
        source: NRU_SOURCE,
        prompt:
          "Alla riunione di Hokkaido, Shin'ichi ricorda la missione dei buddisti. Quale?",
        options: [
          "Contribuire alla società, non occuparsi solo della propria felicità",
          "Ritirarsi dalla vita pubblica e praticare in solitudine",
          "Lasciare la società a chi non ha fede",
          "Vincere le elezioni per governare il paese",
        ],
        answer:
          "Contribuire alla società, non occuparsi solo della propria felicità",
        explain:
          "Siamo buddisti e cittadini. Occuparsi solo del proprio beneficio, dice Shin'ichi, è egoismo. L'accelerazione è vite comuni che rivitalizzano la società — da Dokan al Territorio Salerno.",
        deepenLabel: "Rileggi Accelerazione",
        deepenHref: NRU_PDF,
      },
    ],
  },
  {
    id: "corso",
    title: "Super quiz del corso",
    eyebrow: "Gosho + Accelerazione + Camerota",
    lead:
      "Un mix per scaldare l'ichinen: testi di studio, spirito del capitolo e qualche domanda sul Corso Salerno 2026.",
    accent: "mix",
    questions: [
      {
        type: "complete",
        source: GOSHO_SOURCE,
        prompt: "La promessa del gosho, se reciti con profonda fede:",
        passage:
          "Se reciti Myoho-renge-kyo con una profonda fede in questa verità, sicuramente conseguirai {blank}.",
        options: [
          "la Buddità in questa esistenza",
          "una vita senza più problemi",
          "la fama tra i praticanti",
          "la rinascita in un'altra terra",
        ],
        answer: "la Buddità in questa esistenza",
        explain:
          "«Non dubitare mai minimamente», chiude il Daishonin. Il corso ha questo titolo nel cuore: non un ideale lontano, una possibilità ora. La fede profonda si allena prima di ottobre — daimoku, studio, dialogo.",
        deepenLabel: "Leggi il gosho",
        deepenHref: GOSHO_URL,
      },
      {
        type: "choice",
        source: "Corso Salerno 2026",
        prompt: "Quali testi approfondiremo insieme a Marina di Camerota?",
        options: [
          "Il gosho «Il conseguimento della Buddità in questa esistenza» e NRU vol. 6, capitolo «Accelerazione»",
          "Solo il Sutra del Loto, senza gosho",
          "NRU volume 1, capitolo «Pace»",
          "Unicamente materiali organizzativi",
        ],
        answer:
          "Il gosho «Il conseguimento della Buddità in questa esistenza» e NRU vol. 6, capitolo «Accelerazione»",
        explain:
          "Due testi, un filo: la Buddità nella vita di tutti i giorni e l'accelerazione di persone comuni che cambiano il destino. Li trovi in Informazioni, con i link per leggere e scaricare.",
        deepenLabel: "Vai ai materiali",
        deepenHref: STUDY_INFO,
      },
      {
        type: "choice",
        source: "Corso Salerno 2026",
        prompt:
          "Quale coppia di periodi corrisponde ai due testi del corso?",
        options: [
          "Gosho: Kamakura, 1255 · Capitolo Accelerazione: Giappone, 1962",
          "Gosho: Giappone, 1962 · Capitolo Accelerazione: Kamakura, 1255",
          "Gosho: Camerota, 2026 · Capitolo Accelerazione: Camerota, 2026",
          "Gosho: India, al tempo di Shakyamuni · Capitolo Accelerazione: 1945",
        ],
        answer:
          "Gosho: Kamakura, 1255 · Capitolo Accelerazione: Giappone, 1962",
        explain:
          "Due epoche, lo stesso filo: nel 1255 il Daishonin indica la Buddità in questa esistenza; nel 1962 Shin'ichi la vede accadere nelle vite comuni, a Dokan e in tutto il Giappone. Al corso le facciamo nostre, nel Territorio Salerno.",
        deepenLabel: "Materiali di studio",
        deepenHref: STUDY_INFO,
      },
      {
        type: "choice",
        source: NRU_SOURCE,
        prompt:
          "Perché il capitolo si chiama «Accelerazione»?",
        options: [
          "Perché kosen-rufu prende slancio: vite comuni si rivitalizzano e il movimento accelera",
          "Perché Shin'ichi impara a guidare le automobili",
          "Perché si parla solo di economia giapponese",
          "Perché le attività vengono ridotte per andare più lenti",
        ],
        answer:
          "Perché kosen-rufu prende slancio: vite comuni si rivitalizzano e il movimento accelera",
        explain:
          "Dokan, studio dei nuovi membri, unità, dialogo: lo slancio non è fretta vuota, è l'ichinen che si muove. Il corso vuole la stessa dinamica nel Territorio Salerno: da qui a ottobre, accelerare nella pratica e nell'incoraggiamento.",
        deepenLabel: "Scarica il capitolo",
        deepenHref: NRU_PDF,
      },
      {
        type: "complete",
        source: GOSHO_SOURCE,
        prompt: "Se reciti ma pensi che la Legge sia fuori di te…",
        passage:
          "Tuttavia, se reciti e credi in Myoho-renge-kyo, ma pensi che la Legge sia al di fuori di te, stai abbracciando non la Legge mistica, ma {blank}.",
        options: [
          "un insegnamento inferiore",
          "un livello avanzato di pratica",
          "la stessa illuminazione",
          "un espediente necessario",
        ],
        answer: "un insegnamento inferiore",
        explain:
          "Uno dei passi più taglienti del gosho. La recitazione senza la convinzione «è la mia vita» resta tecnica. Al corso lavoreremo su questa fede: lucidare lo specchio, non decorare quello del vicino.",
        deepenLabel: "Rileggi il passo",
        deepenHref: GOSHO_URL,
      },
      {
        type: "choice",
        source: "Corso Salerno 2026",
        prompt: "Dove e quando si tiene il Corso autunnale 2026?",
        options: [
          "Happy Village, Marina di Camerota · 9–11 ottobre 2026",
          "Roma · 1–3 maggio 2026",
          "Minobu · 12–13 aprile 2026",
          "Napoli centro · 20–22 novembre 2026",
        ],
        answer: "Happy Village, Marina di Camerota · 9–11 ottobre 2026",
        explain:
          "Check-in venerdì 9 dalle 13:00, corso dalle 14:00; conclusione domenica 11 alle 12:30, poi il pranzo. C'è tempo per arrivare incoraggiati: ogni sfida della ruota è un passo verso quella spiaggia.",
        deepenLabel: "Tutte le info",
        deepenHref: "/info",
      },
      {
        type: "complete",
        source: NRU_SOURCE,
        prompt: "Il filo rosso tra gosho e capitolo:",
        passage:
          "A Dokan, come nello specchio del gosho, a trasformarsi non è un'élite: sono le persone comuni. Sugiura vide la Soka Gakkai {blank}.",
        options: [
          "risvegliare il potere del popolo e rivitalizzarne la vita",
          "sostituire lo Stato",
          "chiudersi in un monastero",
          "rinunciare al dialogo",
        ],
        answer:
          "risvegliare il potere del popolo e rivitalizzarne la vita",
        explain:
          "Gosho: la Buddità è nella vita di ciascuno. NRU: quella verità diventa storie vere, nei quartieri più duri. Il corso chiede la tua storia — già in preparazione, non solo a ottobre.",
        deepenLabel: "Apri Accelerazione",
        deepenHref: NRU_PDF,
      },
      {
        type: "choice",
        source: "Preparazione al corso",
        prompt:
          "Quale obiettivo di daimoku è stato proposto al Territorio verso il corso?",
        options: [
          "90 minuti al giorno",
          "5 minuti a settimana",
          "Solo durante il corso",
          "Nessun obiettivo condiviso",
        ],
        answer: "90 minuti al giorno",
        explain:
          "Novanta minuti: lucidare lo specchio notte e giorno, come insegna il gosho. Il conta daimoku del sito è lì per farlo insieme. Ogni minuto è già accelerazione.",
        deepenLabel: "Conta daimoku",
        deepenHref: DAIMOKU_PAGE,
      },
      {
        type: "choice",
        source: GOSHO_SOURCE,
        prompt:
          "Il Sutra del Loto, in questo gosho, viene chiamato in un modo preciso. Quale?",
        options: [
          "Il re dei sutra, autentico e corretto sia nella lettera sia nella teoria",
          "Un testo secondario rispetto ai sutra provvisori",
          "Un poema senza implicazioni pratiche",
          "Un insegnamento solo per i monaci",
        ],
        answer:
          "Il re dei sutra, autentico e corretto sia nella lettera sia nella teoria",
        explain:
          "I suoi caratteri sono il vero aspetto di tutti i fenomeni — e quel vero aspetto è myoho. Non è letteratura da scaffale: è la mappa della tua vita. Per questo lo studiamo prima di viverlo insieme a Camerota.",
        deepenLabel: "Apri il gosho",
        deepenHref: GOSHO_URL,
      },
      {
        type: "complete",
        source: NRU_SOURCE,
        prompt: "Completa lo spirito dell'unità nel capitolo.",
        passage:
          "Avanziamo con un'unità indistruttibile per la felicità del popolo e {blank}.",
        options: [
          "la prosperità della società",
          "il prestigio dei responsabili",
          "l'isolamento dal mondo",
          "la vittoria sugli altri gruppi",
        ],
        answer: "la prosperità della società",
        explain:
          "Buddisti e cittadini insieme: Shin'ichi parla di responsabilità verso chi è debole, non di fuga nella pratica privata. Il corso è un pezzo di società che si allena alla felicità reciproca. Porta un amico, un dialogo, una sfida.",
        deepenLabel: "Leggi il capitolo",
        deepenHref: NRU_PDF,
      },
      {
        type: "choice",
        source: GOSHO_SOURCE,
        prompt:
          "«Un singolo istante di vita» (ichinen) abbraccia corpo, mente, io, ambiente, i Dieci mondi… Come si chiama questo principio, indicato nel gosho?",
        options: [
          "La mutua inclusione tra un singolo istante di vita e tutti i fenomeni",
          "La rinuncia a ogni fenomeno",
          "La separazione tra io e ambiente",
          "Il destino fisso dalla nascita",
        ],
        answer:
          "La mutua inclusione tra un singolo istante di vita e tutti i fenomeni",
        explain:
          "Ichinen sanzen in forma viva: un istante tuo contiene tutto. Per questo una determinazione di oggi — un daimoku, un dialogo, una sfida della ruota — può accelerare l'intera vita verso il corso e oltre.",
        deepenLabel: "Rileggi il gosho",
        deepenHref: GOSHO_URL,
      },
      {
        type: "complete",
        source: GOSHO_SOURCE,
        prompt: "Come chiude il Daishonin lo scritto?",
        passage: "Non dubitare mai {blank}.",
        options: [
          "minimamente",
          "dopo il corso",
          "se gli altri dubitano",
          "fino alla vecchiaia",
        ],
        answer: "minimamente",
        explain:
          "Dopo aver promesso la Buddità in questa esistenza, il Daishonin chiude così. Non è uno slogan: è la fede da portare a Camerota. Mantieni la fede — e non dubitare minimamente.",
        deepenLabel: "Leggi la chiusura",
        deepenHref: GOSHO_URL,
      },
      {
        type: "choice",
        source: "Corso Salerno 2026",
        prompt: "Chi può iscriversi al Corso autunnale 2026?",
        options: [
          "Tutti i membri (adulti e giovani), i simpatizzanti giovani e il Gruppo Futuro",
          "Solo i responsabili di Territorio",
          "Solo chi ha già completato i quiz",
          "Unicamente i membri del Gruppo Giovani",
        ],
        answer:
          "Tutti i membri (adulti e giovani), i simpatizzanti giovani e il Gruppo Futuro",
        explain:
          "Il corso è del Territorio, non di un circolo interno. Porta qualcuno: un simpatizzante, un amico del Gruppo Futuro. L'unità del capitolo Accelerazione comincia così, già da ora.",
        deepenLabel: "Vai alle info",
        deepenHref: "/info",
      },
    ],
  },
];

export const wheelChallenges: WheelChallenge[] = [
  {
    id: "specchio",
    short: "Specchio",
    title: "Lucida lo specchio",
    theme: "Gosho · lo specchio della vita",
    challenge:
      "Oggi recita almeno 10 minuti in più di daimoku, con una sola convinzione: stai lucidando lo specchio. Alla fine annota come ti senti. Porta quell'appunto al corso.",
    why: "«Come dovresti lucidarlo? Solo recitando Nam-myoho-renge-kyo.» Ogni daimoku verso ottobre è già il corso che comincia.",
    deepenLabel: "Gosho + conta daimoku",
    deepenHref: DAIMOKU_PAGE,
  },
  {
    id: "in-te",
    short: "In te",
    title: "La Legge è la tua vita",
    theme: "Gosho · non cercare fuori",
    challenge:
      "Per un giorno, ogni volta che cerchi la soluzione solo fuori (un like, un confronto, un colpevole), fermati e scrivi: «Cosa posso far emergere da me?». Una riga basta.",
    why: "Se pensi che Myoho-renge-kyo sia fuori di te, dice il Daishonin, stai abbracciando un insegnamento inferiore. La sfida è credere che la Legge è la tua vita stessa.",
    deepenLabel: "Apri il gosho",
    deepenHref: GOSHO_URL,
  },
  {
    id: "vicino",
    short: "Vicino",
    title: "Non contare le ricchezze del vicino",
    theme: "Gosho · la metafora del povero",
    challenge:
      "Oggi niente confronti. Celebra una vittoria di un'altra persona — anche minuscola — e dille grazie, a voce o con un messaggio.",
    why: "Contare i tesori altrui non aggiunge mezzo centesimo alla propria vita. Al corso arriveremo con storie, non con classifiche.",
    deepenLabel: "Rileggi il passo",
    deepenHref: GOSHO_URL,
  },
  {
    id: "terra",
    short: "Terra pura",
    title: "Mente pura, terra pura",
    theme: "Gosho · l'ambiente riflette la mente",
    challenge:
      "Trasforma un angolo concreto della tua «terra»: un tavolo in ordine, un tono più gentile in famiglia, un gesto utile in condominio o al lavoro. Una cosa visibile.",
    why: "Non ci sono terre pure o impure di per sé: la differenza sta nella mente. L'accelerazione del capitolo NRU parte proprio da ambienti «difficili» che cambiano.",
    deepenLabel: "Apri il gosho",
    deepenHref: GOSHO_URL,
  },
  {
    id: "dialogo",
    short: "Dialogo",
    title: "Un dialogo in più",
    theme: "Accelerazione · battaglia di parole sincere",
    challenge:
      "Parla del corso, o di un passo che ti ha colpito, con una persona. Anche un vocale WhatsApp conta. Non convincere: condividi.",
    why: "Shin'ichi chiama kosen-rufu una battaglia di dialogo: far conoscere la verità con l'umanità. Il Territorio accelera se le voci si moltiplicano.",
    deepenLabel: "Capitolo Accelerazione",
    deepenHref: NRU_PDF,
  },
  {
    id: "accelera",
    short: "Accelera",
    title: "Il primo passo che rimandi",
    theme: "NRU · l'accelerazione nasce dal movimento",
    challenge:
      "Scegli un obiettivo che stai rimandando (iscrizione, studio, una telefonata, un daimoku più lungo) e fai il primo passo concreto entro 24 ore.",
    why: "Nel capitolo lo slancio non aspetta il momento perfetto: Shin'ichi si muove, incoraggia, studia. L'accelerazione è l'ichinen che si fa azione.",
    deepenLabel: "Apri il PDF",
    deepenHref: NRU_PDF,
  },
  {
    id: "incoraggia",
    short: "Incoraggia",
    title: "Dedicati a qualcuno",
    theme: "Accelerazione · responsabili e membri",
    challenge:
      "Scrivi o racconta un incoraggiamento sincero a una persona del tuo gruppo (o a chi sta faticando). Niente frasi fatte: una cosa vera che hai visto in lei o in lui.",
    why: "«Dedicarsi pienamente ai membri»: sotto gli attacchi, l'unica ossessione di Shin'ichi è ispirare. Arrivare al corso incoraggiati significa anche essere incoraggiamento.",
    deepenLabel: "Rileggi Accelerazione",
    deepenHref: NRU_PDF,
  },
  {
    id: "grande-bene",
    short: "Grande bene",
    title: "Quando il male è grande",
    theme: "NRU · grande male, grande bene",
    challenge:
      "Prendi una difficoltà che stai vivendo. Recita daimoku convinto che da lì può uscire un bene più grande. Annota una determinazione da portare al corso.",
    why: "Shin'ichi cita: «Quando il male è grande, il bene è grande.» L'ostacolo è il segnale, non il verdetto. Il corso è il luogo dove queste esperienze diventano tesoro condiviso.",
    deepenLabel: "Apri il capitolo",
    deepenHref: NRU_PDF,
  },
  {
    id: "protagonista",
    short: "Protagonista",
    title: "Come a Dokan",
    theme: "Accelerazione · persone comuni",
    challenge:
      "Fai oggi una cosa da protagonista, non da spettatore: un daimoku che di solito salti, un aiuto a chi soffre, un sì a un'attività. Piccola, ma tua.",
    why: "A Dokan vite spezzate ricominciano. Sugiura vide il potere delle persone «in fondo» che si risveglia. Il gosho dice lo stesso: la Buddità è in questa esistenza, la tua.",
    deepenLabel: "Materiali di studio",
    deepenHref: STUDY_INFO,
  },
  {
    id: "studio",
    short: "Studio",
    title: "Una frase da portare",
    theme: "Studio · gosho e NRU",
    challenge:
      "Leggi (o rileggi) due pagine del gosho o del capitolo Accelerazione. Sottolinea una sola frase. Mandala a te stesso in un messaggio, e tieni quella frase fino al corso.",
    why: "Shin'ichi, dopo l'ondata di nuovi membri, li nutre con lo studio. Giocare ai quiz accende la curiosità: il testo la soddisfa. Due pagine oggi valgono più di otto buone intenzioni.",
    deepenLabel: "Scegli il testo",
    deepenHref: STUDY_INFO,
  },
  {
    id: "unita",
    short: "Unità",
    title: "Unità indistruttibile",
    theme: "Accelerazione · pilastro insieme",
    challenge:
      "Contatta qualcuno con cui i rapporti si sono raffreddati, o un membro che non senti da un po'. Un saluto basta per riaprire il filo verso Camerota.",
    why: "«Avanziamo con un'unità indistruttibile per la felicità del popolo.» Il corso non è un albergo di solitudini: è un territorio che si riconosce prima di arrivare.",
    deepenLabel: "Info e iscrizione",
    deepenHref: "/info",
  },
  {
    id: "ichinen",
    short: "Ichinen",
    title: "Un istante intero",
    theme: "Gosho · ichinen e tutti i fenomeni",
    challenge:
      "Scegli un'ora oggi in cui sei tutto lì: daimoku, studio o un dialogo. Telefono in un'altra stanza. Un singolo istante, fatto sul serio.",
    why: "La vita in ogni istante abbraccia io e ambiente, i Dieci mondi, il granello di polvere. Un'ora piena può accelerare mesi. È il modo più concreto di preparare il corso.",
    deepenLabel: "Leggi il gosho",
    deepenHref: GOSHO_URL,
  },
];

const sparkBand: QuizResultBand = {
  minRatio: 0,
  title: "La scintilla è accesa",
  text: "Hai aperto la porta: è esattamente lo spirito di questi giochi. Ogni domanda “sbagliata” è un passaggio del testo che al corso diventerà tuo. Non serve arrivare preparati al millimetro — serve arrivare curiosi.",
};

const threadBand: QuizResultBand = {
  minRatio: 0.4,
  title: "Lo specchio si sta lucidando",
  text: "Hai già afferrato il filo. Rileggi i passaggi che ti hanno fatto inciampare: sono spesso i più succosi. Da qui al corso, anche poche righe a settimana cambiano il modo in cui arriverai a Marina di Camerota.",
};

export const quizResults: Record<string, QuizResultBand[]> = {
  gosho: [
    sparkBand,
    threadBand,
    {
      minRatio: 0.65,
      title: "Lo specchio riflette",
      text: "Si vede che il testo ha già iniziato a lavorarti. Ora il passo successivo non è “saperne di più”, è farne esperienza: daimoku, lucidare lo specchio. Il gosho chiede proprio questo: cogliere la verità già inerente a questa esistenza.",
    },
    {
      minRatio: 0.85,
      title: "Buddità in questa esistenza",
      text: "Che gioia! Non è un diploma: è una base viva da portare agli altri. Condividi il quiz, gira la ruota, invita qualcuno a studiare con te. Il gosho finisce così: mantieni la fede, e non dubitare minimamente.",
    },
  ],
  accelerazione: [
    sparkBand,
    threadBand,
    {
      minRatio: 0.65,
      title: "Sei in accelerazione",
      text: "Si vede che il capitolo ha già iniziato a lavorarti. Ora il passo successivo non è “saperne di più”, è farne esperienza: daimoku, un dialogo, una pagina. L’accelerazione del volume 6 è questa.",
    },
    {
      minRatio: 0.85,
      title: "Unità indistruttibile",
      text: "Che gioia! Non è un diploma: è una base viva da portare agli altri. Condividi il quiz, gira la ruota, invita qualcuno a studiare con te. Shin’ichi, nel capitolo, lancia: avanziamo con un’unità indistruttibile per la felicità del popolo e la prosperità della società.",
    },
  ],
  corso: [
    sparkBand,
    threadBand,
    {
      minRatio: 0.65,
      title: "Sei in accelerazione",
      text: "Si vede che i testi hanno già iniziato a lavorarti. Ora il passo successivo non è “saperne di più”, è farne esperienza: daimoku, un dialogo, una pagina del capitolo. L’accelerazione del volume 6 è questa.",
    },
    {
      minRatio: 0.85,
      title: "Buddità in questa esistenza",
      text: "Che gioia! Non è un diploma: è una base viva da portare agli altri. Condividi il quiz, gira la ruota, invita qualcuno a studiare con te. Il gosho finisce così: mantieni la fede, e non dubitare minimamente.",
    },
  ],
};

export function getQuiz(id: string) {
  return quizzes.find((quiz) => quiz.id === id);
}

export function dailyChallengeIndex(date = new Date()) {
  const start = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  return Math.floor(start / 86400000) % wheelChallenges.length;
}
