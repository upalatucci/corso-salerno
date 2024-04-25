import { kv } from "@vercel/kv";


const GOALS_KEY = 'obiettivi'

const getGoals = () =>  kv.lrange(GOALS_KEY, 0, -1)

const addGoal = (goal) => kv.lpush(GOALS_KEY, goal);

export default async function handler(request, response) {
  try {

    if (request.method === "GET") {
      const goals = await getGoals();
      return response.status(200).json({ goals });
    }

    
    const {goal} = request.body

    await addGoal(goal);

    response.status(200).json({ message: "Obiettivo salvato con successo su Redis." });
  } catch (error) {
    console.error("Errore durante il salvataggio dell'obiettivo su Redis:", error);
    response.status(500).json({ error: "Errore interno del server." });
  }
}
