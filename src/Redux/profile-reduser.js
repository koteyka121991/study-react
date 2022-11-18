import { usersAPI } from "../API/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
let initialState = {
    post: [
        { id: 1, message:'hi'},
        { id: 2, message:'hi'}
    ],
    newPostText: '',
    profile: null
}
const profileReduser = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPostText = state.newPostText;
          return {...state,  
            newPostText: '',
            post: [...state.message, { id: 5, message: newPostText }]
            };
        case UPDATE_NEW_POST_TEXT:
            return {...state,
                newPostText: action.text    
            };  
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            };
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

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
        .then(response => {             
            dispatch(setUserProfile(response.data));       
        });
    }
}

export default profileReduser;