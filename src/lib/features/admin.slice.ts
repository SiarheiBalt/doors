import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {DoorColor, DoorView, Glass, Profile} from "../../models/doors";

export interface AdminState {}

export const initialState: AdminState = {
};

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setSeries: (state, action: PayloadAction<string[] | null>) => {
            state.series = action.payload;
        },
    },
});

export const {

} = adminSlice.actions;

export const adminState = (state: AdminState) => state;

export default adminSlice.reducer;
