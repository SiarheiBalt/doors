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
import {setCurrentDoor, setCurrentColor} from "../../lib/features/door.slice";

import {DoorColor, DoorView} from "../../models/doors";

import {cl} from "../../classes/global";

const Door = () => {
    const dispatch = useAppDispatch();
    const {doors, currentDoor, currentSerial, currentColor} = useAppSelector((state) => state.doors);

    const pathname = usePathname();

    useEffect(() => {
        dispatch(setCurrentDoor());

        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if(currentDoor) {
            dispatch(setCurrentColor(currentDoor.colors[0]));
        }

        // eslint-disable-next-line
    }, [currentDoor])

    if(!currentDoor) return null;

    console.log(currentColor)

    const colors = currentDoor.colors.map((color: DoorColor, index: number) => {
        const rectSizeClass = "h-12 w-26";
        return <div key={index} className={rectSizeClass + " flex m-1 p-1 hover:outline outline-gray-200"}>
                <Image
                    src={color.imgPath}
                    alt=""
                    className="cursor-pointer"
                />
        </div>
    })


    return (
        <div className="">
                <div className={cl.title + " pb-10 pt-10"}>
                    {currentSerial}
                </div>
                <hr className="pt-10 pb-10"/>
                <div className="flex">
                    <div className={"w-24 flex flex-col items-left justify-center"}>
                        <span className={cl.subTitle}>Цвет</span>
                        <span className="text-sm">добавить</span>
                    </div>
                    {colors}
                </div>

                {/*<Swiper*/}
                {/*    modules={[Navigation, Pagination, Scrollbar, A11y]}*/}
                {/*    spaceBetween={30}*/}
                {/*    slidesPerView={2}*/}
                {/*    navigation*/}
                {/*    pagination={{clickable: true}}*/}
                {/*    scrollbar={{ draggable: true }}*/}
                {/*    // onSlideChange={() => console.log('slide change')}*/}
                {/*    // onSwiper={(swiper) => console.log(swiper)}*/}
                {/*>*/}
                {/*    {currentDoor && currentDoor.colors.map((image, index) => {*/}
                {/*        return <SwiperSlide key={index}>*/}
                {/*            <div className="flex justify-center p-10">*/}
                {/*                <Image*/}
                {/*                    src={image.imgPath}*/}
                {/*                    alt=""*/}
                {/*                    width={200}*/}
                {/*                />*/}
                {/*            </div>*/}
                {/*        </SwiperSlide>*/}
                {/*    })}*/}
                {/*</Swiper>*/}
        </div>
    );
};

export default Door;