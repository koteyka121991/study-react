import React from 'react';
import userPhoto from './../../assets/imgs/users-vector-icon-png_260862.jpg';
import Styles from './User.module.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    } 
    
 
    return (
        <>
            <div className={Styles.pagination}>
                {pages.map(p => {
                    return <span className={props.currentPage === p && Styles.paginationActive}
                        onClick={() => { props.onPageChanged(p); }}>{p}</span>
                })}
            </div>
            {props.users.map(u => <div key={u.id}>

                <div className={Styles.img}><NavLink to={'/profile/' + u.id}><img src={u.photos.small != null ? u.photos.small : userPhoto}></img></NavLink></div>

                <div>{u.name}</div>
                <div>{u.status}</div>
                <div>{u.city}</div>
                <div>{u.age}</div>

                <div>{u.followed
                    ? <button onClick={() => {
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                            withCredentials: true,
                            headers: {
                                "API-KEY": "5905da2b-6481-40f8-a674-105c423438e0"
                            }
                        })
                            .then(response => {
                                if (response.data.resultCode == 0) { props.unfollow(u.id) }
                            });
                    }}>unfollow</button>
                    : <button onClick={() => {
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{}, 
                        {
                            withCredentials: true,
                            headers: {
                                "API-KEY": "5905da2b-6481-40f8-a674-105c423438e0"
                            }
                        })
                            .then(response => {
                                if (response.data.resultCode == 0) { props.follow(u.id) }
                            });
                    }}>follow</button>

                }
                </div>

            </div>)}
        </>
    )
}
export default Users;