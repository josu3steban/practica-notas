import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    checking: false,
    uid: null,
    name: null,
    email: null,
}


export const authSlice = createSlice({

    name: 'auth',
    initialState,
    reducers: {

        login: ( state, action ) => {
            state.uid = action.payload.uid;
            state.name = action.payload.name;
            state.img = action.payload.img;
        },

        logout: ( state ) => {


            
        },

        checking: ( state, action ) => {

            state.checking = action.payload;
            
        }
        
    }
});

export const { login, logout, checking } = authSlice.actions;