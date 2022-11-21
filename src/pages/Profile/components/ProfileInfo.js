import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import ProfileStatus from './ProfileStatus';
const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }    
    return (
        <>
            <img src={props.profile.photos.large}></img>
            <p >{props.profile.lookingForAJobDescription}</p>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        
        </>
    )

}
export default ProfileInfo;