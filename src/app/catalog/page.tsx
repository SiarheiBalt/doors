"use client"
import React, {useEffect} from 'react';
import {usePathname} from 'next/navigation';
import {useAppDispatch, useAppSelector} from "../../lib/hooks";
import {setCurrentSerial} from "../../lib/features/door.slice";
import ModelsView from "../../components/ModelsView/index";
import {cl} from "../../classes/global";

const Catalog = () => {
    const {doors} = useAppSelector((state) => state.doors);
    const dispatch = useAppDispatch();
    const pathname = usePathname();

    useEffect(() => {
        const onCatalogRoot = pathname === '/catalog' || pathname === '/catalog/';
        if (onCatalogRoot) dispatch(setCurrentSerial(undefined));
    }, [pathname, dispatch])

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