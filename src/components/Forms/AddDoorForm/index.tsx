import React, {useRef, useState} from 'react';
import Input from "../../Shared/Input/index";
import Button from "../../Shared/Button/index";
import Modal from "../../Shared/Modal/index";
import AddColor from "./AddColor/index";

const AddDoorForm = () => {
    const [serialValue, setSerialValue] = useState("");
    const [modelValue, setModelValue] = useState("");

    const contextForm = useRef<any>(null);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const oneHandleSubmit = (data: any) => {
        console.log(data);
        setIsModalOpen(false);
    }

    const openModal = (contextName: string) => {

        const formData = {
            color: {
                title: "Цвет двери",
                contextName,
                submit: oneHandleSubmit
            },
            profile: {
                title: "Цвет профиля",
                contextName,
                submit: oneHandleSubmit
            },
            glass: {
                title: "Цвет стекла",
                contextName,
                submit: oneHandleSubmit
            }
        }
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
            <hr className="m-4"/>
            <div className="m-4">
                <Button label="Добавить цвет двери" handleClick={() => openModal("color")}/>
            </div>
            <div className="m-4">
                <Button label="Добавить цвет профиля" handleClick={() => openModal("profile")}/>
            </div>
            <div className="m-4">
                <Button label="Добавить стекло" handleClick={() => openModal("glass")}/>
            </div>

            {isModalOpen &&
            <Modal content={contextForm.current || null}
                   title="Форма"
                   onClose={() => setIsModalOpen(false)}
                   isCloseOutside={false}
            />}

        </div>
    );
};

export default AddDoorForm;