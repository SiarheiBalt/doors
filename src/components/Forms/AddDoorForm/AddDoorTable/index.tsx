import React, {FC} from 'react';
import {ColumnsType, DefaultRecordType} from 'rc-table/lib/interface';
import TableRepositories from "../../../Shared/TableRepositories/index";
import {NewDoor} from "../../../../lib/features/admin.slice";
import FileLoader from "../../../FileLoader/index";
import {useAppDispatch} from "../../../../lib/hooks";
import {setImageData} from "../../../../lib/features/admin.slice";

type Props = {
    newDoor: NewDoor
}

type TableRow = {

}

const AddDoorTable: FC<Props> = ({newDoor}) => {
    const {colors, profiles, glasses, images} = newDoor;
    const dispatch = useAppDispatch();

    const onSetResultImage = (data: any) => {
        dispatch(setImageData(data))
    }

    const data = colors?.length && colors.reduce((acc: any, doorColor: any) => {
         if(!profiles?.length && glasses?.length) {
             glasses.forEach((glass: any) => {
                 acc.push({doorColor, glass, image: null})
             })
         } else if(profiles?.length && glasses?.length) {
            profiles.forEach((profileColor: any) => {
                glasses.forEach((glass: any) => {
                    acc.push({doorColor, profileColor, glass, image: null})
                })
            })
        } else if(profiles?.length) {
            profiles.forEach((profileColor: any) => {

                acc.push({doorColor, profileColor, image: null})
            })
        } else {
            acc.push({doorColor, image: null})
        }
        return acc;
    }, [])

    const columns: ColumnsType<DefaultRecordType> = [
        {
            title: 'Сочетания цветов',
            dataIndex: 'doorColor',
            key: 'doorColor',
            width: "70%",
            className: "p-4",
            render: (text: string, record: any) => {
                const {doorColor, profileColor, glass} = record;
                return <div className="text-black">
                    {<span className="p-1 bg-cyan-200"><b>Цвет двери: </b> {doorColor.name}</span>}
                    {profileColor && <span className="p-1 ml-1 bg-blue-200"><b>Цвет профиля: </b> {profileColor.name}</span>}
                    {glass && <span className="p-1 ml-1 bg-pink-200"><b>Стекло: </b> {glass.name}</span>}
                </div>;
            }
        }, {
            title: 'Загрузка изображения',
            dataIndex: 'profileColor',
            key: 'profileColor',
            width: "30%",
            render: (text: string, record: any) => {
                const {doorColor, profileColor, glass} = record;
                const hash = doorColor.hash + (profileColor && profileColor.hash || "") + (glass && glass.hash || "");
                const imgData = images.find((value) => value.hash === hash);

                return <p className="flex">
                    <FileLoader
                        setFileState={(state) => onSetResultImage({hash, imageData: state})}
                        label={(onClick: () => void) =>
                            imgData ?
                                <div onClick={onClick} className="cursor-pointer text-green-600">Заменить картинку</div> :
                                <div onClick={onClick} className="cursor-pointer text-black">Загрузить картинку</div>
                        }
                    />
                    {imgData ? <img src={imgData.imageData?.url} className="h-10 w-5 ml-2" alt="" /> : ""}
                </p>
            }
        }
    ]

    return (
        <TableRepositories columns={columns} data={data} customClass="m2-10" />
    );
};

export default AddDoorTable;