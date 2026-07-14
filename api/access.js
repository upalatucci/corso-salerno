import {
  ACCESS_COOKIE_MAX_AGE,
  ACCESS_COOKIE_NAME,
  ACCESS_COOKIE_VALUE,
} from "../lib/access-config.js";
import { getStoredPassword } from "../lib/access-store.js";

const buildAccessCookie = (request) => {
  const proto =
    request.headers["x-forwarded-proto"] ||
    request.headers.get?.("x-forwarded-proto");
  const secure = proto === "https" ? "; Secure" : "";

  return `${ACCESS_COOKIE_NAME}=${ACCESS_COOKIE_VALUE}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${ACCESS_COOKIE_MAX_AGE}${secure}`;
};

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
