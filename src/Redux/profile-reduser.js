import { profileAPI, usersAPI } from "../API/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
let initialState = {
    post: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'hi' }
    ],
    newPostText: '',
    profile: null,
    status: ""
}
const profileReduser = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPostText = state.newPostText;
            return {
                ...state,
                newPostText: '',
                post: [...state.message, { id: 5, message: newPostText }]
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            };
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            };
        case SET_USER_STATUS:
            return {
                ...state, status: action.status
            }
        default:
            return state;
    }
}
export const addPost = () => ({
    type: ADD_POST
})
export const updateNewPostText = (text) => ({
    type: UPDATE_NEW_POST_TEXT, text
})
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE, profile
})
export const setStatus = (status) => ({
    type: SET_USER_STATUS, status
})
export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            });
    }
}
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                
                dispatch(setStatus(response.data));
            });
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0)
                {dispatch(setStatus(response.data))};
            });
    }
}
export default profileReduser;