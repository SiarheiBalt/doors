import React, {FC, ReactElement, useRef} from 'react';

import cl from './FileLoader.module.css';

type File = {
    file: any,
    fileText: string,
    url: string
}

type Props = {
    label: (onClick: () => void) => ReactElement,
    setFileState: (file: File) => void
}

export const getFileExtension = (fileName: string) => {
    return fileName.split('.').pop()?.toLowerCase();
}

const FileLoader: FC<Props> = ({label, setFileState}) => {

    const fileInputRef = useRef<HTMLInputElement>(null);

    const onFileLoadAsync = (file: any) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.onload = async (e) => {
                e.target && resolve(e.target.result)
            }
            reader.onerror = async (e) => {
                reject(reader.error)
            }
            reader.readAsText(file)
        })
    }


    const onInputFileChange = async (evt: any) => {
        evt.preventDefault()
        const targetFile = evt.target.files[0]

        if (targetFile) {
            const fileName = targetFile.name;
            const fileExtension = getFileExtension(fileName);

            if (!['svg', 'png', 'jpg'].includes(fileExtension as string)) {
                alert('Only svg, png or jpg type');
                targetFile.value = '';
            } else {
                onFileLoadAsync(targetFile).then((text) => {
                    const result = {
                        file: targetFile,
                        fileText: text as string,
                        url: URL.createObjectURL(evt.target.files[0])
                    }
                    setFileState(result)
                })
            }
        }
    }
    const onOpenFile = () => fileInputRef.current && fileInputRef.current.click();

    return (
        <>

            {label(onOpenFile)}
            <input
                ref={fileInputRef}
                className={cl.file}
                type='file'
                value={undefined}
                onChange={onInputFileChange}
                accept="'svg', 'png', 'jpg'"
            />
        </>
    );
};

export default FileLoader;