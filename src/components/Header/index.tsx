import React, {FC} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import icon from '../../../public/logo.png';
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
                            style={{ width: "auto", height: "auto" }}
                            alt="Picture of the author" />
                    </Link>
                    <Link href="/" className="mr-4 ml-8">Home</Link>
                    <Link href="../catalog" className="mr-4">Catalog</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;