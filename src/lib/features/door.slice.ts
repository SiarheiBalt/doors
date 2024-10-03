import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Door} from "../../models/doors";

export interface WizardState {
    currentDoor: Door | null,
}

export const initialState: WizardState = {
    currentDoor: null,
};

export const doorSlice = createSlice({
    name: 'door',
    initialState,
    reducers: {
        setCurrentDoor: (state, action: PayloadAction<Door | null>) => {
            state.currentDoor = action.payload;
        },
    },
});

export const {
    setCurrentDoor
} = doorSlice.actions;

export const doorState = (state: WizardState) => state;

export default doorSlice.reducer;
