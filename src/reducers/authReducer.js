import { types } from "../types/types"

const initialState = {
    uid: null,
    name: ''
}

export const authReducer = ( state = initialState, action ) => {

    switch( action.type ) {

        case types.authLogin: ({
            ...state,
            uid : action.payload.uid,
            name : action.payload.name
        })

        case types.authLogout: ({ })
        
        default:
            return state
    }
}