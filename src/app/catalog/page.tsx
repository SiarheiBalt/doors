"use client"
import React, {} from 'react';
import Door from "./../../components/Door";
import Image from "next/image";
import Link from 'next/link';
import SelectSeries from "./../../components/SelectSeries";
import ModelsView from "./../../components/ModelsView";
import StoreProvider from "../../providers/StoreProvider";
import {useAppSelector} from "../../lib/hooks";
import SelectModel from "../../components/SelectModel/index";

import {cl} from "../../classes/global";
import cs from "classnames";

function Catalog() {
    const {series, models, currentSerial, doors, currentModel, currentDoor} = useAppSelector((state) => state.doors);
    console.log(currentDoor)
    return <>
        <div className="border-b-2 border-gray-100">
            <SelectSeries series={series} currentSerial={currentSerial} position="top"/>
        </div>
        <div className={cl.container}>
            <div className="flex pt-8 mb-20 flex-col md:flex-row">
                <div className="mr-4">
                    {currentSerial && <SelectSeries series={series} currentSerial={currentSerial} position="left"/>}

                    <div className="w-80 flex justify-center pt-6 pb-6">
                        <span className={cl.title}>Filters</span>
                    </div>
                </div>

                <div>
                    {models && <div className="mb-4"><SelectModel models={models} currentModel={currentModel}/></div>}
                    {
                        (currentSerial && !currentModel) ?
                            <ModelsView doors={doors} currentSerial={currentSerial} /> :
                            <div>{currentModel}</div>
                    }
                    {currentModel && <Door />}
                </div>
            </div>
        </div>
    </>
}

const Page = () => {
    return <StoreProvider>
        <Catalog />
    </StoreProvider>;
}

export default Page;
