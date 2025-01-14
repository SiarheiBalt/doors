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
import {Completeness, Door} from "../models/doors";

export const doors: Door[] = [
    {
        serial: "GR",
        model: "1.2",
        canvasSizes: ["600x2000", "700x2000"],
        completeness: [
            {
                types: Completeness.usual,
                description: "Дверное полотно, коробка и наличники"
            },
            {
                types: Completeness.only,
                description: "Дверное полотно, и все"
            },
        ],
        colors: [
            {imgPath: img1, name: "Cream", hash: "1"},
            {imgPath: img2, name: "Black", hash: "2"},
            {imgPath: img3, name: "Yellow", hash: "3"}
        ],
        profiles: [
            {imgPath: "", name: "Серебро", hash: "1"},
            {imgPath: "", name: "Черный матовый RAL9005", hash: "2"},
        ],
        glasses: [
            {imgPath: "", name: "Cream", hash: "1"},
            {imgPath: "", name: "Black", hash: "2"}
        ],

        description: "Some description if needed. It's might be a tooltip. Not required field"
    },
    {
        serial: "GR",
        model: "1.3",
        canvasSizes: ["600x2000", "700x2000"],
        completeness: [
            {
                types: Completeness.usual,
                description: "Дверное полотно, коробка и наличники"
            },
            {
                types: Completeness.only,
                description: "Дверное полотно, и все"
            },
        ],
        colors: [
            {imgPath: img4, name: "Cream", hash: "1"},
            {imgPath: img5, name: "Black", hash: "2"},
            {imgPath: img6, name: "Yellow", hash: "3"}
        ],
        profiles: [
            {imgPath: "", name: "Серебро", hash: "1"},
            {imgPath: "", name: "Черный матовый RAL9005", hash: "2"},
        ],
        glasses: [
            {imgPath: "", name: "Cream", hash: "1"},
            {imgPath: "", name: "Black", hash: "2"}
        ],
    },
    {
        serial: "PA",
        model: "1.4",
        canvasSizes: ["600x2000", "700x2000"],
        completeness: [
            {
                types: Completeness.usual,
                description: "Дверное полотно, коробка и наличники"
            },
            {
                types: Completeness.only,
                description: "Дверное полотно, и все"
            },
        ],
        colors: [
            {imgPath: img7, name: "Cream", hash: "1"},
            {imgPath: img8, name: "Black", hash: "2"},
            {imgPath: img9, name: "Yellow", hash: "3"},
        ],
        profiles: [
            {imgPath: "", name: "Серебро", hash: "1"},
            {imgPath: "", name: "Черный матовый RAL9005", hash: "2"},
        ],
    },
    {
        serial: "PA",
        model: "1.5",
        canvasSizes: ["600x2000", "700x2000"],
        completeness: [
            {
                types: Completeness.usual,
                description: "Дверное полотно, коробка и наличники"
            },
            {
                types: Completeness.only,
                description: "Дверное полотно, и все"
            },
        ],
        colors: [
            {imgPath: img10, name: "Cream", hash: "1"},
            {imgPath: img11, name: "Black", hash: "2"},
            {imgPath: img12, name: "Yellow", hash: "3"},
        ],
        profiles: [
            {imgPath: "", name: "Серебро", hash: "1"},
            {imgPath: "", name: "Черный матовый RAL9005", hash: "2"},
        ],
    }
]