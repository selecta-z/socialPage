import React from 'react';
import img from '../../../images/settings.png';

import UnderProfile from './under_profile';

const OwnProfileInfo = (props) => {
    let profile_img = props.state.avatar.map(i => <UnderProfile nickname={i.nickname} key={i.id}/>);

    return (
        
        <div href className='own-profile'>
            
            <a className='settings-btn' href = '/profile/setting'>
                <img className='settings-img' src={img}/>
            </a>

            <div className="profile-data">
                <div className='profile_nickname'>
                    {profile_img}
                </div>
            </div>
        </div>
    );
}

export default OwnProfileInfo;
