import React, { Component } from 'react';
import '../middle.css';
import img from '../../images/friends_avatar.jpg';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

// props.setUsers(
//     {id: 1, avatar:{img}, followed: false, username: 'Pa1n', location:{country:'Ukraine', city:'Kiev'}},
//     {id: 2, avatar:{img}, followed: true, username: 'Cyber_Coban', location:{country:'Ukraine', city:'Kiev'}},
//     {id: 3, avatar:{img}, followed: false, username: 'Wik1', location:{country:'Ukraine', city:'Kiev'}}
// )

class Users extends Component {

    componentDidMount(){
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersCount}`
            )
        .then( (res) => {
            this.props.setUsers(
                res.data.items
            )
        })
    }


    pageChanger = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);

        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersCount}`
            )
        .then( (res) => {
            this.props.setUsers(
                res.data.items
            )
        })
    }

    render() {

        let pageCount = Math.ceil(this.props.totalUsersCount/this.props.usersCount);

        let pages = [];

        for(let i=1; i<=pageCount; i++){
            pages.push(i);
        }
        debugger
        return (
            <div className='users'>

                <div className='users-pages'>

                    {pages.map(p => {
                        return <span key={p} className={this.props.currentPage === p && 'selected_user_page'}
                        onClick={(e) => {this.pageChanger(p)}}>
                            {p}
                        </span>
                    })}

                </div>

                {this.props.users.length == 0 ? <div className="lds-facebook"><div></div><div></div><div></div></div> : 
                this.props.users.map(u => 
                    <div className='user' key={u.id}>

                        <NavLink to={`/profile/${u.id}`}>
                            {u.photos.large == null ? <img className='user-photo' src={img}/> : <img src={u.photos.large}/>}
                        </NavLink>

                        <div className='user-info'>
                            <p className='user-id'>id: {u.id}</p>
                            <p className='user-name'>nickname: {u.name}</p>
                            {/* <div className='location'>
                                <p className='locaion-country'>{u.location.country}</p>,
                                <p className='locaion-city'>{u.location.city}</p>
                            </div> */}
                            {u.followed ? 
                            <button className='unfollow-btn'>Unfollow</button> 
                            : <button className='follow-btn'>Follow</button>}
                        </div>

                    </div>
                )}
                
            </div>
        );
    }
}

export default Users;
