import React from 'react';
import { connect } from 'react-redux';
import { followActionCreator, setUsersActionCreator, unfollowActionCreator } from '../../Redux/Users-reduser';
import Users from './Users';
let mapStateToProps =(state) => {
    return {
        usersPage: state.usersPage.users
    }
}
let mapDispatchToProps=(dispatch) => {
    return {
       follow:(userId) => {
        dispatch(followActionCreator(userId))
       },
       unfollow:(userId) => {
        dispatch(unfollowActionCreator(userId))
       },
       setUsers:(users) => {
        dispatch(setUsersActionCreator(users))
       },

    }

}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;