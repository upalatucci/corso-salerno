import { kv } from "@vercel/kv";

const ACTIVE_CHANTERS_KEY = "active-chanters-salerno";

export default async function handler(request, response) {
  try {
    if (request.method === "GET") {
      const now = Date.now();

      await kv.zremrangebyscore(ACTIVE_CHANTERS_KEY, 0, now);

      const count = await kv.zcard(ACTIVE_CHANTERS_KEY);

      return response.status(200).json({ count });
    }

    const bodyParsed = JSON.parse(request.body);
    const durationMinutes = parseInt(bodyParsed.duration);

    if (isNaN(durationMinutes) || durationMinutes <= 0) {
      return response.status(400).json({ message: "Durata non valida" });
    }

    const sessionId = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    const expiresAt = Date.now() + durationMinutes * 60 * 1000;

    await kv.zadd(ACTIVE_CHANTERS_KEY, { score: expiresAt, member: sessionId });

    return response.status(200).json({ message: "OK", sessionId, expiresAt });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: "Qualcosa e' andato storto" });
  }
}
