"use client"
import React from 'react';
import {doors} from "../../../helpers/test-data";
import { usePathname } from 'next/navigation';
import {Swiper, SwiperSlide} from 'swiper/react';
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
    const series = doors.filter((door) => door.serial.toLowerCase() === model)?.[0];

    return (
        <div className={cl.container}>
            <div className="w-4/5 md:w-1/2 mt-20">
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
                    {series && series.colors.map((image, index) => {
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