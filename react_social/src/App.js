import React from 'react';
import './App.css';

import Header from './components/header';
import Footer from './components/footer';

import Logo from './components/logo';
import Slider from './components/slider';
import Messages from './components/middle_components/messages';
import UsersContainer from './components/middle_components/usersContainer';
import Settings from './components/middle_components/settings/settings';
import OwnProfileInfo from './components/middle_components/under_components/own-profile-info';

import MiddleNav from './components/middle_nav';

import PersonalMessageLink from './components/middle_components/under_components/personal_link/personal_message_link';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProfileContainer from './components/middle_components/profile-container';


const App = (props) => {
  debugger
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
                
                <Route path = '/' element = { <Logo state={props.state.profilePage}/>}/>
                
                <Route path = '/profile' element = { <OwnProfileInfo state={props.state.profilePage}/>}/>
                <Route path = '/profile/:userId' element = { <ProfileContainer state={props.state.profilePage}/>}/>
                <Route path = '/posts' element = { <Slider state={props.state.postsPage} addPostF={props.state.postsPage.addPostF}/>}/>
                <Route path = '/messages' element = { <Messages state={props.state.messagesPage}/>}/>
                <Route path = '/users' element = { <UsersContainer state={props.state.usersPage}/>}/>

                <Route 
                  path = {`/messages/:${props.state.messagesPage.messages.message.username}`} 
                  element = { <PersonalMessageLink state={props.state.messagesPage}/>}
                />

                <Route path = '/profile/setting' element = { <Settings state={props.state.profilePage} changeNicknameF={props.state.profilePage.changeNicknameF}/>}/>
                
            </Routes>
          </BrowserRouter>

        </div>

      </div>

      <Footer/>

    </div>
  );
}

export default App;
