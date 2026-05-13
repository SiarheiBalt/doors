import {
  FunctionsFetchError,
  FunctionsHttpError,
  FunctionsRelayError,
} from "@supabase/functions-js";

import { getBrowserSupabase } from "../supabase/browser";

export type ContactLeadPayload = {
  name: string;
  phone: string;
  comment?: string;
  /** honeypot: оставить пустым */
  website?: string;
};

type InvokeBody = {
  ok?: boolean;
  error?: string;
};

export async function submitContactLead(payload: ContactLeadPayload) {
  const supabase = getBrowserSupabase();
  const body = {
    name: payload.name.trim(),
    phone: payload.phone.trim(),
    comment: (payload.comment ?? "").trim(),
    website: payload.website?.trim() ?? "",
  };

  const { data, error } = await supabase.functions.invoke<InvokeBody>(
    "contact-telegram",
    { body },
  );

  if (error instanceof FunctionsFetchError) {
    throw new Error(
      "Проверьте интернет-соединение и попробуйте ещё раз.",
    );
  }

  if (error instanceof FunctionsRelayError) {
    throw new Error(
      "Сервис временно недоступен. Попробуйте через минуту или позвоните нам.",
    );
  }

  if (error instanceof FunctionsHttpError) {
    const parsed = await error.context.json().catch(() => null) as {
      error?: string;
      ok?: boolean;
    } | null;
    const msg =
      parsed?.error ??
      "Не удалось отправить заявку. Попробуйте ещё раз или напишите в мессенджер.";
    throw new Error(msg);
  }

  if (error) {
    throw new Error(
      error instanceof Error ? error.message : "Ошибка сети при отправке заявки.",
    );
  }

  if (!data?.ok) {
    throw new Error(
      data?.error ?? "Не удалось отправить заявку.",
    );
  }
}
