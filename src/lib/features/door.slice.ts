import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Door} from "../../models/doors";

export interface WizardState {
    currentDoor: Door | null,
    series: string[] | null,
    currentSerial: string | undefined
}

export const initialState: WizardState = {
    currentDoor: null,
    series: ["GR", "PA"]
};

export const doorSlice = createSlice({
    name: 'door',
    initialState,
    reducers: {
        setCurrentDoor: (state, action: PayloadAction<Door | null>) => {
            state.currentDoor = action.payload;
        },
        setSeries: (state, action: PayloadAction<string[] | null>) => {
            state.series = action.payload;
        },
        setCurrentSerial: (state, action: PayloadAction<string>) => {
            state.currentSerial = action.payload;
        }
    },
});

export const {
    setCurrentDoor,
    setSeries,
    setCurrentSerial
} = doorSlice.actions;

export const doorState = (state: WizardState) => state;

export default doorSlice.reducer;
