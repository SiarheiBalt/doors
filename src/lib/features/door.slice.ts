import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {DoorColor, DoorColorFieldKey, DoorView, Glass, Profile} from "../../models/doors";
import doors2 from "../../helpers/door-view-data.json";

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
    series: ["P", "PA"],
    models: null,
    currentSerial: undefined,
    currentModel: undefined,
    doors: doors2.views as DoorView[],
    currentDoorColor: null,
    currentProfileColor: null,
    currentGlassColor: null
};

export const doorSlice = createSlice({
    name: 'door',
    initialState,
    reducers: {
        setCurrentDoor: (state) => {
            if (!state.doors) {
                state.currentDoor = null;
                return;
            }
            state.currentDoor = state.doors.find((door) =>
                door.serial === state.currentSerial &&
                door.model === state.currentModel
            ) ?? null;
        },
        setSeries: (state, action: PayloadAction<string[] | null>) => {
            state.series = action.payload;
        },
        setCurrentSerial: (state, action: PayloadAction<string | undefined>) => {
            state.currentSerial = action.payload;
            if(state.doors) {
                state.models = (doors2.views as DoorView[]).filter((door) => door.serial === state.currentSerial).map(door => door.model);
            }
            state.currentModel = undefined;
        },
        setCurrentModel: (state, action: PayloadAction<string>) => {
            state.currentModel = action.payload;
            if (!state.doors) {
                state.currentDoor = null;
                return;
            }
            state.currentDoor = state.doors.find((door) =>
                door.serial === state.currentSerial &&
                door.model === state.currentModel
            ) ?? null;
        },
        setCurrentColor: (
            state, action: PayloadAction<{ colorType: DoorColorFieldKey, color: DoorColor }>
        ) => {
            const {colorType, color} = action.payload;
            if (colorType === 'currentDoorColor') state.currentDoorColor = color;
            else if (colorType === 'currentProfileColor') state.currentProfileColor = color;
            else state.currentGlassColor = color;
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

export default doorSlice.reducer;
