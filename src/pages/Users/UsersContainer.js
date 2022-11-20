import React from 'react';
import { connect } from 'react-redux';
import {
    follow, unfollow, getUsers
} from '../../Redux/Users-reduser';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import { Navigate } from 'react-router-dom';
import { WithRedirectComponent } from '../../HOC/withAuthRedurect';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        // this.props.setIsFatching(true);
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.setIsFatching(false);
        //     this.props.setUsers(data.items);
        //     this.props.setTotalUsersCount(data.totalCount);
        // });
        
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);

        // this.props.setCurrentPage(pageNumber);
        // this.props.setIsFatching(true);
        // usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //     this.props.setUsers(data.items);
        //     this.props.setIsFatching(false);
        // });
    }


    render() {      
        return <> {this.props.isFetching ? <Preloader /> : null}    
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}                
                followingInProgress={this.props.followingInProgress}
                /* тут находятся пропсы которые мы отправляем в презенстационую компоненту */
            />
        </>
    }
}
let withRedirect = WithRedirectComponent(UsersContainer); 

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
     
    }
}

export default connect(mapStateToProps, {
    follow,unfollow, getUsers
})(withRedirect);



// это контейнерная компонента выносим сюда всю грязную работу