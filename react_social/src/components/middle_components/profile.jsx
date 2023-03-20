import React from 'react';
import '../middle.css';

import img from '../../images/settings.png';

import UnderProfile from './under_components/under_profile';

const Profile = (props) => {

    let profile_img = props.state.avatar.map(i => <UnderProfile nickname={i.nickname} key={i.id}/>);

    return (
        <div href className='profile'>
            
            <a className='settings-btn' href = '/profile/setting'>
                <img className='settings-img' src={img}/>
            </a>

            <div className="profile-data">
                <div className='profile_nickname'>
                    {profile_img}
                </div>
            </div>
            
            {/* <AddPost/> */}
        </div>
    );
}

export default Profile;
