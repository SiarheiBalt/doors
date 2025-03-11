import React, {FC} from 'react';
import CheckedIcon from "./images/checked.svg";

import cl from "./checkbox.module.css";

type Props = {
    isChecked: boolean,
    onCheckboxClickHandle: (evt: React.MouseEvent) => void
}

const CheckBox: FC<Props> = ({isChecked, onCheckboxClickHandle}) => {
    return (
        <div className={cl.checkbox} onClick={onCheckboxClickHandle}>
            {isChecked && <img src={CheckedIcon.src} alt="alt" /> }
        </div>
    );
};

export default CheckBox;