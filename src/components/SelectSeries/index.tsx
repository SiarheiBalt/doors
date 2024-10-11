import React, {FC} from 'react';
import {useAppSelector, useAppDispatch} from "../../lib/hooks";
import {setCurrentSerial} from "../../lib/features/door.slice";

import cs from "classnames";

type Props = {
    series: string[] | null,
    currentSerial: string | undefined
}

const SelectSeries: FC<Props> = ({series, currentSerial}) => {
    const dispatch = useAppDispatch();

    const onHandleClick = (serial: string) => {
        dispatch(setCurrentSerial(serial));
    }

    return (
        <div className={styles.seriesContainer}>
            {series && series.map((serial, i) => {
                const isSelected = currentSerial === serial;
                return <div
                    className={cs(styles.serialContainer, isSelected && styles.currentSerial)}
                    key={i}
                    onClick={() => onHandleClick(serial)}
                >{serial}</div>
            })}
        </div>
    );
};

const styles = {
    seriesContainer: "",
    currentSerial: "bg-gray-100",
    serialContainer: "flex items-center justify-center w-16 h-16 border border-gray-100 cursor-pointer hover:bg-gray-50"
}

export default SelectSeries;