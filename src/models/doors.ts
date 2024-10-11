export type Door = {
    serial: string,
    model: string,
    colors: DoorColor[],
    canvasSizes: string[],
    completeness?: Completeness | undefined,
    description?: string | undefined
}

export type DoorColor = {
    name: string,
    imgPath: string,
    description?: string | undefined
}

export enum Completeness {
    usual = "Обычный комплект",
    only = "Только полотно"
}