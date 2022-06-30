import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    checking: "not-checked", //not-checked, checking, checked
    uid: null,
    name: null,
    email: null,
}


export const authSlice = createSlice({

    name: 'auth',

    initialState,

    reducers: {

        checking: ( state, action ) => {

            state.checking = action.payload;
            
        },

        login: ( state, action ) => {

            state.uid = action.payload.uid;
            state.name = action.payload.name,
            state.email = action.payload.email;
            state.img = action.payload.img ?? "";

        },

        logout: ( state ) => {


            
        },

        checking: ( state, action ) => {

            state.checking = action.payload;
            
        }
        
    }
});

export const { login, logout, checking } = authSlice.actions;