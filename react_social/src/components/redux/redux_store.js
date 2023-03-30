import React from 'react';
import {configureStore} from '@reduxjs/toolkit';

import UsersReducer from './users_reducer';
import ProfileReducer from './profile_reducer';
import PostsReducer from './posts_reducer';
import MessagesReducer from './messages_reducer';

let store = configureStore ({reducer: {
    usersPage: UsersReducer, 
    profilePage: ProfileReducer,
    postsPage: PostsReducer,
    messagesPage: MessagesReducer
},
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    serializableCheck: false,
    }
),
});

window.store = store;

export default store;

