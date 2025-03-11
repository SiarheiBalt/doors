import React, {ReactElement} from "react";
import cs from "classnames";

import cl from "./button.module.css";

type ButtonProps = {
    label: ReactElement | string;
    handleClick: () => void;
    colorTheme?: string;
    isDisabled?: boolean;
    icon?: ReactElement | undefined;
    isFullWidth?: boolean;
}

export enum Themes {
    primary = "primary",
    secondaryBlack = "secondaryBlack",
    secondaryRed = "secondaryRed"
}

const Button: React.FC<ButtonProps> = ({
                                           label,
                                           handleClick,
                                           colorTheme = Themes.primary,
                                           isDisabled= false,
                                           icon,
                                           isFullWidth = false
                                       }) => {
    const classes: string = cs(cl.container, cl[colorTheme], isDisabled && cl.disabled, isFullWidth && cl.fullWidth);

    return (
        <div className={classes} onClick={() => !isDisabled && handleClick()}>
            {icon && icon}
            {label}
        </div>
    );
};

export default Button;