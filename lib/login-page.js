function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function renderLoginPage(returnPath, errorMessage = "") {
  const safeReturnPath =
    returnPath.startsWith("/") && !returnPath.startsWith("//")
      ? returnPath
      : "/";

  const errorHtml = errorMessage
    ? `<p id="password-error" class="error" role="alert">${escapeHtml(errorMessage)}</p>`
    : `<p id="password-error" class="error hidden" role="alert"></p>`;

  const html = `<!doctype html>
<html lang="it">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex, nofollow" />
    <title>Accesso · Corso Salerno 2026</title>
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;600;700&display=swap"
      rel="stylesheet"
    />
    <style>
      :root {
        --viola: #7c3fa8;
        --viola-dark: #4a1f6e;
        --arancio: #e8823a;
        --testo: #1a1028;
        --testo-light: #5a4a72;
        --card-bg: rgba(255, 255, 255, 0.82);
      }

      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      body {
        min-height: 100vh;
        font-family: "Inter", system-ui, sans-serif;
        color: var(--testo);
        background:
          radial-gradient(ellipse 80% 60% at 15% 10%, #f9c8dc 0%, transparent 60%),
          radial-gradient(ellipse 70% 50% at 85% 5%, #d8c9f0 0%, transparent 55%),
          linear-gradient(160deg, #f5e6fb 0%, #fbe8f5 40%, #f0e8fc 70%, #fde8e0 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem 1.25rem;
      }

      .card {
        width: min(100%, 24rem);
        text-align: center;
        background: var(--card-bg);
        backdrop-filter: blur(12px);
        border-radius: 20px;
        padding: 2rem 1.75rem;
        border: 1px solid rgba(255, 255, 255, 0.6);
        box-shadow: 0 8px 40px rgba(124, 63, 168, 0.12);
      }

      .icon {
        width: 72px;
        height: 72px;
        margin: 0 auto 1rem;
        display: block;
      }

      .eyebrow {
        font-size: 0.72rem;
        font-weight: 600;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--viola);
        margin-bottom: 0.5rem;
      }

      h1 {
        font-family: "Playfair Display", Georgia, serif;
        font-size: 1.6rem;
        font-weight: 700;
        color: var(--viola-dark);
        margin-bottom: 0.5rem;
      }

      .lead {
        font-size: 0.95rem;
        color: var(--testo-light);
        line-height: 1.6;
        margin-bottom: 1.5rem;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }

      input {
        width: 100%;
        padding: 0.8rem 1rem;
        border: 1px solid rgba(124, 63, 168, 0.2);
        border-radius: 12px;
        font: inherit;
        font-size: 1rem;
        background: rgba(255, 255, 255, 0.9);
      }

      button {
        padding: 0.85rem 1.5rem;
        border: none;
        border-radius: 999px;
        background: linear-gradient(135deg, var(--viola) 0%, var(--arancio) 100%);
        color: white;
        font: inherit;
        font-size: 0.95rem;
        font-weight: 700;
        cursor: pointer;
      }

      button:disabled {
        opacity: 0.7;
        cursor: wait;
      }

      .error {
        margin-top: 1rem;
        font-size: 0.9rem;
        font-weight: 600;
        color: #b42318;
      }

      .hidden {
        display: none;
      }

      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
    </style>
  </head>
  <body>
    <main class="card">
      <img class="icon" src="/icon.png" alt="" width="72" height="72" />
      <p class="eyebrow">Area riservata</p>
      <h1>Corso Salerno 2026</h1>
      <p class="lead">Inserisci la password per accedere al sito.</p>
      <form id="password-form">
        <label class="sr-only" for="site-password">Password</label>
        <input
          id="site-password"
          name="password"
          type="password"
          autocomplete="current-password"
          placeholder="Password"
          required
        />
        <button type="submit" id="submit-btn">Accedi</button>
      </form>
      ${errorHtml}
    </main>
    <script>
      const form = document.getElementById("password-form");
      const input = document.getElementById("site-password");
      const submitBtn = document.getElementById("submit-btn");
      const errorEl = document.getElementById("password-error");
      const returnPath = ${JSON.stringify(safeReturnPath)};

      const showError = (message) => {
        if (!errorEl) return;
        errorEl.textContent = message;
        errorEl.classList.remove("hidden");
      };

      form?.addEventListener("submit", async (event) => {
        event.preventDefault();
        errorEl?.classList.add("hidden");
        submitBtn.disabled = true;

        try {
          const response = await fetch("/api/access", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "same-origin",
            body: JSON.stringify({ password: input.value.trim() }),
          });

          if (response.ok) {
            window.location.replace(returnPath);
            return;
          }

          if (response.status === 401) {
            showError("Password non corretta. Riprova.");
            return;
          }

          if (response.status === 503) {
            showError("Accesso non configurato. Contatta l'organizzazione.");
            return;
          }

          showError("Accesso temporaneamente non disponibile. Riprova più tardi.");
        } catch {
          showError("Accesso temporaneamente non disponibile. Riprova più tardi.");
        } finally {
          submitBtn.disabled = false;
          input?.focus();
        }
      });

      input?.focus();
    </script>
  </body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
