import { configureStore } from "@reduxjs/toolkit"
import { authReducer } from "../reducers/authReducer";
import { noteReducer } from "../reducers/noteReducer";
import { uiReducer } from "../reducers/uiReducer";


const reducers = {
    auth: authReducer,
    ui  : uiReducer,
    note: noteReducer
}

export const store = configureStore({
    reducer : reducers
});