import React, {Component} from 'react';
import './App.css';
import Header from './components/header/header';
import Sidebar from './components/navbar/sidebar';
import Dialogs from './components/dialogs/dialogs';
import Profile from './components/profile/profile.jsx';
import Login from "./components/login/loginContainer";
import Photos from "./components/photos/photos";
import {Route, Switch} from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSignInAlt, faHeart, faThumbsDown} from '@fortawesome/free-solid-svg-icons';
import Snake from "./snake/snakeComponent";
import Thunk from "./components/ThunkExample/thunk";
import WrappedComponent from './HOCs/putComponent'
import Users from "./components/users/users";
library.add(faSignInAlt,faHeart, faThumbsDown);

let App = (props) => {

    return (

            <div className="App">


              <Route  path='/' exact render={()=><Login/>}/>
                {/*<Route  path='/profile'  render={()=><Header/>}/>*/}
                {/*<Route  path='/profile'  render={()=><Sidebar/>}/>*/}
                {/*<Route  path='/dialogs'   render={()=><Header/>}/>*/}
                {/*<Route  path='/dialogs'   render={()=><Sidebar/>}/>*/}
                {/*<Route  path='/photos'  render={()=><Header/>}/>*/}
                {/*<Route  path='/photos'  render={()=><Sidebar/>}/>*/}
                {/*<Header/>*/}
                {/*<Sidebar/>*/}
                <Route  path ='/content' render={() => <Header/>}/>
                <Route  path ='/content' render={() =>   <Sidebar/>}/>
                <div className='content'>
                    <Route  path ='/content/profile' render={() => <Profile />}/>
                    <Route  path ='/content/snake' render={() => <Snake />}/>
                    <Switch>
                        <Route  path='/content/dialogs/:dialogId'  render={() => <Dialogs/>}/>
                        <Route  path='/content/dialogs'  render={() => <Dialogs/>}/>
                    </Switch>
                    <Route  path='/content/photos' render={() => <Photos/>}/>
                    <Route  path='/content/thunkExample' render={() => <Thunk/>}/>
                    <Route  path='/content/Users' render={() => <Users/>}/>
                </div>

            </div>


    )
}

// Андрей Турецкий, [24.01.19 16:47]
// <Route path="/" exact render={() => <Login />} />
// <Route path="/Profile" render={() => {
//     return <ProfilePage
//         informationProfileBlock={this.props.state.informationProfileBlock}
//         imgUrls={this.props.state.imgUrls}
//         posts={this.props.state.posts}
//         dispatch={this.props.dispatch}
//         textAreaPhotoValue={this.props.state.textAreaPhotoValue}
//         textAreaMassagesValue={this.props.state.textAreaMassagesValue}
//     />
// }
// }
// />



export default App;

/*<Route exact path='/dialogs' render={() => <Dialogs  dispatch={props.dispatch} />}/>*/
/*<Route exact path='/photos' render={() => <Photos dispatch={props.dispatch}   imagesUrls={props.state.photoPage.photos}/>}/>*/
/*<Route exact path='/' render={() => <Profile myPosts={props.state.myPosts} dispatch={props.dispatch} currentTextAreaValue={props.state.currentTextAreaValue} currentlikesCount={props.state.currentlikesCount} currentlikesState={props.state.currentlikesState}/>}/>*/
 /*<Route exact path='/profile' render={() => <Profile myPosts={props.state.myPosts} dispatch={props.dispatch} currentTextAreaValue={props.state.currentTextAreaValue} currentlikesCount={props.state.currentlikesCount} currentlikesState={props.state.currentlikesState}/>}/>*/