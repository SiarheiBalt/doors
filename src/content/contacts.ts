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

/** Подписи к блокам карт (компонент HomeMap). */
export const contactsMapUi = {
  openInGoogleMaps: "Открыть в Google Картах",
} as const;

export enum Shop {
  PREMIUM = 'PREMIUM',
  ORANGE = 'ORANGE',
}
