import React from 'react';
import Styles from './User.module.css';
import axios from "axios";
import userPhoto from './../../assets/imgs/users-vector-icon-png_260862.jpg';

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}`).then(response => {
            this.props.setUsers(response.data.items);
            
        });
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <>

                <div className={Styles.pagination}>
                    {pages.map(p => {
                        return <span className={this.props.currentPage === p && Styles.paginationActive}
                            onClick={() => { this.onPageChanged(p) }}>{p}</span>
                    })}
                </div>
                {this.props.users.map(u => <div key={u.id}>

                    <div className={Styles.img}><img src={u.photos.small != null ? u.photos.small : userPhoto}></img></div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    <div>{u.city}</div>
                    <div>{u.age}</div>
                    <div>{u.followed
                        ? <button onClick={() => { this.props.unfollow(u.id) }}>unfollow</button>
                        : <button onClick={() => { this.props.follow(u.id) }}>follow</button>

                    }
                    </div>

                </div>)}
            </>
        )
    }
}


export default Users;