import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {DoorColor, DoorView, Glass, Profile} from "../../models/doors";
import {doors} from "../../helpers/test-data-v2";

export interface DoorState {
    currentDoor: DoorView | null,
    series: string[] | null,
    models: string[] | null,
    currentSerial: string | undefined,
    currentModel: string | undefined,
    currentDoorColor: DoorColor | null,
    currentProfileColor: Profile | null,
    currentGlassColor: Glass | null,
    doors: DoorView[] | null
}

export const initialState: DoorState = {
    currentDoor: null,
    series: ["GR", "PA"],
    models: null,
    currentSerial: undefined,
    currentModel: undefined,
    doors: doors,
    currentDoorColor: null,
    currentProfileColor: null,
    currentGlassColor: null
};

export const doorSlice = createSlice({
    name: 'door',
    initialState,
    reducers: {
        setCurrentDoor: (state) => {
            state.currentDoor = state.doors.find((door) =>
                door.serial === state.currentSerial &&
                door.model === state.currentModel
            ) || null;
        },
        setSeries: (state, action: PayloadAction<string[] | null>) => {
            state.series = action.payload;
        },
        setCurrentSerial: (state, action: PayloadAction<string | undefined>) => {
            state.currentSerial = action.payload;
            if(state.doors) {
                state.models =
                    doors.filter((door: DoorView) => door.serial === state.currentSerial).map(door => door.model);
            }
            state.currentModel = undefined;
        },
        setCurrentModel: (state, action: PayloadAction<string>) => {
            state.currentModel = action.payload;
            state.currentDoor = state.doors.find((door) =>
                door.serial === state.currentSerial &&
                door.model === state.currentModel
            ) || null;
        },
        setCurrentColor: (
            state, action: PayloadAction<{ colorType: string, color: DoorColor }>
        ) => {
            const {colorType, color} = action.payload;
            state[colorType] = color;
        },
        setColors: (state) => {
            if(!state.currentDoor) return;
            state.currentDoorColor = state.currentDoor.colors[0];
            if(state.currentDoor.profiles)
                state.currentProfileColor = state.currentDoor.profiles[0];
            if(state.currentDoor.glasses)
                state.currentGlassColor = state.currentDoor.glasses[0];
        },

    },
});

export const {
    setCurrentDoor,
    setSeries,
    setCurrentSerial,
    setCurrentModel,
    setCurrentColor,
    setColors
} = doorSlice.actions;

export const doorState = (state: DoorState) => state;

export default doorSlice.reducer;
