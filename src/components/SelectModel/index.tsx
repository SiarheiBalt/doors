import React, {FC} from 'react';
import {useAppDispatch} from "../../lib/hooks";
import {setCurrentModel} from "../../lib/features/door.slice";
import cs from "classnames";

type Props = {
    models: string[],
    currentModel: undefined | string
}

const SelectModel: FC<Props> = ({models, currentModel}) => {
    const dispatch = useAppDispatch();

    const onHandleClick = (model: string) => {
        dispatch(setCurrentModel(model));
    }

    return (
        <div className={styles.container}>
            {models.map((model, i) => {
                const isSelected = currentModel && currentModel === model;
                return <div key={i} className={cs(isSelected && styles.currentSerial, styles.modelContainer)} onClick={() => onHandleClick(model)}>
                    <span>{model}</span>
                </div>
            })}
        </div>
    );
};

export default SelectModel;

const styles = {
    container: "flex",
    modelContainer: "flex items-center justify-center flex-wrap w-20 h-16 border border-gray-100 cursor-pointer hover:bg-gray-50",
    currentSerial: "bg-gray-100",
}