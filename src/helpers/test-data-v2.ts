import img1 from "/public/test-doors-images/125ZN_ABS_Грувд_зеркало.jpg";
import img2 from "/public/test-doors-images/125ZN_ABS_Грувд_лак_белый.jpg";
import img3 from "/public/test-doors-images/125ZN_ABS_Грувд_лак_классик.jpg";
import img4 from "/public/test-doors-images/125ZN_ABS_Монблан_зеркало.jpg";
import img5 from "/public/test-doors-images/125ZN_ABS_Монблан_лак_белый.jpg";
import img6 from "/public/test-doors-images/125ZN_ABS_Монблан_лак_классик.jpg";
import img7 from "/public/test-doors-images/125ZN_ABS_Салинас_светлый_зеркало.jpg";
import img8 from "/public/test-doors-images/125ZN_ABS_Салинас_светлый_лак_белый.jpg";
import img9 from "/public/test-doors-images/125ZN_ABS_Салинас_светлый_лак_коричневый.jpg";
import img10 from "/public/test-doors-images/125ZN_ABS_Стоун_зеркало.jpg";
import img11 from "/public/test-doors-images/125ZN_ABS_Стоун_лак_белый.jpg";
import img12 from "/public/test-doors-images/125ZN_ABS_Стоун_лак_классик.jpg";
import {CompletenessType, DoorView} from "../models/doors";

import cream from "/public/door-rect/cream.jpg";
import black from "/public/door-rect/black.jpg";
import yellow from "/public/door-rect/yellow.jpg";

export const doors: DoorView[] = [
    {
        serial: "GR",
        model: "1.2",
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
            {imgPath: cream, name: "Cream", hash: "1"},
            {imgPath: black, name: "Black", hash: "2"},
            {imgPath: yellow, name: "Yellow", hash: "3"}
        ],
        profiles: [
            {imgPath: cream, name: "Серебро", hash: "1"},
            {imgPath: black, name: "Черный матовый RAL9005", hash: "2"},
        ],
        glasses: [
            {imgPath: cream, name: "Cream", hash: "1"},
            {imgPath: black, name: "Black", hash: "2"}
        ],

        description: "Some description if needed. It's might be a tooltip. Not required field"
    },
    {
        serial: "GR",
        model: "1.3",
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
            {imgPath: cream, name: "Cream", hash: "1"},
            {imgPath: black, name: "Black", hash: "2"},
            {imgPath: yellow, name: "Yellow", hash: "3"}
        ],
        profiles: [
            {imgPath: cream, name: "Серебро", hash: "1"},
            {imgPath: black, name: "Черный матовый RAL9005", hash: "2"},
        ],
        glasses: [
            {imgPath: cream, name: "Cream", hash: "1"},
            {imgPath: black, name: "Black", hash: "2"}
        ],
    },
    {
        serial: "PA",
        model: "1.4",
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
            {imgPath: cream, name: "Cream", hash: "1"},
            {imgPath: black, name: "Black", hash: "2"},
            {imgPath: yellow, name: "Yellow", hash: "3"},
        ],
        profiles: [
            {imgPath: cream, name: "Серебро", hash: "1"},
            {imgPath: black, name: "Черный матовый RAL9005", hash: "2"},
        ],
    },
    {
        serial: "PA",
        model: "1.5",
        canvasSizes: ["600x2000", "700x2000"],
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
            {imgPath: cream, name: "Cream", hash: "1"},
            {imgPath: black, name: "Black", hash: "2"},
            {imgPath: yellow, name: "Yellow", hash: "3"},
        ],
        profiles: [
            {imgPath: cream, name: "Серебро", hash: "1"},
            {imgPath: black, name: "Черный матовый RAL9005", hash: "2"},
        ],
    }
]