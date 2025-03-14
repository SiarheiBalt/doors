import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {DoorColor, DoorView, Glass, Profile} from "../../models/doors";

export interface NewDoor {
    serial: string,
    model: string,
    colors: DoorColor[],
    profiles: Profile[],
    glasses: Glass[],
    images: [{hash: string, imageData: any}]
}

export interface AdminState {
    newDoor: NewDoor
}

export const newDoor = {
    serial: "",
    model: "",
    colors: [],
    profiles: [],
    glasses: [],
    images: []
}

export const initialState: AdminState = {
    newDoor: newDoor as unknown as NewDoor
};

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setColor: (state, action: PayloadAction<{contextName: string, name: string, imageState: any}>) => {
            const {contextName, name, imageState} = action.payload;
            if(contextName in state.newDoor) {
                //@ts-ignore
                state.newDoor[contextName].push({
                    imgPath: imageState,
                    name,
                    hash: Math.random().toString()
                });
            }
        },
        setImageData: (state, action: PayloadAction<{hash: string, imageData: any}>) => {
            const {hash, imageData} = action.payload;
            state.newDoor.images.push({hash, imageData});
        }
    },
});

export const {
    setColor,
    setImageData
} = adminSlice.actions;

export const adminState = (state: AdminState) => state;

export default adminSlice.reducer;
