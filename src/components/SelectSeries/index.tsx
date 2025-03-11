import React, {FC} from 'react';
import {useAppDispatch} from "../../lib/hooks";
import {setCurrentSerial} from "../../lib/features/door.slice";
import Link from 'next/link';
import cs from "classnames";
import {cl} from "../../classes/global";

export enum Positions {
    top = "top",
    left = "left"
}

type Props = {
    series: string[] | null,
    currentSerial: string | undefined,
    position?: Positions | undefined
}

const SelectSeries: FC<Props> = ({
                                     series,
                                     currentSerial,
                                     position = Positions.top
                                 }) => {
    const dispatch = useAppDispatch();

    const onHandleClick = (serial: string) => {
        dispatch(setCurrentSerial(serial));
    }

    return (
        <div className={styles[position].seriesContainer}>
            {series && series.map((serial, i) => {
                const isSelected = currentSerial === serial;
                return <Link key={i} href={`/catalog/view-door/${serial}`} onClick={() => onHandleClick(serial)}>
                    <div
                        className={cs(styles[position].serialContainer, isSelected && styles[position].currentSerial)}
                        key={i}
                    >{serial}</div>
                </Link>
            })}
        </div>
    );
};

const styles = {
    [Positions.top]: {
        seriesContainer: cl.container + ` flex`,
        currentSerial: "bg-gray-100",
        serialContainer: "flex items-center justify-center w-14 h-14 cursor-pointer hover:bg-gray-50"
    },
    [Positions.left]: {
        seriesContainer: "",
        currentSerial: "bg-gray-100",
        serialContainer: "flex items-center justify-center w-16 h-16 border border-gray-100 cursor-pointer hover:bg-gray-50"
    }
}

export default SelectSeries;