import { configureStore } from '@reduxjs/toolkit'
import {doorSlice} from "./features/door.slice";
import {adminSlice} from "./features/admin.slice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            doors: doorSlice.reducer,
            admin: adminSlice.reducer
        },
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']