import React from 'react';
import { connect } from 'react-redux';
import {
    followActionCreator, setCurrentPageActionCreator,
    setIsFatchingActionCreator, setTotalUsersCountActionCreator,
    setUsersActionCreator, unfollowActionCreator
} from '../../Redux/Users-reduser';
import axios from 'axios';
import Users from './Users';
import eclipse from './../../assets/imgs/Eclipse.svg';
import Preloader from '../common/preloader/Preloader';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toogleIsFatching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toogleIsFatching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }
    // onPageChanged = (pageNumber) => {
    //     this.props.setCurrentPage(pageNumber);
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
    //         this.props.setUsers(response.data.items);
    //     });
    // чтобы взять из пропсов 
    // }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toogleIsFatching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.toogleIsFatching(false);
        });
    }
    render() {
        return <> {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageActionCreator(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountActionCreator(totalCount))
        },
        toogleIsFatching: (isFetching) => {
            dispatch(setIsFatchingActionCreator(isFetching))
        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

