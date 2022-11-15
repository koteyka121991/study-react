import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import {addPost,
    updateNewPostText,
    setUserProfile
    
} from '../../Redux/profile-reduser';

class ProfileContainer extends React.Component {
    componentDidMount () {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
        .then(response => {             
            this.props.setUserProfile(response.data);       
        });
    }
    render() {
        return (
            <Profile {...this.props} profile = {this.props.profile}/>
        )
    }
}
let mapStateToProps = (state) => ({ 
   profile:state.profilePage.profile,
   post:state.profilePage.post,
   newPostText:state.profilePage.newPostText
 
})

export default connect(mapStateToProps,{
    addPost,
    updateNewPostText,
    setUserProfile }) 
    (ProfileContainer);