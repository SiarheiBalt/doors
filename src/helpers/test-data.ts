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
        completeness: Completeness,
        colors: [
            {imgPath: img1, name: "Cream"},
            {imgPath: img2, name: "Black"},
            {imgPath: img3, name: "Yellow"}
        ],
        description: "Some description if needed. It's might be a tooltip. Not required field"
    },
    {
        serial: "GR",
        model: "1.2",
        canvasSizes: ["600x2000", "700x2000"],
        completeness: Completeness,
        colors: [
            {imgPath: img4, name: "Cream"},
            {imgPath: img5, name: "Black"},
            {imgPath: img6, name: "Yellow"}
        ]
    },
    {
        serial: "PA",
        model: "1.3",
        canvasSizes: ["600x2000", "700x2000"],
        completeness: Completeness,
        colors: [
            {imgPath: img7, name: "Cream"},
            {imgPath: img8, name: "Black"},
            {imgPath: img9, name: "Yellow"},
        ]
    },
    {
        serial: "PA",
        model: "1.3",
        canvasSizes: ["600x2000", "700x2000"],
        completeness: Completeness,
        colors: [
            {imgPath: img10, name: "Cream"},
            {imgPath: img11, name: "Black"},
            {imgPath: img12, name: "Yellow"},
        ]
    }
]