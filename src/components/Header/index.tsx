import React, {FC} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import icon from '../../../public/pr-logo.png';
import {cl} from "../../classes/global";

type Props = {}

const Header: FC<Props> = () => {
    return (
        <header className="bg-slate-50 border-b-2 pt-5 pb-5">
            <div className={cl.container}>
                <div className="m-auto flex justify-start items-center">
                    <Link href="/" className="mr-4">
                        <Image
                            src={icon}
                            width={122}
                            height={300}
                            alt="Picture of the author" />
                    </Link>
                    <Link href="/" className="mr-4">Home</Link>
                    <Link href="./main" className="mr-4">Main</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;