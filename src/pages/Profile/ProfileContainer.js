import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import {addPost,
    updateNewPostText,
    getUserProfile, getStatus, updateStatus   
} from '../../Redux/profile-reduser';
import {  useParams } from 'react-router-dom'; 
import { WithRedirectComponent } from '../../HOC/withAuthRedurect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount () {   
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 26722;
        }            
            this.props.getUserProfile(userId);  
            this.props.getStatus(userId);
    }
    render() {    
        return (
            <Profile {...this.props} profile = {this.props.profile} 
            status = {this.props.status} updateStatus = {this.props.updateStatus}/>
        )
    }
}




let mapStateToProps = (state) => ({ 
   profile:state.profilePage.profile,
   post:state.profilePage.post,
   newPostText:state.profilePage.newPostText, 
   status:state.profilePage.status
})

export function withRouter(Children){
    return(props)=>{
       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 } 
// export default connect(mapStateToProps,{
//     addPost,
//     updateNewPostText,
//     setUserProfile }) 
//     (WithUrlDataContainerComponent);
// вызвали 2 раза функцию compose. Compose вызывает фунуцию. В compose мы положили ProfileContainer
// compose вызовет WithRedirectComponent(hoc функция)

export default compose (
    connect(mapStateToProps,{addPost,updateNewPostText, 
        getUserProfile , getStatus, updateStatus}),
    withRouter,WithRedirectComponent)(ProfileContainer); 