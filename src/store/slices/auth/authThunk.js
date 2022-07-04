import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';


import { fectchWithoutToken, fectchWithToken } from "../../../helpers/fetch"
import { login, logout } from "./authSlice";


export const checkingLogin = () => {

    return async( dispatch ) => {

        const response = await fectchWithToken('auth/revalidate', 'GET');
        const body = await response.json();

        if( body.ok ) {

            console.log(body);
            
            localStorage.setItem('token', body.token);
            
            dispatch( login(body) );
            
        }else{

            dispatch( logout() );
            
        }
        // else {

        //     const errors = body.errors ?? "";

        //     const error = body.error ?? "";

        //     dispatch( logout() );

        //     Swal.fire({
        //         title   : 'Error',
        //         text    : errors.errors.map(err => err.msg),
        //         icon    : 'error',
        //         confirmButtonText: 'Aceptar'
        //     });

        // }
        
    }

}

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

        } else {

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
    
};