import {
  ACCESS_COOKIE_MAX_AGE,
  ACCESS_COOKIE_NAME,
  ACCESS_COOKIE_VALUE,
} from "./access-config.js";

export function buildAccessCookie(request) {
  const proto =
    request.headers.get?.("x-forwarded-proto") ||
    request.headers?.["x-forwarded-proto"];
  const secure = proto === "https" ? "; Secure" : "";

  return `${ACCESS_COOKIE_NAME}=${ACCESS_COOKIE_VALUE}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${ACCESS_COOKIE_MAX_AGE}${secure}`;
}
