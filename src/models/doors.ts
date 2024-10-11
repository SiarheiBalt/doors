import {StaticImageData} from "next/image";

export type Door = {
    serial: string,
    model: string,
    colors: DoorColor[],
    canvasSizes: string[],
    completeness: Completeness[],
    description?: string | undefined
}

export type DoorColor = {
    name: string,
    imgPath: string | StaticImageData,
    description?: string | undefined
}

export enum Completeness {
    usual = "Обычный комплект",
    only = "Только полотно"
}