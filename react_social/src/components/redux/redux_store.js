import React from 'react';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import UsersReducer from './users_reducer';

// let reducers = combineReducers({
//     usersPage:UsersReducer
// })

let store = configureStore ({reducer: {usersPage: UsersReducer}});
// let store = configureStore ({reducer: {usersPage: UsersReducer}});

export default store;

