import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import {addPost,
    updateNewPostText,
    setUserProfile
    
} from '../../Redux/profile-reduser';
import { useParams } from 'react-router-dom'; 

class ProfileContainer extends React.Component {
    componentDidMount () {   

        
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
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
let WithUrlDataContainerComponent= withRouter(ProfileContainer);
export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }
 
export default connect(mapStateToProps,{
    addPost,
    updateNewPostText,
    setUserProfile }) 
    (WithUrlDataContainerComponent);