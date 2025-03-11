import React, {useState} from 'react';
import Input from "../../Shared/Input/index";
import FileLoader from "../../FileLoader/index";
import Button from "../../Shared/Button/index";
import CheckBox from "../../Shared/CheckBox/index";

const AddDoorForm = () => {
    const [colorName, setColorName] = useState("");
    const [colorProfileName, setColorProfileName] = useState("");

    const [doorColorImageState, setDoorColorState] = useState<any>(null);
    const [profileColorImageState, setProfileColorImageState] = useState<any>(null);

    const [isProfile, setIsProfile] = useState(false);
    const [isGlasses, setIsGlasses] = useState(false);

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
            <div className="m-4 flex">
                <CheckBox
                    isChecked={isProfile}
                    onCheckboxClickHandle={() => setIsProfile(!isProfile)}
                />
                <label className="ml-2">С профилем</label>
            </div>
            <div className="m-4 flex">
                <CheckBox
                    isChecked={isGlasses}
                    onCheckboxClickHandle={() => setIsGlasses(!isGlasses)}
                />
                <label className="ml-2">Со стеклом</label>
            </div>
            <hr className="m-4"/>
            <div className="m-4">
                <label className="">Название цвета двери</label>
                <Input value={colorName} setValue={setColorName}/>

                {colorName && <div className="w-52">
                    <FileLoader
                        setFileState={setDoorColorState}
                        label={(onClick: () => void) =>
                            doorColorImageState ?
                                <div onClick={onClick} className="cursor-pointer text-orange-400">Заменить картинку</div> :
                                <div onClick={onClick} className="cursor-pointer text-orange-400">Загрузить картинку</div>}
                        onFileLoad={() => {}}
                    />
                    {doorColorImageState ? <img src={doorColorImageState.url} className="" alt=""/> : ""}
                </div>}
            </div>

            {isProfile && <div className="m-4">
                <label className="">Название цвета профиля</label>
                <Input value={colorProfileName} setValue={setColorProfileName}/>

                {colorProfileName && <div className="w-52">
                    <FileLoader
                        setFileState={setProfileColorImageState}
                        label={(onClick: () => void) =>
                            profileColorImageState ?
                                <div onClick={onClick} className="cursor-pointer text-orange-400">Заменить картинку</div> :
                                <div onClick={onClick} className="cursor-pointer text-orange-400">Загрузить картинку</div>}
                        onFileLoad={() => {}}
                    />
                    {profileColorImageState ? <img src={profileColorImageState.url} className="" alt=""/> : ""}
                </div>}
            </div>}

            {doorColorImageState && <Button label="Добавить цвет" handleClick={() => {}} />}
        </div>
    );
};

export default AddDoorForm;