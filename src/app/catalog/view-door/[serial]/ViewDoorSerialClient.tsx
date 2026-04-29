"use client";
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../../lib/hooks";
import SelectSeries, {Positions} from "../../../../components/SelectSeries";
import SelectModel from "../../../../components/SelectModel";
import ModelsView from "../../../../components/ModelsView";
import {useParams} from "next/navigation";
import {setCurrentSerial} from "../../../../lib/features/door.slice";

import {cl} from "../../../../classes/global";

const ViewDoorSerialClient = () => {
    const {series, currentSerial, currentModel, doors, models} = useAppSelector((state) => state.doors);
    const {serial} = useParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const s = typeof serial === 'string' ? serial : Array.isArray(serial) ? serial[0] : undefined;
        if (s) dispatch(setCurrentSerial(s));
    }, [serial, dispatch])

    return (
        <>
            <div className="flex pt-8 mb-20 flex-col md:flex-row">
                <div className="mr-4">
                    {currentSerial && <SelectSeries series={series} currentSerial={currentSerial} position={Positions.left}/>}

                    <div className="w-80 flex justify-center pt-6 pb-6">
                        <span className={cl.title}>Filters</span>
                    </div>
                </div>

                <div>
                    {models && <div className="mb-4"><SelectModel models={models} currentSerial={currentSerial} currentModel={currentModel}/></div>}
                    {models && <ModelsView
                        doors={doors}
                        currentSerial={currentSerial}
                    />}
                </div>
            </div>
        </>
    );
};

export default ViewDoorSerialClient;
