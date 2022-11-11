import React from 'react';
import Styles from './User.module.css';
import axios from "axios";
import userPhoto from './../../assets/imgs/users-vector-icon-png_260862.jpg';

class Users extends React.Component {
    constructor(props) {
        super(props);
alert("New");

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {

            this.props.setUsers(response.data.items);
        });

    }

    render() {
        return (
            <>

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