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

function Catalog(props) {
    const {series, currentSerial} = useAppSelector((state) => state.doors);

    return <>
        <div className="border-b-2 border-gray-100">
            <SelectSeries series={series} currentSerial={currentSerial} position="top"/>
        </div>
        <div className={cl.container}>
            {props.children}
        </div>
    </>
}

export default Catalog;
