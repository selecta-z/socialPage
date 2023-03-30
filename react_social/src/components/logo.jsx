import React from 'react';

const Logo = (props) => {
    return (
        <div className='logo'>
            <img src=''></img>
            <p>Hi, <span className='logo-nickname'>{props.state.avatar[0].nickname}.</span><br/> Welcome to your social page!</p>
        </div>
    );
}

export default Logo;
