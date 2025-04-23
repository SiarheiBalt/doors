import {StaticImageData} from "next/image";

export type DoorView = {
    serial: string,
    model: string,
    completeness: Completeness[],
    colors: DoorColor[],
    profiles: Profile[] | null,
    glasses?: Glass[] | null,
    description?: string | undefined,
    titleImagePath: any
}

export type Profile = {
    name: string,
    imgPath: string | StaticImageData,
    hash: string
}

export type Glass = {
    name: string,
    imgPath: string | StaticImageData,
    hash: string
}

export type DoorColor = {
    name: string,
    imgPath: string | StaticImageData,
    hash: string
}

export type Completeness = {
    type: CompletenessType,
    description: string
}

export enum CompletenessType {
    usual = "Обычный комплект",
    only = "Только полотно"
}