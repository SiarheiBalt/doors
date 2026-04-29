"use client";
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../../../lib/hooks";
import Door from "../../../../../components/Door";
import {useParams} from "next/navigation";
import {setCurrentSerial, setCurrentModel} from "../../../../../lib/features/door.slice";

const ViewDoorModelClient = () => {
    const {currentSerial, currentModel} = useAppSelector((state) => state.doors);
    const {serial, model} = useParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const s = typeof serial === 'string' ? serial : Array.isArray(serial) ? serial[0] : undefined;
        const m = typeof model === 'string' ? model : Array.isArray(model) ? model[0] : undefined;
        if (!currentSerial && s) dispatch(setCurrentSerial(s));
        if (!currentModel && m) dispatch(setCurrentModel(m));
    }, [serial, model, currentSerial, currentModel, dispatch])

    return (
        <div>
            {(currentModel && currentModel) &&
            <Door />}
        </div>
    );
};

export default ViewDoorModelClient;
