import React, {FC} from 'react';
import Link from 'next/link';
import {cl} from "../../classes/global";

type Props = {}

const Header: FC<Props> = () => {
    return (
        <header className="bg-slate-50 border-b-2 pt-5 pb-5">
            <div className={cl.container}>
                <Link href="/" className="mr-4">Home</Link>
                <Link href="./main" className="mr-4">Main</Link>
            </div>
        </header>
    );
};

export default Header;