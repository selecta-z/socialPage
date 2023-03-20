import React from 'react';
import img from '../../../images/avatar.jpg';

const UnderProfile = (props) => {

    return (
        <div className='underProfile'>
            <div className="avatarBlock">

                <img src={img} width={'100px'} height={'100px'}/>

                <p>{props.nickname}</p>

            </div>
        </div>
    );
}

export default UnderProfile;
