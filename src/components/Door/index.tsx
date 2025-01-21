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
import SelectColor from "../SelectColor/index";
import {setCurrentDoor, setCurrentColor, setColors} from "../../lib/features/door.slice";

import {DoorColor, DoorView, Profile} from "../../models/doors";

import {cl} from "../../classes/global";

type Props = {
    currentDoor: DoorView
    currentSerial: string | undefined,
    currentColor: DoorColor
}

const Door = ({}) => {
    const dispatch = useAppDispatch();
    const {
        currentProfileColor, currentDoor, currentSerial, currentDoorColor, currentGlassColor
    } = useAppSelector((state) => state.doors);

    useEffect(() => {
        if(!currentDoor) dispatch(setCurrentDoor());
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if(currentDoor) {
            dispatch(setColors());
        }

        // eslint-disable-next-line
    }, [currentDoor])

    const onColorSelectColor = (colorType: string, color: DoorColor) => {
        dispatch(setCurrentColor({colorType, color}));
    }


    if(!currentDoor) return null;

    return <>
        <div className="">
                <div className={cl.title + " pb-10 pt-10"}>
                    {currentSerial}
                </div>
                <hr className="pt-10 pb-10"/>
            <div className="flex justify-between">
                <div>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={30}
                        slidesPerView={2}
                        style={{width: 500}}
                        navigation
                        pagination={{clickable: true}}
                        scrollbar={{draggable: true}}
                        // onSlideChange={() => console.log('slide change')}
                        // onSwiper={(swiper) => console.log(swiper)}
                    >
                        {currentDoor && currentDoor.colors.map((image, index) => {
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
                <div>
                    <div className="m-4">
                        <SelectColor colors={currentDoor.colors}
                                     currentColor={currentDoorColor}
                                     colorType="currentDoorColor"
                                     onClick={onColorSelectColor}
                                     text={"Цвет"}
                        />
                    </div>
                    <div className="m-4">
                        {currentDoor.profiles && <SelectColor colors={currentDoor.profiles}
                                                              currentColor={currentProfileColor}
                                                              colorType="currentProfileColor"
                                                              onClick={onColorSelectColor}
                                                              text={"Профиль"}
                        />}
                    </div>
                    <div className="m-4">
                        {currentDoor.glasses && <SelectColor colors={currentDoor.glasses}
                                                             currentColor={currentGlassColor}
                                                             colorType="currentGlassColor"
                                                             onClick={onColorSelectColor}
                                                             text={"Стекло"}
                        />}
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default Door;