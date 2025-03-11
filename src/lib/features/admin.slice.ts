import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {DoorColor, DoorView, Glass, Profile} from "../../models/doors";

export interface AdminState {
    newDoor: {
        serial: string,
        model: string,
        colors: DoorColor[] | null,
        profiles: Profile[] | null,
        glasses: Glass[] | null
    }
}

export const initialState: AdminState = {
    newDoor: {
        serial: "",
        model: "",
        colors: [],
        profiles: [],
        glasses: []
    }
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
    },
});

export const {
    setColor
} = adminSlice.actions;

export const adminState = (state: AdminState) => state;

export default adminSlice.reducer;
