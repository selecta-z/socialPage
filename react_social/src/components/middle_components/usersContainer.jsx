import React from 'react';
import { connect } from 'react-redux';
import { followAC, setCurrentPage, setUsersAC, unfollowAC } from '../redux/users_reducer';
import Users from './users';

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        usersCount: state.usersPage.usersCount,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        follow: (userid) => {
            dispatch(followAC(userid))
        },

        unfollow: (userid) => {
            dispatch(unfollowAC(userid))
        },

        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },

        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPage(pageNumber))
        },
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Users);