import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {addPost,
    updateNewPostText,
     getUserProfile    
} from '../../Redux/profile-reduser';
import { Navigate, useParams } from 'react-router-dom'; 


class ProfileContainer extends React.Component {
    componentDidMount () {           
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }  
         this.props.getUserProfile(userId);          
    }
    render() {
        
        if (!this.props.isAuth === false)
        return <Navigate to = 'login'/>
        return (
            <Profile {...this.props} profile = {this.props.profile}/>
        )
    }
}
let mapStateToProps = (state) => ({ 
   profile:state.profilePage.profile,
   post:state.profilePage.post,
   newPostText:state.profilePage.newPostText,
   isAuth: state.auth.isAuth   
 
})
let WithUrlDataContainerComponent= withRouter(ProfileContainer);
export function withRouter(Children){
    return(props)=>{
       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }
 
export default connect(mapStateToProps,{
    addPost,updateNewPostText,getUserProfile }) 
    (WithUrlDataContainerComponent);