import React from 'react';
import UserProfileInfo from './under_components/user-profile-info';
import OwnProfileInfo from './under_components/own-profile-info';
import MyPosts from './under_components/my-posts';

const Profile = (props) => {

    return (
        <div className='profile'>
            {/* <OwnProfileInfo state={props.state}/> */}
            <UserProfileInfo state={props.state} profile={props.profile}/>

            <MyPosts state={props.state}/>
        </div>
    );
}

export default Profile;
