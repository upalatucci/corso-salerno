export const course2026 = {
  title: "Corso Salerno 2026",
  dates: "9 – 11 ottobre 2026",
  location: "Happy Village, Marina di Camerota (SA)",
  startNote:
    "Inizio nel primo pomeriggio del 9 ottobre · Conclusione con pranzo incluso dell'11 ottobre",
  courseDate: new Date(2026, 9, 9, 15, 0),

  participants: [
    "Tutti i membri (adulti e giovani)",
    "Simpatizzanti giovani",
    "Gruppo Futuro",
  ],

  pricing: [
    { room: "Camera Quadrupla", price: 164, limited: true },
    { room: "Camera Tripla", price: 174, limited: true },
    { room: "Camera Doppia", price: 187, limited: false },
    { room: "Camera Singola", price: 287, limited: true },
  ],

  deadlines: [
    {
      date: "15 luglio 2026",
      label: "Compilazione scheda di iscrizione online",
    },
    { date: "31 luglio 2026", label: "Acconto del 40%" },
    { date: "24 agosto 2026", label: "Saldo del 60%" },
  ],

  children: [
    "Bambini da 0 a 3 anni ammessi gratuitamente",
    "Bambini da 4 a 16 anni ammessi — costi e modalità indicati nella scheda di iscrizione",
  ],
};
