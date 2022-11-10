const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
let initialState = {
    users: [
        // { id: 1, userImg: "https://sun7-6.userapi.com/s/v1/ig2/Vaj-A5kx1xpLB75bys_fpiUKZ5C3g-yNrsotFy7zNIu00ORpsNItZG-NJhFdgC2XkbNq5vrVs4m6m23CwqZcuLTq.jpg?size=50x50&quality=95&crop=129,987,1539,1539&ava=1",
        //  followed: false, name: "Мария", status: "On-line ", city: "Волжский", age: 27 },
        // { id: 2, userImg: "https://sun7-6.userapi.com/s/v1/ig2/Vaj-A5kx1xpLB75bys_fpiUKZ5C3g-yNrsotFy7zNIu00ORpsNItZG-NJhFdgC2XkbNq5vrVs4m6m23CwqZcuLTq.jpg?size=50x50&quality=95&crop=129,987,1539,1539&ava=1",
        //     followed: false, name: "Олег", status: "Of-line ", city: "Волжский", age: 30 }
    ]
}
const usersReduser = (state = initialState, action) => {

    switch (action.type) {
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            };
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            };
       
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}
export const followActionCreator = (userId) => ({
    type: FOLLOW, userId
})
export const unfollowActionCreator = (userId) => ({
    type: UNFOLLOW, userId
})

export const setUsersActionCreator = (users) => ({
    type: SET_USERS, users
})
export default usersReduser;