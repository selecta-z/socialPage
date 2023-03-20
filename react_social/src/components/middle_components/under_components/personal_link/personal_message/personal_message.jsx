import React from 'react';

const PersonalMessage = (props) => {
    return (
        <div className='personalMessage'>
            <p>{props.text}</p>
        </div>
    );
}

export default PersonalMessage;
