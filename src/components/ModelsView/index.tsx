"use client"
import React, {FC} from 'react';
import Link from "next/link";
import Image from "next/image";
import cs from "classnames";
import {cl} from "../../classes/global";
import {DoorView} from "../../models/doors";

type Props = {
    doors: DoorView[],
    currentSerial: string
}

const ModelsView: FC<Props> = ({doors, currentSerial}) => {

   return  <div className="flex flex-wrap">
       {doors && doors.map((door, index) => {
           if (currentSerial && door.serial !== currentSerial) return null;

           return <div key={index} className="border border-gray-100"
                       style={{height: 523, width: 235}}>
               <Link href={`${currentSerial}/${door.model}`}>
                   <div className="pt-8 pb-8 flex justify-center cursor-pointer hover:bg-gray-50">
                       <Image height={280}
                              width={120}
                              src={door.colors[0].imgPath}
                              alt=""
                              style={{width: "auto", height: "auto"}}
                       />
                   </div>
               </Link>
               <div
                   className="flex flex-col items-center justify-center pt-2 border-t border-gray-100">
                   <span>{door.model}</span>
                   <span className={cs(cl.subTitle, "p-2")}>999 руб.</span>
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