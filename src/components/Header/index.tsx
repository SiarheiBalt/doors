import React, {FC} from 'react';
import Link from 'next/link';

type Props = {}

const Header: FC<Props> = () => {
    return (
        <header className="bg-slate-50 border-b-2 pt-5 pb-5">
            <div className="max-w-5xl container m-auto">
                <Link href="/" className="mr-4">Home</Link>
                <Link href="./main" className="mr-4">Main</Link>
            </div>
        </header>
    );
};

export default Header;