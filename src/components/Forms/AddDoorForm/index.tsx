import React, {useRef, useState} from 'react';
import Input from "../../Shared/Input/index";
import Button from "../../Shared/Button/index";
import Modal from "../../Shared/Modal/index";
import AddColor from "./AddColor/index";
import {useAppSelector, useAppDispatch} from "../../../lib/hooks";
import {setColor} from "../../../lib/features/admin.slice";
import AddDoorTable from "./AddDoorTable/index";

const AddDoorForm = () => {
    const {newDoor} = useAppSelector((state) => state.admin);
    const {colors: doorColors} = newDoor;
    const dispatch = useAppDispatch();

    const [serialValue, setSerialValue] = useState("");
    const [modelValue, setModelValue] = useState("");

    const contextForm = useRef<any>(null);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const oneHandleSubmit = (data: any) => {
        let {imageState} = data;
        imageState = imageState.url;
        dispatch(setColor({...data, imageState}));
        setIsModalOpen(false);
    }

    const openModal = (contextName: string) => {

        const formData = {
            colors: {
                title: "Цвет двери",
                contextName,
                submit: oneHandleSubmit
            },
            profiles: {
                title: "Цвет профиля",
                contextName,
                submit: oneHandleSubmit
            },
            glasses: {
                title: "Цвет стекла",
                contextName,
                submit: oneHandleSubmit
            }
        }
        //@ts-ignore
        const {title, submit, contextName: context} = formData[contextName];
        contextForm.current = <>
            <AddColor labelText={title}
                      contextName={context}
                      onSubmit={submit}
            />
        </>;
        setIsModalOpen(true);
    }

    return (
        <div className="">
            <div className="m-4">
                <label className="">Серия</label>
                <Input value={serialValue} setValue={setSerialValue}/>
            </div>
            <div className="m-4">
                <label className="">Модель</label>
                <Input value={modelValue} setValue={setModelValue}/>
            </div>

            <div className="flex">
                {(serialValue && modelValue) && <>
                    <div className="m-4">
                        <Button label="Добавить цвет двери" handleClick={() => openModal("colors")}/>
                    </div>
                    {!!doorColors?.length && <>
                        <div className="m-4">
                            <Button label="Добавить цвет профиля" handleClick={() => openModal("profiles")}/>
                        </div>
                        <div className="m-4">
                            <Button label="Добавить стекло" handleClick={() => openModal("glasses")}/>
                        </div>
                    </>}
                </>}
            </div>

            {isModalOpen &&
            <Modal content={contextForm.current || null}
                   title="Форма"
                   onClose={() => setIsModalOpen(false)}
                   isCloseOutside={false}
            />}
            <AddDoorTable newDoor={newDoor}/>

        </div>
    );
};

export default AddDoorForm;