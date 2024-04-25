import { kv } from "@vercel/kv";


const QUESTIONS_KEY = 'domande'

const getQuestions = () => kv.lrange(QUESTIONS_KEY, 0, -1)

const addQuestion = (question) =>  kv.lpush(QUESTIONS_KEY, question)

export default async function handler(request, response) {
  try {

    if (request.method === "GET") {
      const questions = await getQuestions();
      return response.status(200).json({ questions });
    }

    const {question} = request.body

    await addQuestion(question);

    response.status(200).json({ message: "Domanda salvata con successo su Redis." });
  } catch (error) {
    console.error("Errore durante il salvataggio della domanda su Redis:", error);
    response.status(500).json({ error: "Errore interno del server." });
  }
}
