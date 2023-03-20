import React from 'react';

import PersonalMessage from './personal_message/personal_message';

const PersonalMessageLink = (props) => {

    let messages_text = props.state.messages.message.map(t => <PersonalMessage text={t.text}/>);

    return (
        <div className='PersonalMessageLink'>
            
            <p>{messages_text}</p>
                
        </div>
    );
}

export default PersonalMessageLink;
