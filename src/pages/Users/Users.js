import React from 'react';
import Styles from './User.module.css';
let Users = (props) => {
    return (
        <>
            {props.usersPage.map(u => <div key={u.id}>
                <div className={Styles.img}><img src={u.userImg}></img></div>
                <div>{u.name}</div>
                <div>{u.status}</div>
                <div>{u.city}</div>
                <div>{u.age}</div>
                <div>{u.followed
                ?<button onClick={() => { props.unfollow(u.id) }}>unfollow</button>
               :<button onClick={() => { props.follow(u.id) }}>follow</button>
                
                    }
                    </div>

            </div>)}
        </>
    )

}
export default Users;