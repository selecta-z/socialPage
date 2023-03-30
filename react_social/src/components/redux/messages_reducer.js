import React from 'react';

let initialState = {
    messages: {
        message: [ 
            {
                id: 1,
                username: 'Cyber_Coban',
                text: 'Text 1 ))'
            },
            
            {
                id: 2,
                username: 'Pa1n',
                text: 'Text 2 ))'
            },
            
            {
                id: 3,
                username: 'Menthalist',
                text: 'Text 3 ))'
            },
            
            {
                id: 4,
                username: 'Wik1',
                text: 'Text 4 ))'
            }
        ]
    }
}

const MessagesReducer = (state = initialState, action) => {
    return state;
}

export default MessagesReducer;
