import React from 'react';
import { NavLink } from 'react-router-dom';

const UnderMessages = (props) => {

    return (
        <div className='underMessages'>
            <div className="messageBlock">

                <NavLink to={`/messages/${props.username}`}>
                    <a href={'/messages/' + props.username} className='messages_username_btn'>
                        {props.id}. {props.username}
                    </a>
                </NavLink>

            </div>
        </div>
    );
}

export default UnderMessages;
