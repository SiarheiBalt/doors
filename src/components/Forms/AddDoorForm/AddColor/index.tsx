import React, {FC} from 'react';
import Input from "../../../Shared/Input/index";
import FileLoader from "../../../FileLoader/index";
import Button from "../../../Shared/Button/index";

type Props = {
    labelText: string,
    setNameValue: any,
    nameValue: string,
    setColorImageState: any,
    colorImageState: any,
    onSubmit: any
}

const AddColor: FC<Props> = ({
                                 labelText,
                                 setNameValue,
                                 nameValue,
                                 setColorImageState,
                                 colorImageState,
                                 onSubmit
}) => {
    return (
        <div className="">
            <label className="">{labelText}</label>
            <Input value={nameValue} setValue={setNameValue}/>

            <div className="w-52 mt-4">
                <FileLoader
                    setFileState={setColorImageState}
                    label={(onClick: () => void) =>
                        colorImageState ?
                            <div onClick={onClick} className="cursor-pointer text-orange-400">Заменить картинку</div> :
                            <div onClick={onClick} className="cursor-pointer text-orange-400">Загрузить картинку</div>}
                    onFileLoad={() => {
                    }}
                />
                {colorImageState ? <img src={colorImageState.url} className="" alt=""/> : ""}
            </div>
            {(nameValue && colorImageState) && <div className="mt-4">
                <Button label="Добавить" handleClick={onSubmit} />
            </div>}
        </div>
    );
};

export default AddColor;