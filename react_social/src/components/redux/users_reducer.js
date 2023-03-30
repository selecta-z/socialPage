import React from 'react';

const Follow = 'Follow';
const unFollow = 'unFollow';
const Set_Users = 'Set_Users';
const Set_Current_Page = 'Set_Current_Page';

let initialState = {
    users: [],
    usersCount: 5,
    currentPage: 1,
    totalUsersCount: 19,
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
            return {...state, users: action.users}

        case Set_Current_Page:
            return {...state, currentPage: action.currentPage}

        default:
            return state;
    }
}

export const followAC = (userid) => ({type:Follow, userid});
export const unfollowAC = (userid) => ({type:unFollow, userid});
export const setUsersAC = (users) => ({type:Set_Users, users});
export const setCurrentPage = (currentPage) => ({type:Set_Current_Page, currentPage});

export default UsersReducer;