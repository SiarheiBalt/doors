import React, {FC} from 'react';
import {useAppSelector, useAppDispatch} from "../../lib/hooks";
import {setCurrentSerial} from "../../lib/features/door.slice";


import {cl} from "../../classes/global";

type Props = {
    series: string[] | null
}

const SelectSeries: FC<Props> = ({series}) => {
    const dispatch = useAppDispatch();

    const onHadleClick = (serial: string) => {
        dispatch(setCurrentSerial(serial));
    }

    return (
        <div className={styles.seriesContainer}>
            {series && series.map((serial, i) => {
                return <div
                    className={styles.serialContainer}
                    key={i}
                    onClick={() => onHadleClick(serial)}
                >{serial}</div>
            })}
        </div>
    );
};

const styles = {
    seriesContainer: "",
    serialContainer: "flex items-center justify-center w-16 h-16 border border-gray-100 cursor-pointer hover:bg-gray-50"
}

export default SelectSeries;