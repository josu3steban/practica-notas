import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';


import { fectchWithoutToken } from "../../../helpers/fetch"
import { checking, login } from "./authSlice";



export const startLogin = ( email, password ) => {

    return async( dispatch ) => {

        const data = {
            email,
            password
        }


        const response = await fectchWithoutToken( 'auth/signin', data, 'POST' );

        const body = await response.json();

        
        if( body.ok ) {


            console.log(body);

            localStorage.setItem('token', body.token);

            dispatch( login( body.user ) );

            dispatch( checking( "checked" ) );

            
        } else {

            const errors = body.errors ?? "";

            const error = body.error ?? "";


            Swal.fire({
                title   : 'Error',
                text    : !!errors ? errors.errors.map(err => err.msg) : error.msg,
                icon    : 'error',
                confirmButtonText: 'Aceptar'
            });

            dispatch( checking( "not-checked" ) );
            
        }

    }
    
};