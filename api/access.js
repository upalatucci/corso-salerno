import { buildAccessCookie } from "../lib/access-cookie.js";
import { getStoredPassword } from "../lib/access-store.js";

export default async function handler(request, response) {
  if (request.method === "OPTIONS") {
    return response.status(204).end();
  }

  if (request.method !== "POST") {
    return response.status(405).json({ error: "Metodo non consentito" });
  }

  try {
    const storedPassword = await getStoredPassword();

    if (!storedPassword) {
      return response.status(503).json({ error: "Accesso non configurato" });
    }

    const bodyParsed =
      typeof request.body === "string"
        ? JSON.parse(request.body || "{}")
        : request.body || {};
    const password = bodyParsed.password?.toString().trim() || "";

    if (password !== storedPassword) {
      return response.status(401).json({ error: "Password non corretta" });
    }

    response.setHeader("Set-Cookie", buildAccessCookie(request));
    return response.status(200).json({ ok: true });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: "Qualcosa e' andato storto" });
  }
}
