import { createSlice } from "@reduxjs/toolkit"



const initialState = {
  notes: [],
  activeNote: null
}


export const noteSlice = createSlice({

  name: 'note',

  initialState,

  reducers: {

    setActiveNote: ( state, action ) => {

      state.activeNote = action.payload;
      
    },

    addNewNote: ( state, action ) => {

      state.notes = action.payload;
      
    },

    updateNote: ( state, action ) => {

      state.notes = action.payload.map( note => ( !note.id === state.activeNote ) ?? action.payload );

      state.activeNote = null;
      
    },

    deleteNote: ( state, action ) => {

      state.notes = action.payload.filter( note => note.id !== state.activeNote );

      state.activeNote = null;
      
    },

    loadNotes: ( state, action ) => {

      state.notes = action.payload;
      
    }
    
  }

});

export const { setActiveNote, addNewNote,updateNote, deleteNote, loadNotes } = noteSlice.actions;