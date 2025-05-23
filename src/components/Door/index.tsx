"use client"
import React, {useEffect, useState, useRef} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {useAppDispatch, useAppSelector} from "../../lib/hooks";
import SelectColor from "../SelectColor/index";
import {setCurrentDoor, setCurrentColor, setColors} from "../../lib/features/door.slice";
import testDoorImages2 from "../../helpers/door-imajes-data.json";
import Button from "../Shared/Button";
import cs from "classnames";

import {DoorColor} from "../../models/doors";

import {cl} from "../../classes/global";

const Door = ({}) => {
    const dispatch = useAppDispatch();
    const {
        currentProfileColor, currentDoor, currentSerial, currentDoorColor, currentGlassColor, currentModel
    } = useAppSelector((state) => state.doors);

    const [swiperRef, setSwiperRef] = useState(null);

    // @ts-ignore
    const doorImages = useRef(testDoorImages2[currentSerial][currentDoor.model]).current;

    useEffect(() => {
        if(!currentDoorColor) return;

        let path = currentDoorColor.hash;

        path +=
            `-${currentDoor?.profiles && currentProfileColor ? currentProfileColor?.hash : "0"}`;

        path +=
            `-${currentDoor?.glasses && currentGlassColor ? currentGlassColor.hash : "0"}`;

        console.log(path)
        if(path) {
            const index = Object.keys(doorImages?.images || {}).findIndex(hash => hash == path);
            if(swiperRef) {
                console.log(index)
                //@ts-ignore
                swiperRef.slideTo(index, 0);
            }
        }
    }, [currentDoorColor, currentGlassColor, currentProfileColor])

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
        <div className="mb-8 flex">
                <div className={cs(cl.title, "pb-10 pt-10")}>
                    {currentSerial}
                </div>
                <hr className="pt-10 pb-10"/>
            <div className="flex justify-start">
                <div>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
                        spaceBetween={30}
                        slidesPerView={1}
                        effect={'fade'}
                        style={{width: 500}}
                        navigation
                        pagination={{clickable: true}}
                        scrollbar={{draggable: true}}
                        /*@ts-ignore*/
                        onSwiper={setSwiperRef}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {doorImages && Object.entries(doorImages.images)
                            .map((image, index) => {
                                const [hash, path] = image;

                                return <SwiperSlide key={hash} virtualIndex={index}>
                                    <div className="flex justify-center p-10">
                                        <Image
                                            src={path as string}
                                            alt=""
                                            width={200}
                                            height={500}
                                        />
                                    </div>
                                </SwiperSlide>
                            })}
                    </Swiper>
                </div>
                <div>
                    <div className="m-4 mt-6">
                        {currentModel}
                    </div>
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
                    <div className="m-4 flex">
                        <span className={cs(cl.subTitle, "mr-4")}>400 p.</span>
                        <Button label="ДОБАВИТЬ В КОРЗИНУ" handleClick={() => {}}/>
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default Door;