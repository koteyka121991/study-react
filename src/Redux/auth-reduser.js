import { authAPI } from "../API/api";

const SET_USER_DATE = 'SET_USER_DATE';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}
const authReduser = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATE:

            return {
                ...state,
                ...action.data,
                isAuth: true
            };

        default:
            return state;
    }
}
export const setAuthUserData = (userId,
    email, login) => ({
        type: SET_USER_DATE, data: {
            userId,
            email, login
        }
    })


export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                let { id, email, login } = response.data.data;
                dispatch(setAuthUserData(id,
                    email, login));
            }
        });
    }
}


export default authReduser;