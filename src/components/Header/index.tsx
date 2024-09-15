import React, {FC} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import icon from '../../../public/pr-logo.png';

type Props = {}

const Header: FC<Props> = () => {
    return (
        <header className="bg-slate-50 border-b-2 pt-5 pb-5">
            <div className="max-w-5xl container m-auto flex justify-start items-center">
                <Link href="/" className="mr-4">
                    <Image
                        src={icon}
                        width={122}
                        height={300}
                        alt="Picture of the author" />
                </Link>
                <Link href="./catalog" className="mr-4 ml-16">КАТАЛОГ</Link>
                <Link href="./location" className="mr-4">ГДЕ КУПИТЬ</Link>
            </div>
        </header>
    );
};

export default Header;