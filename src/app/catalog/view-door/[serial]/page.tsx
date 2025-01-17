"use client"
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../../lib/hooks";
import SelectSeries from "../../../../components/SelectSeries";
import SelectModel from "../../../../components/SelectModel";
import Door from "../../../../components/Door";
import ModelsView from "../../../../components/ModelsView";
import {useParams} from "next/navigation";
import {setCurrentSerial} from "../../../../lib/features/door.slice";

import {cl} from "../../../../classes/global";

const Page = () => {
    const {series, currentSerial, currentModel, doors, models} = useAppSelector((state) => state.doors);
    const {serial} = useParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        serial && dispatch(setCurrentSerial(serial));
    }, [serial])

    return (
        <>
            <div className="flex pt-8 mb-20 flex-col md:flex-row">
                <div className="mr-4">
                    {currentSerial && <SelectSeries series={series} currentSerial={currentSerial || series[0]} position="left"/>}

                    <div className="w-80 flex justify-center pt-6 pb-6">
                        <span className={cl.title}>Filters</span>
                    </div>
                </div>

                <div>
                    {models && <div className="mb-4"><SelectModel models={models} currentSerial={currentSerial} currentModel={currentModel}/></div>}
                    {models && <ModelsView
                        doors={doors}
                        currentSerial={currentSerial}
                        currentModel={currentModel}
                    />}
                </div>
            </div>
        </>
    );
};

export default Page;