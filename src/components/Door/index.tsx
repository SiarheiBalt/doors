"use client"
import React, {useEffect} from 'react';
import { usePathname } from 'next/navigation';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {useAppDispatch, useAppSelector} from "../../lib/hooks";
import {setCurrentDoor} from "../../lib/features/door.slice";
import StoreProvider from "../../providers/StoreProvider";

import {DoorView} from "../../models/doors";

import {cl} from "../../classes/global";

const Door = () => {
    const dispatch = useAppDispatch();
    const {doors} = useAppSelector((state) => state.doors);
    const pathname = usePathname();

    useEffect(() => {
        const model = pathname.split("/")[2];
        const series = doors && doors.filter((door) => door.serial.toLowerCase() === model)?.[0];
        if(series) {
            dispatch(setCurrentDoor(series));
        }
        // eslint-disable-next-line
    }, [])

    const model = pathname.split("/")[2];
    const currentSerialDoor: DoorView | null = doors ? doors.filter((door) => door.serial.toLowerCase() === model)?.[0] : null;

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
                    {currentSerialDoor && currentSerialDoor.colors.map((image, index) => {
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

const Index = () => {
    return <StoreProvider>
        <Door />
    </StoreProvider>;
}

export default Index;