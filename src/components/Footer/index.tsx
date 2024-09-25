"use client"
import React, {FC} from 'react';
import {usePathname} from "next/navigation";
import {paths} from "../../constants";

import {cl} from "../../classes/global";
import cs from "classnames";

type Props = {}

const Footer: FC<Props> = () => {
    const pathname = usePathname();

    if(pathname === `/${paths.admin}`) return null;
    return (
        <footer className="fixed  bottom-0 w-full bg-slate-900" >
            <div className={cs(cl.container, "pt-5 pb-5")}>
                <span className="text-slate-100">Copyright © 2024</span>
            </div>
        </footer>
    );
};

export default Footer;