"use client"
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../lib/hooks";
import {setCurrentSerial} from "../../lib/features/door.slice";
import ModelsView from "../../components/ModelsView/index";
import {cl} from "../../classes/global";

const Catalog = () => {
    const {currentSerial, doors} = useAppSelector((state) => state.doors);
    const dispatch = useAppDispatch();

    useEffect(() => {
        currentSerial && dispatch(setCurrentSerial(undefined));
    }, [])

    return (
        <div className="flex">
            <div className="w-80 flex justify-center pt-6 pb-6">
                <span className={cl.title}>Filters</span>
            </div>
            <ModelsView doors={doors} currentSerial={undefined} />
        </div>
    );
};

export default Catalog;