import {LOGIN, LOGOUT} from './../actions/auth'

const initialState = {
    user: '',
    isAuth: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return{
                user: 'inedu joshua',
                isAuth: true
            }
        case LOGOUT:
            return{
                user: '',
                isAuth: false
            }
            default:
                return state;
    }
}