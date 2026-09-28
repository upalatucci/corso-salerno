import {
  ACCESS_COOKIE_NAME,
  ACCESS_COOKIE_VALUE,
} from "./lib/access-config.js";
import { buildAccessCookie } from "./lib/access-cookie.js";
import { getStoredPassword } from "./lib/access-store.js";
import { isLinkPreviewBot } from "./lib/link-preview.js";
import { renderLoginPage } from "./lib/login-page.js";

const PROTECTED_PREFIXES = ["/articoli", "/video", "/daimoku", "/info"];
const PUBLIC_PREFIXES = ["/2024", "/_vercel"];
const PUBLIC_API_PATH = "/api/access";

function getCookie(request, name) {
  const cookieHeader = request.headers.get("cookie") || "";
  const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = cookieHeader.match(
    new RegExp(`(?:^|; )${escapedName}=([^;]*)`),
  );
  return match ? decodeURIComponent(match[1]) : null;
}

function isAuthenticated(request) {
  return getCookie(request, ACCESS_COOKIE_NAME) === ACCESS_COOKIE_VALUE;
}

function isApiPath(pathname) {
  return pathname === "/api" || pathname.startsWith("/api/");
}

function isPublicApiPath(pathname) {
  return pathname === PUBLIC_API_PATH;
}

function isPublicPath(pathname) {
  if (isPublicApiPath(pathname)) return true;

  return PUBLIC_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

function isProtectedPath(pathname) {
  if (pathname === "/") return true;

  if (
    PROTECTED_PREFIXES.some(
      (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
    )
  ) {
    return true;
  }

  return isApiPath(pathname) && !isPublicApiPath(pathname);
}

function unauthorizedApiResponse() {
  return new Response(JSON.stringify({ error: "Non autorizzato" }), {
    status: 401,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
}

function stripPwdFromUrl(url) {
  const clean = new URL(url);
  clean.searchParams.delete("pwd");
  const search = clean.searchParams.toString();
  return `${clean.pathname}${search ? `?${search}` : ""}`;
}

function getReturnPath(url) {
  const redirect = url.searchParams.get("redirect");
  if (redirect?.startsWith("/") && !redirect.startsWith("//")) {
    return redirect;
  }

  if (url.searchParams.has("access")) {
    return "/";
  }

  return stripPwdFromUrl(url);
}

function getLoginError(url) {
  const accessStatus = url.searchParams.get("access");

  if (accessStatus === "denied") {
    return "Password non corretta. Riprova.";
  }

  if (accessStatus === "error") {
    return "Accesso temporaneamente non disponibile. Riprova più tardi.";
  }

  return "";
}

async function handlePasswordQuery(request, url) {
  const pwd = url.searchParams.get("pwd");
  if (!pwd) return null;

  try {
    const storedPassword = await getStoredPassword();

    if (!storedPassword) {
      if (isApiPath(url.pathname)) {
        return new Response(
          JSON.stringify({ error: "Accesso non configurato" }),
          {
            status: 503,
            headers: {
              "Content-Type": "application/json",
              "Cache-Control": "no-store",
            },
          },
        );
      }

      return renderLoginPage(
        getReturnPath(url),
        "Accesso temporaneamente non disponibile. Riprova più tardi.",
      );
    }

    if (pwd !== storedPassword) {
      if (isApiPath(url.pathname)) {
        return unauthorizedApiResponse();
      }

      return renderLoginPage(
        getReturnPath(url),
        "Password non corretta. Riprova.",
      );
    }

    const userAgent = request.headers.get("user-agent") || "";

    if (isLinkPreviewBot(userAgent) || isApiPath(url.pathname)) {
      return;
    }

    const cleanUrl = new URL(url);
    cleanUrl.searchParams.delete("pwd");

    return new Response(null, {
      status: 302,
      headers: {
        Location: `${cleanUrl.pathname}${cleanUrl.search}`,
        "Set-Cookie": buildAccessCookie(request),
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error(error);

    if (isApiPath(url.pathname)) {
      return new Response(JSON.stringify({ error: "Qualcosa e' andato storto" }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
        },
      });
    }

    return renderLoginPage(
      getReturnPath(url),
      "Accesso temporaneamente non disponibile. Riprova più tardi.",
    );
  }
}

export default async function middleware(request) {
  const url = new URL(request.url);

  if (!isProtectedPath(url.pathname) || isPublicPath(url.pathname)) {
    return;
  }

  if (isAuthenticated(request)) {
    return;
  }

  const passwordResponse = await handlePasswordQuery(request, url);
  if (passwordResponse !== null) {
    return passwordResponse;
  }

  if (isApiPath(url.pathname)) {
    return unauthorizedApiResponse();
  }

  return renderLoginPage(getReturnPath(url), getLoginError(url));
}

export const config = {
  matcher: [
    "/",
    "/info",
    "/info/",
    "/daimoku",
    "/daimoku/",
    "/articoli",
    "/articoli/",
    "/articoli/:path*",
    "/video",
    "/video/",
    "/video/:path*",
    "/api/:path*",
  ],
};
