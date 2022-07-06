import Swal from "sweetalert2";
import { fectchWithToken } from "../../../helpers/fetch"
import { addNewNote, loadNotes } from "./noteSlice";



export const startLoadNotes = () => {

  return async( dispatch ) => {

    const response = await fectchWithToken( 'note', {}, 'GET' );
    console.log('respomnse', response)
    const body     = await response.json();

    

    // console.log(body);
    
    if( body.ok ) {

      dispatch( loadNotes( body.notes ) );
      
    }else {


      
    }
    
  }
  
}


export const startAddNewNote = ( note ) => {

  return async( dispatch ) => {

    const response = await fectchWithToken( 'note', note, 'POST' );
    const body     = await response.json();

    console.log(body);

    if( body.ok ) {

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Nota creada!',
        showConfirmButton: false,
        timer: 1500
      })
      
      
      console.log('ascascascacascacasca', body.newNote)
      
      dispatch( addNewNote( body.newNote ) )
      
    }else {

      const errors = body.errors ?? "";

      const error = body.error ?? "";

      dispatch( logout() );

      Swal.fire({
          title   : 'Error',
          text    : !!errors ? errors.errors.map(err => err.msg) : error.msg,
          icon    : 'error',
          confirmButtonText: 'Aceptar'
      });
      
    }
    
  }
  
}