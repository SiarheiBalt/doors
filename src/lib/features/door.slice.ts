import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Door} from "../../models/doors";
import {doors} from "../../helpers/test-data";

export interface DoorState {
    currentDoor: Door | null,
    series: string[] | null,
    currentSerial: string | undefined,
    doors: Door[] | null
}

export const initialState: DoorState = {
    currentDoor: null,
    series: ["GR", "PA"],
    currentSerial: undefined,
    doors: doors
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
