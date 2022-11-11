import React from 'react';
import Styles from './User.module.css';
import axios from "axios";
import userPhoto from './../../assets/imgs/users-vector-icon-png_260862.jpg';

let Users = (props) => {
    let getUsers = () => {
        if(props.users.length===0) {
   
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>{
           
             props.setUsers(response.data.items);
            });
         }
    }




    return (
        <>
         <button onClick= { getUsers}>Вызов спортсменов</button>
            {props.users.map(u => <div key={u.id}>
               
                <div className={Styles.img}><img src={u.photos.small !=null ? u.photos.small : userPhoto}></img></div>
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