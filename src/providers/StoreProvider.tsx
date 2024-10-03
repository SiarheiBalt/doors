'use client'
import {useRef} from 'react';
import {Provider} from 'react-redux';
import {makeStore, AppStore} from '../lib/store';
import {setCurrentDoor} from "../lib/features/door.slice";

export default function StoreProvider({
                                          children
                                      }: {
    children: React.ReactNode
}) {
    const storeRef = useRef<AppStore>()
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore();
        //@ts-ignore
        storeRef.current && storeRef.current?.dispatch(setCurrentDoor(storeRef.current,null));
    }

    return <Provider store={storeRef.current}>{children}</Provider>
}