import React, {Component} from 'react';
import './App.css';
import Header from './components/header/header';
import Sidebar from './components/navbar/sidebar';
import Dialogs from './components/dialogs/dialogs';
import Profile from './components/profile/profile.jsx';
import Login from "./components/login/login.jsx";
import Photos from "./components/photos/photos";
import { Route} from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSignInAlt, faHeart} from '@fortawesome/free-solid-svg-icons';

library.add(faSignInAlt,faHeart);

let App = (props) => {
    return (

            <div className="App">

                <Header/>
                <Sidebar/>
                <div className='content'>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/' render={() => <Profile myPosts={props.state.myPosts} dispatch={props.dispatch}/>}/>
                    <Route exact path='/profile' render={() => <Profile myPosts={props.state.myPosts} dispatch={props.dispatch}/>}/>
                    <Route exact path='/dialogs' render={() => <Dialogs state={props.state}/>}/>
                    <Route exact path='/photos' render={() => <Photos dispatch={props.dispatch}   imagesUrls={props.state.photoPage.photos}/>}/>

                </div>
            </div>

    )
}





export default App;
