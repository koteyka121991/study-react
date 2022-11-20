import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import {addPost,
    updateNewPostText,
    setUserProfile    
} from '../../Redux/profile-reduser';
import {  useParams } from 'react-router-dom'; 
import { WithRedirectComponent } from '../../HOC/withAuthRedurect';
import { compose } from 'redux';

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
// вызвали 2 раза функцию compose. Compose вызывает фунуцию. В compose мы положили ProfileContainer
// compose вызовет WithRedirectComponent(hoc функция)




let mapStateToProps = (state) => ({ 
   profile:state.profilePage.profile,
   post:state.profilePage.post,
   newPostText:state.profilePage.newPostText, 
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
export default compose (
    connect(mapStateToProps,{addPost,updateNewPostText,setUserProfile }),
    withRouter,WithRedirectComponent)(ProfileContainer); 