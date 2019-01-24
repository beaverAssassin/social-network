
import {combineReducers, createStore} from "redux";
import photoPageReducer from "./redux/photoPageReducer";
import dialogPageReducer from "./redux/dialogPageReducer";
import profilePageReducer from "./redux/profilePageReducer";







const superReducer = combineReducers({
    dialogsPage: dialogPageReducer,
    photoPage: photoPageReducer,
    profilePage: profilePageReducer

});


const store = createStore(superReducer);


export default store;


// const sostore = {
//
//     _state: {
//
//         dialogs: {
//
//
//             users: [
//                 {
//                     dialogId: 1234,
//                     id: 1,
//                     name: 'Владлен '
//                 },
//                 {
//                     dialogId: 4321,
//                     id: 2,
//                     name: 'Вася'
//                 },
//                 {
//                     dialogId: 4321,
//                     id: 3,
//                     name: 'джан франко'
//                 }
//             ],
//             messagesTexts: [
//                 {
//                     id: 1,
//                     text: 'Че каво',
//                     name: "Andrew"
//                 },
//                 {
//                     id: 2,
//                     text: 'Нормас, а ты чё по чём?',
//                     name: "Владлен"
//                 },
//                 {
//                     id: 3,
//                     text: 'привет,задроты',
//                     name: "Andrew"
//                 },
//                 {
//                     id: 4,
//                     text: 'сами вы задроты',
//                     name: "Владлен"
//                 }
//             ],
//             currentUserId: 3
//         },
//         myPosts: [
//             {
//                 id: 1,
//                 text: 'Hi,how are you?',
//                 likesCount: 15,
//                 dislikeCount: 3
//             },
//             {
//                 id: 2,
//                 text: 'yo',
//                 likesCount: 18,
//                 dislikeCount: 1
//             },
//             {
//                 id: 3,
//                 text: 'good morning',
//                 likesCount: 13,
//                 dislikeCount: 2
//             },
//             {
//                 id: 4,
//                 text: 'bye',
//                 likesCount: 12,
//                 dislikeCount: 0
//             }
//         ],
//         photoPage: {
//             photos: [
//                 {
//                     url: 'https://www.cstatic-images.com/car-pictures/xl/USC70CHC021E021001.jpg'
//                 },
//                 {
//                     url: 'https://cdn.motor1.com/images/mgl/qxZrL/s3/25-future-cars-worth-waiting-for.jpg'
//                 }
//             ]
//         },
//
//
//     },
//     subscribe(func) {
//         this._callback = func;
//     },
//
//     // setCurrentUser(id) {
//     //
//     //     this._state.dialogs.currentUserId = id;
//     //     this._callback()
//     // },
//
//     // addMessage(text, likesCount){
//     //
//     //
//     //    this._state.myPosts.unshift({text, likesCount});
//     //    this._callback();
//     // },
//     //
//     //  addPhoto(url){
//     //     this._state.photoPage.photos.unshift(url);
//     //     this._callback();
//     // },
//     _counter: 0,
//
//     getState() {
//
//         this._counter++;
//         return this._state;
//     },
//
//     _callback() {
//     },
//
//
//     dispatch(action) {
//         switch (action.type) {
//             // case 'ADD_MESSAGE':
//             //     this._state.myPosts.unshift({text: action.text, likesCount: action.likesCount});
//             //     this._state.currentTextAreaValue = "";
//             //     this._callback();
//             //     break;
//             // case 'ADD_PHOTO':
//             //     this._state.photoPage.photos.unshift({url: action.url});
//             //     this._callback();
//             //     break;
//             // case 'SET_CURRENTUSER':
//             //     this._state.dialogs.currentUserId = action.id;
//             //     this._callback();
//             //     break;
//             // case 'WRITE_TEXTAREA_VALUE':
//             //     this._state.currentTextAreaValue = action.symbol;
//             //     this._callback();
//             //     break;
//             // case 'LIKES_COUNT_PLUS':
//             //     const currentPosts = this._state.myPosts.filter((el) => {
//             //         return el.id === action.postId;
//             //     })
//             //     currentPosts[0].likesCount++;
//             //     this._callback();
//             //     break;
//             // case 'LIKES_COUNT_MINUS':
//             //     const currentPostsSubtr = this._state.myPosts.filter((el) => {
//             //         return el.id === action.postId;
//             //     })
//             //     currentPostsSubtr[0].dislikeCount++;
//             //     this._callback();
//             //     break;
//         }
//     }
// }


// export default store;


// let addMessage = () => {
//     //копировать массив spread
//     //изменяем state
//     myPosts = [...myPosts, currentWritingMessage]
//     currentWritingMessage="";
//     //refresh ui стэйт поменялся
//     renderAll()
// }







