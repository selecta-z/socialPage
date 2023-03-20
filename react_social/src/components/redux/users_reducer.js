import React from 'react';

const Follow = 'Follow';
const unFollow = 'unFollow';
const Set_Users = 'Set_Users';

let initialState = {
    users: [],
    usersCount: 5,
    currentPage: 1
}

const UsersReducer = (state = initialState, action) => {
    switch(action.type){

        case Follow:
            return {...state, users:state.users.map(u => {
                if(u.id === action.userid){
                    return {...u, followed:true}
                }
            })}

        case unFollow:
            return {...state, users:state.users.map(u => {
                if(u.id !== action.userid){
                    return {...u, followed:false}
                }
            })}

        case Set_Users:
            return {...state, users: [...action.users]}

        default:
            return state;
    }
}

export const followAC = (userid) => ({type:Follow, userid});
export const unfollowAC = (userid) => ({type:unFollow, userid});
export const setUsersAC = (users) => ({type:Set_Users, users});

export default UsersReducer;