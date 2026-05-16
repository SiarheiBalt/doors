import { getBaseUrl } from "../constants";

export type ContactLeadPayload = {
  name: string;
  phone: string;
  comment?: string;
  /** honeypot: оставить пустым */
  website?: string;
};

type ResponseBody = {
  ok?: boolean;
  error?: string;
};

function getContactTelegramEndpoint(): string {
  const raw = getBaseUrl() + "/api/contact-telegram";
  if (!raw) {
    throw new Error(
      "Не настроен адрес отправки заявок (NEXT_PUBLIC_CONTACT_TELEGRAM_URL).",
    );
  }
  return raw.replace(/\/+$/, "");
}

export async function submitContactLead(payload: ContactLeadPayload) {
  const url = getContactTelegramEndpoint();
  const body = {
    name: payload.name.trim(),
    phone: payload.phone.trim(),
    comment: (payload.comment ?? "").trim(),
    website: payload.website?.trim() ?? "",
  };

  let res: Response;
  try {
    console.log('url', url);
    console.log('body', body);
    res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch {
    throw new Error(
      "Проверьте интернет-соединение и попробуйте ещё раз.",
    );
  }

  const data = (await res.json().catch(() => null)) as ResponseBody | null;

  if (res.status >= 500) {
    throw new Error(
      data?.error ??
        "Сервис временно недоступен. Попробуйте через минуту или позвоните нам.",
    );
  }

  if (!res.ok) {
    const msg =
      data?.error ??
      "Не удалось отправить заявку. Попробуйте ещё раз или напишите в мессенджер.";
    throw new Error(msg);
  }

  if (!data?.ok) {
    throw new Error(data?.error ?? "Не удалось отправить заявку.");
  }
}
