"use client"
import React, {FC} from 'react';
import Link from "next/link";
import Image from "next/image";
import cs from "classnames";
import {cl} from "../../classes/global";
import {DoorView} from "../../models/doors";

type Props = {
    doors: DoorView[] | null,
    currentSerial: string | undefined
}

const ModelsView: FC<Props> = ({doors, currentSerial}) => {

   return  <div className="flex items-center justify-center flex-wrap gap-2 pt-4">
       {doors && doors.map((door, index) => {
           if (currentSerial && door.serial !== currentSerial) return null;

           return <div key={index} className="flex flex-col justify-center items-center w-52 pb-6 p-2 rounded-lg">
               <Link href={`/catalog/view-door/${door.serial}/${door.model}`}>
                   <div className="pt-2 pb-2 flex justify-center cursor-pointer">
                       <Image height={280}
                              width={120}
                              src={door.titleImagePath}
                              alt=""
                              style={{width: "auto", height: "auto"}}
                       />
                   </div>
               </Link>
               <div
                   className="flex flex-col items-center justify-center">
                   <span>{door.model}</span>
                   <span className={cs(cl.subTitle, "p-2")}>990 руб.</span>
                   <button
                       className={cl.buttons.outline}
                       type="button">
                       <span className="font-normal">В КОРЗИНУ</span>
                   </button>
               </div>
           </div>
       })}
   </div>
};

export default ModelsView;