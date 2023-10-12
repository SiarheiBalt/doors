import React, {FC} from 'react';

type Props = {}

const Footer: FC<Props> = () => {
    return (
        <footer className="absolute bottom-0 w-full h-24 bg-slate-900" >
            <div className="max-w-5xl container m-auto pt-6">
                <span className="text-slate-100">Copyright © 2023</span>
            </div>
        </footer>
    );
};

export default Footer;