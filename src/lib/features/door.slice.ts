import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {DoorView} from "../../models/doors";
import {doors} from "../../helpers/test-data-v2";

export interface DoorState {
    currentDoor: DoorView | null,
    series: string[] | null,
    models: string[] | null,
    currentSerial: string | undefined,
    currentModel: string | undefined,
    doors: DoorView[] | null
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
        setCurrentDoor: (state, action: PayloadAction<DoorView | null>) => {
            state.currentDoor = action.payload;
        },
        setSeries: (state, action: PayloadAction<string[] | null>) => {
            state.series = action.payload;
        },
        setCurrentSerial: (state, action: PayloadAction<string>) => {
            state.currentSerial = action.payload;
            if(state.doors) {
                state.models =
                    doors.filter((door: DoorView) => door.serial === state.currentSerial).map(door => door.model);
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
