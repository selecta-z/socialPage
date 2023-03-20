import React from 'react';

const UnderMessages = (props) => {

    return (
        <div className='underMessages'>
            <div className="messageBlock">

                <a href={'/messages/' + props.username} className='messages_username_btn'>
                    {props.id}. {props.username}
                </a>

            </div>
        </div>
    );
}

export default UnderMessages;
