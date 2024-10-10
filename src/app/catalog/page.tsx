"use client"
import React, {useEffect} from 'react';
import Image from "next/image";
import Link from 'next/link';
import SelectSeries from "./../../components/SelectSeries";
import StoreProvider from "../../providers/StoreProvider";
import {useAppSelector} from "../../lib/hooks";
import SelectModel from "../../components/SelectModel/index";

import {cl} from "../../classes/global";
import cs from "classnames";

function Catalog() {
    const {series, models, currentSerial, doors, currentModel} = useAppSelector((state) => state.doors);

    return  <div className={cl.container}>
        <div className="flex pt-8 mb-20 flex-col md:flex-row">
            <div className="mr-4">
                <SelectSeries series={series} currentSerial={currentSerial}/>

                <div className="w-80 flex justify-center pt-6 pb-6">
                    <span className={cl.title}>Filters</span>
                </div>
            </div>

            <div>
                {models && <div className="mb-4"><SelectModel models={models} currentModel={currentModel}/></div>}
                <div className="flex flex-wrap">
                    {doors.map((door, index) => {
                        if((currentSerial && door.serial !== currentSerial) ||
                            (currentModel && door.model !== currentModel)) return null;

                        return <div key={index} className="border border-gray-100" style={{height: 523, width: 235}}>
                            <Link href={`door/${door.serial.toLowerCase()}`}>
                                <div className="pt-8 pb-8 flex justify-center cursor-pointer hover:bg-gray-50">
                                    <Image height={280}
                                           width={120}
                                           src={door.colors[0].imgPath}
                                           alt=""
                                           style={{width: "auto", height: "auto"}}
                                    />
                                </div>
                            </Link>
                            <div className="flex flex-col items-center justify-center pt-2 border-t border-gray-100">
                                <span>1.1P</span>
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
            </div>
        </div>
    </div>
}

const Page = () => {
    return <StoreProvider>
        <Catalog />
    </StoreProvider>;
}

export default Page;
