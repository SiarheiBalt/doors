"use client"
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../../../lib/hooks";
import Door from "../../../../../components/Door";
import {useParams} from "next/navigation";
import {setCurrentSerial, setCurrentModel} from "../../../../../lib/features/door.slice";

const Model = () => {
    const {currentSerial, currentModel} = useAppSelector((state) => state.doors);
    const {serial, model} = useParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(!currentSerial) dispatch(setCurrentSerial(serial));
        if(!currentModel) dispatch(setCurrentModel(model));
    }, [serial])

    return (
        <div>
            {(currentModel && currentModel) &&
            <Door />}
        </div>
    );
};

export default Model;