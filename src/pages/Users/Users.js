import React from 'react';
import userPhoto from './../../assets/imgs/users-vector-icon-png_260862.jpg';
import Styles from './User.module.css';


let Users =(props) => {
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
                    onClick={() => {props.onPageChanged(p); }}>{p}</span>
            })}
        </div>
        {props.users.map(u => <div key={u.id}>

            <div className={Styles.img}><img src={u.photos.small != null ? u.photos.small : userPhoto}></img></div>
          
            <div>{u.name}</div>
            <div>{u.status}</div>
            <div>{u.city}</div>
            <div>{u.age}</div>
            <div>{u.followed
                ? <button onClick={() => { props.unfollow(u.id) }}>unfollow</button>
                : <button onClick={() => { props.follow(u.id) }}>follow</button>

            }
            </div>

        </div>)}
    </>
    )
}
export default Users;