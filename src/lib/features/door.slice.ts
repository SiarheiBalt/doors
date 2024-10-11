import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Door} from "../../models/doors";
import {doors} from "../../helpers/test-data";

export interface DoorState {
    currentDoor: Door | null,
    series: string[] | null,
    models: string[] | null,
    currentSerial: string | undefined,
    currentModel: string | undefined,
    doors: Door[] | null
}

export const initialState: DoorState = {
    currentDoor: null,
    series: ["GR", "PA"],
    models: null,
    currentSerial: undefined,
    currentModel: undefined,
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
            if(state.doors) {
                state.models =
                    doors.filter((door: Door) => door.serial === state.currentSerial).map(door => door.model);
            }
            state.currentModel = undefined;
        },
        setCurrentModel: (state, action: PayloadAction<string>) => {
            state.currentModel = action.payload;
        }

    },
});

export const {
    setCurrentDoor,
    setSeries,
    setCurrentSerial,
    setCurrentModel
} = doorSlice.actions;

export const doorState = (state: DoorState) => state;

export default doorSlice.reducer;
