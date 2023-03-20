import React from 'react';
import ChangeNickname from './change_nickname';
import ChangeAvatar from './change_avatar';
import UnderSettings from './under-settings';

const Settings = (props) => {
    
    let profile_nickname = props.state.avatar.map(n => <UnderSettings nickname={n.nickname} key={n.id}/>);

    return (
        <div className='settings'>
            <p className='settings_title'>Settings</p>
            <div>{profile_nickname}</div>

            <ChangeNickname changeNicknameF={props.changeNicknameF} state={props.state}/>
            <ChangeAvatar/>
        </div>
    );
}

export default Settings;
