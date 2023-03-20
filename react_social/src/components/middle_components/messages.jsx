import React from 'react';
import UnderMessages from './under_components/under_messages';

import '../middle.css';

const Messages = (props) => {

    let messages_username = props.state.messages.message.map(u => <UnderMessages username={u.username} id={u.id}/>);

    return (
        <div className='messages'>

            <div className='messages_username'>
                {messages_username}
            </div>
            
        </div>
    );
}

export default Messages;
