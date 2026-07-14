import { kv } from "@vercel/kv";
import { PASSWORD_KEY } from "./access-config.js";

export const getStoredPassword = async () => {
  if (process.env.SITE_ACCESS_PASSWORD) {
    return process.env.SITE_ACCESS_PASSWORD;
  }

  try {
    const fromKv = await kv.get(PASSWORD_KEY);
    if (fromKv) return String(fromKv);
  } catch (error) {
    console.error(error);
  }

  return null;
};
