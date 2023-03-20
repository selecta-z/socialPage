import React from 'react';
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from '../redux/users_reducer';
import Users from './users';

let mapStateToProps = (state) => {
    // debugger
    return{
        // users: state.Usersr,
        
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
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);


// import React from 'react';
// import Users from './users';

// const UsersContainer = () => {

//     const usersCount = 5;
//     const pageCount = Math.ceil(20/usersCount);
//     const currentPage = 1;
//     return (
//         <div className='usersContainer'>
//             <Users usersCount={usersCount} pageCount={pageCount} currentPage={currentPage}/>
//         </div>
//     );
// }

// export default UsersContainer;
