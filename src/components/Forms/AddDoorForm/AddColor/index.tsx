import React, {FC, useState} from 'react';
import Input from "../../../Shared/Input/index";
import FileLoader from "../../../FileLoader/index";
import Button from "../../../Shared/Button/index";

type Props = {
    labelText: string,
    onSubmit: any,
    contextName: string
}

const AddColor: FC<Props> = ({
                                 labelText,
                                 onSubmit,
                                 contextName
}) => {
    const [text, setText] = useState("");
    const [imageState, setImageState] = useState("");

    const onHandleSubmit = () => {
        onSubmit({
            text,
            imageState,
            contextName
        });
    }

    return (
        <div className="">
            <label className="">{labelText}</label>
            <Input value={text} setValue={setText}/>

            <div className="w-52 mt-4">
                <FileLoader
                    setFileState={setImageState}
                    label={(onClick: () => void) =>
                        imageState ?
                            <div onClick={onClick} className="cursor-pointer text-orange-400">Заменить картинку</div> :
                            <div onClick={onClick} className="cursor-pointer text-orange-400">Загрузить картинку</div>}
                    onFileLoad={() => {
                    }}
                />
                {imageState ? <img src={imageState.url} className="" alt=""/> : ""}
            </div>
            {(text && imageState) && <div className="mt-4">
                <Button label="Добавить" handleClick={onHandleSubmit} />
            </div>}
        </div>
    );
};

export default AddColor;