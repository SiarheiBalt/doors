import {cl} from "../../classes/global";
import {doors} from "../../helpers/test-data";
import Image from "next/image";
import Link from 'next/link'

import cs from "classnames";

export default function Catalog() {
    const doorsTest = doors.concat(doors)

    return  <div className={cl.container}>
        <div className="flex pt-8 mb-20 flex-col md:flex-row">
            <div className="mr-4">
                <div className="w-80 flex justify-center pt-6 pb-6">
                    <span className={cl.title}>Filters</span>
                </div>
            </div>

            <div className="flex flex-wrap">
                {doorsTest.map((door, index) => {

                    return <div key={index} className="border border-gray-100" style={{height: 523, width: 235}}>
                        <Link href={`door/${door.name}`}>
                            <div className="pt-8 pb-8 flex justify-center cursor-pointer hover:bg-gray-50">
                                <Image height={280}
                                       width={120}
                                       src={door.images[0].imgPath}
                                       alt=""
                                       style={{width: "auto", height: "auto"}}
                                />
                            </div>
                        </Link>
                        <div className="flex flex-col items-center justify-center pt-2 border-t border-gray-100">
                            <span>1.1P</span>
                            <span className={cs(cl.subTitle, "p-2")}>999 руб.</span>
                            <button
                                className={cl.buttons.outline}
                                type="button">
                                <span className="font-normal">В КОРЗИНУ</span>
                            </button>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>
}