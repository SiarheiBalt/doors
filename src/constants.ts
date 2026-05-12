export const paths = {
    admin: "admin"
}

const rawPhoneNumber = "+375 44 505 40 40";
const normalizedPhoneNumber = rawPhoneNumber.replace(/[^\d+]/g, "");
const waDigits = normalizedPhoneNumber.replace(/\D/g, "");

export const contact = {
    phoneNumber: rawPhoneNumber,
    phoneHref: `tel:${normalizedPhoneNumber}`,
};

/** Режим работы салона (для шапки и подвала). */
export const showroomHours = "ежедневно 10:00 – 20:00";

/** Соцсети — подставьте реальные URL при появлении аккаунтов. */
export const social = {
    telegram: `https://t.me/${waDigits}`,
    whatsapp: `https://wa.me/${waDigits}`,
    instagram: "https://www.instagram.com/profildoors_grodno",
} as const;

/** Построить URL встраивания Google Maps (без API-ключа). */
function mapEmbedUrl(mapQuery: string) {
    return `https://www.google.com/maps?q=${encodeURIComponent(
        mapQuery,
    )}&output=embed&hl=ru&z=17`;
}

/** Ссылка «открыть в Google Картах». */
function mapOpenUrl(mapQuery: string) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        mapQuery,
    )}`;
}

export type ShowroomLocationId = "premium" | "orange";

export type ShowroomLocation = {
    id: ShowroomLocationId;
    badge: string;
    title: string;
    description: string;
    addressLine: string;
    mapQuery: string;
    mapEmbedUrl: string;
    mapOpenUrl: string;
};

const premiumAddress = "г. Гродно, ул. Магистральная, 8";
const orangeAddress = "г. Гродно, ул. Дзержинского, 40";

const premiumMapQuery = `Profil Doors PREMIUM, магазин дверей, ${premiumAddress}`;
const orangeMapQuery = `Profil Doors ORANGE, магазин дверей, ${orangeAddress}`;

/** Два салона: PREMIUM и ORANGE (см. блок «Коллекции» на главной). */
export const showroomLocations: Record<
    ShowroomLocationId,
    ShowroomLocation
> = {
    premium: {
        id: "premium",
        badge: "PREMIUM",
        title: "Салон PREMIUM",
        description:
            "Архитектурные решения для премиального интерьера: скрытые двери, серия AT, перегородки.",
        addressLine: premiumAddress,
        mapQuery: premiumMapQuery,
        mapEmbedUrl: mapEmbedUrl(premiumMapQuery),
        mapOpenUrl: mapOpenUrl(premiumMapQuery),
    },
    orange: {
        id: "orange",
        badge: "ORANGE",
        title: "Салон ORANGE",
        description:
            "Современные двери для уютного дома: актуальный дизайн и выгодное соотношение цена — качество.",
        addressLine: orangeAddress,
        mapQuery: orangeMapQuery,
        mapEmbedUrl: mapEmbedUrl(orangeMapQuery),
        mapOpenUrl: mapOpenUrl(orangeMapQuery),
    },
} as const;