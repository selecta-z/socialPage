import React from 'react';

const Set_User_Profile = 'Set_User_Profile';

let initialState = {
    avatar: [
        {
            img: "./images/avatar.jpg",
            nickname: 'selecta',
            id: 1
        }
    ],

    changeNicknameF (text) {

        let newNickname = {
            nickname:text
        }

        initialState.avatar.push(newNickname);
    },
}

const ProfileReducer = (state = initialState, action) => {

    switch(action.type){

        case Set_User_Profile:
            return {...state, profile: action.profile}

        default:
            return state;
    }
}

export const setUserProfile = (profile) => ({type:Set_User_Profile, profile});

export default ProfileReducer;