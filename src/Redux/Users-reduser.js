const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const TOOGLE_IS_FOLLOWING_PROGRESS = 'TOOGLE_IS_FOLLOWING_PROGRESS';
let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true, // крутилка
    followingInProgress: []
}
const usersReduser = (state = initialState, action) => {
    // обработка экшенов
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
                ...state, users: action.users
            };

        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.count
            }
        case TOOGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOOGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ?[...state.followingInProgress, action.userId]
                    :state.followingInProgress.filter(id => id != action.userId)
            }
        // != не равно
        // выше указали тернарное выражение (условие )
        default:
            return state;
    }
}

// Экшен криэйты
export const follow = (userId) => ({
    type: FOLLOW, userId
})
export const unfollow = (userId) => ({
    type: UNFOLLOW, userId
})
export const setUsers = (users) => ({
    type: SET_USERS, users
})
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE, currentPage
})
export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT, count: totalUsersCount
})
export const setIsFatching = (isFetching) => ({
    type: TOOGLE_IS_FETCHING, isFetching
})
export const tooglefollowingInProgress = (isFetching, userId) => ({
    type: TOOGLE_IS_FOLLOWING_PROGRESS, isFetching, userId
})


export default usersReduser;