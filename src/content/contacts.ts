/** Тексты страницы контактов. */

export const contactsMeta = {
  title: "Контакты — Profil Doors, Гродно",
  description:
    "Два салона в Гродно: PREMIUM (ул. Магистральная, 8) и ORANGE (ул. Дзержинского, 40). Телефон, режим работы и карты.",
} as const;

export const contactsPage = {
  kicker: "Profil Doors · Гродно",
  title: "Контакты",
  intro: {
    before:
      "Два шоурума — коллекции ",
    premium: "PREMIUM",
    mid: " и ",
    orange: "ORANGE",
    after:
      ". Звоните или пишите — подберём решение и запишем на консультацию.",
  },
  maps: {
    kicker: "Как добраться",
    heading: "Салоны на карте",
    lead: "Выберите удобную локацию — к каждому адресу приложена интерактивная карта.",
  },
} as const;

/** Модальная форма «Записаться в салон» (Edge → Telegram). */
export const contactLeadModal = {
  title: "Записаться в салон",
  lead: "Оставьте контакты — перезвоним и согласуем удобное время визита или консультации.",
  fields: {
    name: "Имя",
    phone: "Телефон",
    comment: "Комментарий",
  },
  placeholders: {
    name: "Как к вам обращаться",
    phone: "+375 (__) ___-__-__",
    comment:
      "Например: удобное время звонка, вопрос по коллекции или адресу салона…",
  },
  submit: "Отправить заявку",
  submitting: "Отправляем…",
  successTitle: "Заявка отправлена",
  successMessage:
    "Спасибо! Мы свяжемся с вами в ближайшее время. Если срочно — позвоните по телефону салона.",
  close: "Закрыть",
  errorPrefix: "Не получилось отправить:",
  tryLater: "Попробуйте позже."
} as const;

/** Подписи к блокам карт (компонент HomeMap). */
export const contactsMapUi = {
  openInGoogleMaps: "Открыть в Google Картах",
} as const;

export enum Shop {
  PREMIUM = 'PREMIUM',
  ORANGE = 'ORANGE',
}
