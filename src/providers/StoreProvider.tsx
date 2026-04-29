'use client'
import {useMemo} from 'react';
import {Provider} from 'react-redux';
import {makeStore} from '../lib/store';
import {setCurrentDoor} from "../lib/features/door.slice";

export default function StoreProvider({
                                          children
                                      }: {
    children: React.ReactNode
}) {
    const store = useMemo(() => {
        const s = makeStore();
        // @ts-expect-error initial door state
        s.dispatch(setCurrentDoor(null));
        return s;
    }, []);

    return <Provider store={store}>{children}</Provider>
}