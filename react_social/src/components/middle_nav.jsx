import React from 'react';

import './middle.css';

const MiddleNav = () => {
    return (
        <div className='middle-nav-links'>
            <div className="nav-link">
                <a href="/profile">Profile</a>
            </div>

            <div className="nav-link">
                <a href="/posts">Posts</a>
            </div>

            <div className="nav-link">
                <a href="/messages">Messages</a>
            </div>

            <div className="nav-link">
                <a href="/users">Users</a>
            </div>
        </div>
    );
}

export default MiddleNav;
