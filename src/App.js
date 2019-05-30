import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Sidebar from "./components/navbar/sidebar";
import Dialogs from "./components/dialogs/dialogs";
import Profile from "./components/profile/profile.jsx";
import Login from "./components/login/loginContainer";
import Photos from "./components/photos/photos";
import { Route, Switch } from "react-router-dom";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSignInAlt, faHeart, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import Snake from "./snake/snakeComponent";
import Thunk from "./components/ThunkExample/thunk";
import Users from "./components/users/users";
import Footer from "./components/footer/footer";

library.add(faSignInAlt, faHeart, faThumbsDown, fab);

let App = (props) => {

  return (

    <div className="App">
      <Route path='/' exact render={() => <Login/>}/>
      <Route path='/content' render={() => <Header/>}/>
      <Route path='/content' render={() => <Sidebar/>}/>
      <div className='content'>
        <Route path='/content/profile' render={() => <Profile/>}/>
        <Route path='/content/snake' render={() => <Snake/>}/>
        <Switch>
          <Route path='/content/dialogs/:dialogId' render={() => <Dialogs/>}/>
          <Route path='/content/dialogs' render={() => <Dialogs/>}/>
        </Switch>
        <Route path='/content/photos' render={() => <Photos/>}/>
        <Route path='/content/thunkExample' render={() => <Thunk/>}/>
        <Route path='/content/Users' render={() => <Users/>}/>
      </div>
      <Route path='/content' render={() => <Footer/>}/>

    </div>


  );
};


export default App;

