"use client"
import React, {} from 'react';
import SelectSeries, {Positions} from "./../../components/SelectSeries";
import {useAppSelector} from "../../lib/hooks";

import {cl} from "../../classes/global";

function Catalog({
                     children,
                 }: {
    children: React.ReactNode
}) {
    const {series, currentSerial} = useAppSelector((state) => state.doors);

    return <>
        <div className="border-b-2 border-gray-100 pt-16">
            <SelectSeries series={series} currentSerial={currentSerial} position={Positions.top}/>
        </div>
        <div className={cl.container}>
            {children}
        </div>
    </>
}

export default Catalog;
