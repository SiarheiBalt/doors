import React, {FC, useEffect} from 'react';
import {DoorColor} from "../../models/doors";
import Image from "next/image";
import {cl} from "../../classes/global";

type Props = {
    colors: DoorColor[],
    currentColor: DoorColor | null,
    colorType: string,
    onClick: (colorType: string, color: DoorColor) => void
    text: string
}

const SelectColor: FC<Props> = (
    {colors, currentColor, onClick, colorType, text}
) => {

    return <div className="flex">

        <div className={"w-24 flex flex-col items-left justify-center"}>
            <span className={cl.subTitle}>{text}</span>
            <span className="text-sm text-slate-500">{currentColor?.name || ""}</span>
        </div>
        <div className="flex">
            {
                colors.map((color: DoorColor, index: number) => {

                    const rectSizeClass = "h-12 w-26";
                    const isSelected = color.name === currentColor?.name;

                    return <div key={index}
                                className={rectSizeClass + ` flex m-1 p-1 hover:outline outline-gray-200 ${isSelected ? "outline outline-gray-300" : ""}` }
                                onClick={() => onClick(colorType, color)}
                    >
                        <Image
                            src={color.imgPath}
                            alt=""
                            className="cursor-pointer"
                        />
                    </div>
                })
            }
        </div>
    </div>;
};

export default SelectColor;