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
import { faSignInAlt, faHeart, faThumbsDown} from '@fortawesome/free-solid-svg-icons';

library.add(faSignInAlt,faHeart, faThumbsDown);

let App = (props) => {

    return (

            <div className="App">

                <Header/>
                <Sidebar/>
                <div className='content'>
                    <Route  path='/' exact render={()=><Login/>}/>
                    <Route exact path='/' render={() => <Profile/>}/>
                    <Route exact path='/profile' render={() => <Profile />}/>
                    <Route exact path='/dialogs'  render={() => <Dialogs/>}/>
                    <Route exact path='/photos' render={() => <Photos/>}/>

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