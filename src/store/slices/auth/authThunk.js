import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';
import { fectchWithoutToken } from "../../../helpers/fetch"



export const startLogin = ( email, password ) => {

    return async( dispatch ) => {

        const data = {
            email,
            password
        }

        console.log(data);

        const response = await fectchWithoutToken( 'auth/signin', data, 'POST' );

        const body = await response.json();

        console.log(body);
        
        if( body.ok ) {


            
        } else {

            Swal.fire({
                title: 'Error',
                text: body.error.msg ?? body.errors.errors.map( error => error.msg ).join(' - '),
                icon: 'error',
                confirmButtonText: 'Cool'
            });
            
        }

    }
    
};