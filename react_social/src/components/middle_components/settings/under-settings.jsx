import React from 'react';

const UnderSettings = (props) => {
    return (
        <div className='underSettings'>
            <p className='settings_nickname'>Your current nickname is <span>{props.nickname}</span></p>
        </div>
    );
}

export default UnderSettings;
