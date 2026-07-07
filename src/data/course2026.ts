export const course2026 = {
  title: "Corso Salerno 2026",
  dates: "9 – 11 ottobre 2026",
  location: "Happy Village, Marina di Camerota (SA)",
  locationAddress:
    "Happy Village — Località Arconte snc, 84059 Marina di Camerota (SA)",
  locationWebsite: "https://www.happyvillage.it/",
  registrationUrl: "https://form.jotform.com/261656134013348",
  startNote:
    "Check-in venerdì 9 ottobre dalle 13:00 alle 15:00 · Corso dalle 14:00 · Conclusione domenica 11 ottobre alle 12:30, a seguire il pranzo",
  courseDate: new Date(2026, 9, 9, 14, 0),

  schedule: [
    "Check-in: venerdì 9 ottobre, dalle 13:00 alle 15:00",
    "Inizio corso: venerdì 9 ottobre alle 14:00",
    "Fine corso: domenica 11 ottobre alle 12:30, a seguire il pranzo",
    "Le stanze restano disponibili fino alle 17:00 di domenica 11 ottobre",
  ],

  participants: [
    "Tutti i membri (adulti e giovani)",
    "Simpatizzanti giovani",
    "Gruppo Futuro",
  ],

  pricing: [
    { room: "Camera Quadrupla", price: 167, rooms: 9, limited: true },
    { room: "Camera Tripla", price: 174, rooms: 19, limited: true },
    { room: "Camera Doppia", price: 187, rooms: 95, limited: false },
    { room: "Camera Singola", price: 287, rooms: 34, limited: true },
  ],

  included: [
    "9 ottobre: cena, pernottamento e tassa di soggiorno (€0,50 a persona)",
    "10 ottobre: colazione, pranzo, cena, pernottamento e tassa di soggiorno (€0,50 a persona)",
    "11 ottobre: colazione e pranzo",
  ],

  deadlines: [
    { date: "31 luglio 2026", label: "Acconto del 40% (o intero importo in unica rata)" },
    { date: "24 agosto 2026", label: "Saldo del 60%" },
  ],

  payment: {
    bankName: "DAPRO VIAGGI TOUR OPERATOR DI ANNA d'AGOSTINO & C. Sas",
    iban: "IT69 Q054 2415 1000 0000 0001 950",
    bank: "BDM FILIALE DI AVELLINO PARTENIO",
    causale: "SGI - Nome, Cognome, Camera singola/doppia/tripla/quadrupla",
    otherMethods: [
      "Contanti o carta di credito in agenzia",
      "Carta di credito online, previo invio link",
    ],
  },

  penalties: [
    "Cancellazioni entro il 14/09/2026: penale del 40% sull'intera quota",
    "Cancellazioni dal 15/09/2026 e no show: 100% della quota versata",
    "In caso di sostituzione non verrà applicata alcuna penale e l'agenzia provvederà al rimborso dell'intera quota di iscrizione",
  ],

  contacts: {
    committee: {
      label: "Comitato del corso",
      email: "corsoterritoriosalerno@gmail.com",
      note: "Per chiarimenti e/o informazioni",
    },
    agency: {
      label: "Agenzia Dapro Viaggi",
      address: "P.zza M. Galdi, 17 — 85135 Salerno",
      phone: "089271698",
      email: "anna@daproviaggi.it",
    },
  },

  children: [
    "Bambini da 0 a 3 anni: soggiorno gratuito, nessun pagamento richiesto",
    "Bambini fino a 12 anni (non compiuti) che occupano il 3° o 4° letto in camera: sconto del 50% sulla tariffa della camera",
  ],
};
