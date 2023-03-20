import React from 'react';
import './App.css';

import Header from './components/header';
import Footer from './components/footer';

import Profile from './components/middle_components/profile';
import Slider from './components/slider';
import Messages from './components/middle_components/messages';
// import Users from './components/middle_components/users';
import UsersContainer from './components/middle_components/usersContainer';
import Settings from './components/middle_components/settings/settings';

import MiddleNav from './components/middle_nav';

import PersonalMessageLink from './components/middle_components/under_components/personal_link/personal_message_link';

import {BrowserRouter, Routes, Route} from 'react-router-dom';


const App = (props) => {
  return (
    <div className="app">
      <Header/>
      
      <div className="middle">

        <div className="middle-nav">
            <MiddleNav/>
        </div>

        <div className="middle-pages-info">
          <BrowserRouter>
            <Routes>
                
                <Route path = '/profile' element = { <Profile state={props.state}/>}/>
                <Route path = '/posts' element = { <Slider state={props.state} addPostF={props.addPostF}/>}/>
                <Route path = '/messages' element = { <Messages state={props.state}/>}/>
                <Route path = '/users' element = { <UsersContainer state={props.state}/>}/>

                <Route 
                  exaxt path = {'/messages/' + props.state.messages.message.username} 
                  element = { <PersonalMessageLink state={props.state}/>}
                />

                <Route exaxt path = '/profile/setting' element = { <Settings state={props.state} changeNicknameF={props.changeNicknameF}/>}/>
                
            </Routes>
          </BrowserRouter>

        </div>

      </div>

      <Footer/>

    </div>
  );
}

export default App;
