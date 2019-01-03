

// noinspection JSAnnotator
const store = {

     _state: {
        messagesTexts: [
            {
                id: 1,
                text: 'Че каво',
                name: "Andrew"
            },
            {
                id: 2,
                text: 'Нормас, а ты чё по чём?',
                name: "Владлен"
            },
            {
                id: 3,
                text: 'привет,задроты',
                name: "Andrew"
            },
            {
                id: 4,
                text: 'сами вы задроты',
                name: "Владлен"
            }
        ],
        dialogs: [
            {
                dialogId: 1234,
                userId: 123456789,
                name: 'Владлен '
            },
            {
                dialogId: 4321,
                userId: 123456789,
                name: 'Вася'
            },
            {
                dialogId: 4321,
                userId: 123456789,
                name: 'джан франко'
            }
        ],
        myPosts: [
            {
                id: 1,
                text: 'Hi,how are you?',
                likesCount: 15
            },
            {
                id: 2,
                text: 'yo',
                likesCount: 18
            },
            {
                id: 3,
                text: 'good morning',
                likesCount: 13
            },
            {
                id: 4,
                text: 'bye',
                likesCount: 12
            }
        ],
        photoPage: {
            photos: [
                {
                    url: 'https://www.cstatic-images.com/car-pictures/xl/USC70CHC021E021001.jpg'
                },
                {
                    url: 'https://cdn.motor1.com/images/mgl/qxZrL/s3/25-future-cars-worth-waiting-for.jpg'
                }
            ]
        }

    },
    subscribe(func){
         this._callback = func;
    },
     // addMessage(text, likesCount){
     //
     //
     //    this._state.myPosts.unshift({text, likesCount});
     //    this._callback();
     // },
     //
    //  addPhoto(url){
    //     this._state.photoPage.photos.unshift(url);
    //     this._callback();
    // },
    _counter:0,

    getState(){
         this._counter++;
         return this._state;
    },
    _callback(){},



    dispatch(action){
         switch(action.type){
             case 'ADD_MESSAGE':
                 this._state.myPosts.unshift({text: action.text, likesCount: action.likesCount});
                 this._callback();
                 break;
             case 'ADD_PHOTO':
                 this._state.photoPage.photos.unshift({url: action.url});
                 this._callback();
                 break;
         }
    }


}


export default  store;


// let addMessage = () => {
//     //копировать массив spread
//     //изменяем state
//     myPosts = [...myPosts, currentWritingMessage]
//     currentWritingMessage="";
//     //refresh ui стэйт поменялся
//     renderAll()
// }







