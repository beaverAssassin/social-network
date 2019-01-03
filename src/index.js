import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';

import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";






// let addMessage = () => {
//     //копировать массив spread
//     //изменяем state
//     myPosts = [...myPosts, currentWritingMessage]
//     currentWritingMessage="";
//     //refresh ui стэйт поменялся
//     renderAll()
// }

store.subscribe(()=>{
    renderAll();
});





const renderAll = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>, document.getElementById('root'));

}

renderAll();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
