import {CompletenessType, DoorView} from "../models/doors";

export const doors2: DoorView[] = [
    {
        serial: "PA",
        model: "1PA",
        completeness: [
            {
                type: CompletenessType.usual,
                description: "Дверное полотно, коробка и наличники"
            },
            {
                type: CompletenessType.only,
                description: "Дверное полотно, и все"
            },
        ],
        colors: [
            {imgPath: "/door-images/PA/1PA/door-colors/1.png", name: "Белый", hash: "1"},
            {imgPath: "/door-images/PA/1PA/door-colors/2.jpg", name: "Черный", hash: "2"},
        ],
        profiles: [
            {imgPath: "/door-images/PA/1PA/profile-colors/2.jpg", name: "Серебро", hash: "1"},
            {imgPath: "/door-images/PA/1PA/profile-colors/1.jpg", name: "Черный матовый RAL9005", hash: "2"},
        ],
        glasses: null,
        titleImagePath: "/door-images/PA/1PA/result-door-image/1-1.webp",
        description: "Some description if needed. It's might be a tooltip. Not required field"
    },
    {
        serial: "P",
        model: "1.1P",
        completeness: [
            {
                type: CompletenessType.usual,
                description: "Дверное полотно, коробка и наличники"
            },
            {
                type: CompletenessType.only,
                description: "Дверное полотно, и все"
            },
        ],
        colors: [
            {imgPath: "/door-images/P/1.1P/door-colors/1.png", name: "Белый", hash: "1"},
            {imgPath: "/door-images/P/1.1P/door-colors/2.jpg", name: "Черный", hash: "2"},
        ],
        profiles: null,
        glasses: null,
        titleImagePath: "/door-images/P/1.1P/result-door-image/1.webp",
        description: "Some description if needed. It's might be a tooltip. Not required field"
    },
]