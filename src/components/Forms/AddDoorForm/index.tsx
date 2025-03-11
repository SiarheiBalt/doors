import React, {useState} from 'react';
import Input from "../../Shared/Input/index";
import FileLoader from "../../FileLoader/index";
import Button from "../../Shared/Button/index";
import CheckBox from "../../Shared/CheckBox/index";
import Modal from "../../Shared/Modal/index";
import AddColor from "./AddColor/index";

const AddDoorForm = () => {
    const [colorName, setColorName] = useState("");
    const [colorProfileName, setColorProfileName] = useState("");

    const [doorColorImageState, setDoorColorState] = useState<any>(null);
    const [profileColorImageState, setProfileColorImageState] = useState<any>(null);

    const [isProfile, setIsProfile] = useState(false);
    const [isGlasses, setIsGlasses] = useState(false);

    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

    const addProfileHandleClick = () => {

    }

    return (
        <div className="">
            <div className="m-4">
                <label className="">Серия</label>
                <Input value={""} setValue={() => {}}/>
            </div>
            <div className="m-4">
                <label className="">Модель</label>
                <Input value={""} setValue={() => {}}/>
            </div>
            {/*<div className="m-4 flex">*/}
            {/*    <CheckBox*/}
            {/*        isChecked={isProfile}*/}
            {/*        onCheckboxClickHandle={() => setIsProfile(!isProfile)}*/}
            {/*    />*/}
            {/*    <label className="ml-2">С профилем</label>*/}
            {/*</div>*/}
            {/*<div className="m-4 flex">*/}
            {/*    <CheckBox*/}
            {/*        isChecked={isGlasses}*/}
            {/*        onCheckboxClickHandle={() => setIsGlasses(!isGlasses)}*/}
            {/*    />*/}
            {/*    <label className="ml-2">Со стеклом</label>*/}
            {/*</div>*/}
            <hr className="m-4"/>
            {/*<div className="m-4">*/}
            {/*    <label className="">Название цвета двери</label>*/}
            {/*    <Input value={colorName} setValue={setColorName}/>*/}

            {/*    {colorName && <div className="w-52">*/}
            {/*        <FileLoader*/}
            {/*            setFileState={setDoorColorState}*/}
            {/*            label={(onClick: () => void) =>*/}
            {/*                doorColorImageState ?*/}
            {/*                    <div onClick={onClick} className="cursor-pointer text-orange-400">Заменить картинку</div> :*/}
            {/*                    <div onClick={onClick} className="cursor-pointer text-orange-400">Загрузить картинку</div>}*/}
            {/*            onFileLoad={() => {}}*/}
            {/*        />*/}
            {/*        {doorColorImageState ? <img src={doorColorImageState.url} className="" alt=""/> : ""}*/}
            {/*    </div>}*/}
            {/*</div>*/}

            {isProfile && <div className="m-4">
                <Button label="Добавить профиль" handleClick={() => setIsProfileModalOpen(true)} />
            </div>}

            {doorColorImageState && <Button label="Добавить цвет" handleClick={() => {}} />}

            {isProfileModalOpen &&
            <Modal content={
                <AddColor
                    labelText="Название цвета профиля"
                    setNameValue={setColorProfileName}
                    nameValue={colorProfileName}
                    setColorImageState={setProfileColorImageState}
                    colorImageState={profileColorImageState}
                    onSubmit={addProfileHandleClick}
                />
            }
                   title="Форма"
                   onClose={() => setIsProfileModalOpen(false)}
            />}

        </div>
    );
};

export default AddDoorForm;