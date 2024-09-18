"use client"
import React from 'react';
import {doors} from "../../../helpers/test-data";
import { usePathname } from 'next/navigation';
import { Swiper, SwiperSlide, Navi} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {cl} from "../../../classes/global";

const Page = () => {
    const pathname = usePathname();

    const model = pathname.split("/")[2];
    const modelData = doors.filter((door) => door.name === model)?.[0];

    return (
        <div className={cl.container}>
            <div className="w-1/2 mt-20">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={2}
                    navigation
                    pagination={{clickable: true}}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {modelData.images.map((image, index) => {
                        return <SwiperSlide key={index}>
                            <div className="flex justify-center p-10">
                                <Image
                                    src={image.imgPath}
                                    alt=""
                                    width={200}
                                />
                            </div>
                        </SwiperSlide>
                    })}
                </Swiper>
            </div>
        </div>
    );
};

export default Page;