import React from 'react';
import MyPostContainer from './components/MyPostContainer';
import ProfileInfo from './components/ProfileInfo';
const Profile = (props) => {
return (
    <>
    <ProfileInfo profile={props.profile}/>
  
    <MyPostContainer />
    </>
)
}
export default Profile;