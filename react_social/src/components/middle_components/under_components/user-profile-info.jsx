import React from 'react';
import '../../middle.css';

// import user_photo from '../../../images/user-photo.png'
import img from '../../../images/friends_avatar.jpg';

const UserProfileInfo = (props) => {

    if (!props.profile){
        return(
            <div className="lds-facebook"><div></div><div></div><div></div></div>
        )
    }

    else{
        return (
            <div className='user-profile'>
                {props.profile.photos.large == null ? <img className='user-photo' src={img}/> : <img src={props.profile.photos.large}/>}
                <p className='user-profile_name'>{props.profile.fullName}</p>
            </div>
        );
    }
}

export default UserProfileInfo;
