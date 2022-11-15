import React from 'react';
import Preloader from '../../common/preloader/Preloader';
const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    
    return (
        <>
            <img src={props.profile.photos.large}></img>
            <p >{props.profile.lookingForAJobDescription}</p>
        </>
    )

}
export default ProfileInfo;