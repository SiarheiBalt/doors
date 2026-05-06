export const paths = {
    admin: "admin"
}

const rawPhoneNumber = "+375 29 7854829";
const normalizedPhoneNumber = rawPhoneNumber.replace(/[^\d+]/g, "");

export const contact = {
    phoneNumber: rawPhoneNumber,
    phoneHref: `tel:${normalizedPhoneNumber}`,
};

const showroomAddressLine = "г. Гродно, улица Держинского, 40";

/** Точка на карте и в интерфейсе — салон Profil Doors. */
const showroomMapQuery =
    `Profil Doors, магазин дверей, ${showroomAddressLine}`;

/** Салон на карте (интерактивное встраивание Google Maps, без API-ключа). */
export const showroom = {
    venueName: "Profil Doors",
    addressLine: showroomAddressLine,
    mapEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(
        showroomMapQuery,
    )}&output=embed&hl=ru&z=17`,
} as const;