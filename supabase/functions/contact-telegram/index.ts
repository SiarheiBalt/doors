import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const MAX_NAME = 120;
const MAX_PHONE = 40;
const MAX_COMMENT = 2000;
const TELEGRAM_MAX_TEXT = 4000;

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

function buildMessage(name: string, phone: string, comment: string): string {
  let text =
    `Заявка с сайта (Profil Doors)\n\n` +
    `Имя: ${name}\n` +
    `Телефон: ${phone}`;
  if (comment) text += `\n\nКомментарий:\n${comment}`;
  if (text.length > TELEGRAM_MAX_TEXT) {
    text = `${text.slice(0, TELEGRAM_MAX_TEXT - 1)}…`;
  }
  return text;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  if (req.method !== "POST") {
    return jsonResponse({ ok: false, error: "Method not allowed" }, 405);
  }

  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    return jsonResponse({ ok: false, error: "Некорректный запрос" }, 400);
  }

  const honeypot =
    typeof payload.website === "string" ? payload.website.trim() : "";
  if (honeypot.length > 0) {
    return jsonResponse({ ok: true });
  }

  const name =
    typeof payload.name === "string" ? payload.name.trim().slice(0, MAX_NAME) : "";
  const phone =
    typeof payload.phone === "string"
      ? payload.phone.trim().slice(0, MAX_PHONE)
      : "";
  const comment =
    typeof payload.comment === "string"
      ? payload.comment.trim().slice(0, MAX_COMMENT)
      : "";

  if (!name) {
    return jsonResponse({ ok: false, error: "Укажите имя" }, 400);
  }
  if (!phone) {
    return jsonResponse({ ok: false, error: "Укажите телефон" }, 400);
  }

  const token = Deno.env.get("TELEGRAM_BOT_TOKEN");
  const chatId = Deno.env.get("TELEGRAM_CHAT_ID");
  if (!token || !chatId) {
    console.error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID");
    return jsonResponse(
      { ok: false, error: "Сервис временно недоступен" },
      500,
    );
  }

  const text = buildMessage(name, phone, comment);

  const tgRes = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        disable_web_page_preview: true,
      }),
    },
  );

  const tgJson = (await tgRes.json()) as {
    ok?: boolean;
    description?: string;
  };

  if (!tgRes.ok || !tgJson?.ok) {
    console.error("Telegram error:", tgRes.status, tgJson);
    return jsonResponse(
      { ok: false, error: "Не удалось отправить заявку" },
      502,
    );
  }

  return jsonResponse({ ok: true });
});
