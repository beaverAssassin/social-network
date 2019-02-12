
const setCurrentUser = 'DIALOG/SET_CURRENTUSER';
const selectDialog = 'DIALOG/SELECT_USER';







let initialStateForDialog = {


    // users: [
    //     {
    //         dialogId: 1234,
    //         id: 1,
    //         name: 'Владлен '
    //     },
    //     {
    //         dialogId: 4321,
    //         id: 2,
    //         name: 'Вася'
    //     },
    //     {
    //         dialogId: 4321,
    //         id: 3,
    //         name: 'Джан Франко Фердыщенко'
    //     },
    //     {
    //         dialogId: 4321,
    //         id: 4,
    //         name: 'Валера'
    //     }
    // ],
    messagesTexts: [
        {
            id: 1,
            text: 'Привет,задроты!!',
            name: "Бздашек Западловский",
            imageUrl:"https://image.shutterstock.com/image-vector/man-character-face-avatar-fallout-450w-1164551314.jpg"
        },
        {
            id: 2,
            text: 'йоу?',
            name: "Ганс Трахенбюргер",
            imageUrl:"https://image.shutterstock.com/image-vector/young-man-head-beard-avatar-260nw-1071900710.jpg"
        },
        {
            id: 3,
            text: 'Сами вы задроты',
            name: "Джан Франко Фердыщенко",
            imageUrl:"https://image.shutterstock.com/image-vector/man-character-face-avatar-fallout-450w-1164551314.jpg"
        },
        {
            id: 4,
            text: 'бонжур но',
            name: "Валера",
            imageUrl:"https://image.shutterstock.com/image-vector/isolated-avatar-happy-man-on-260nw-632290802.jpg"
        }
    ],
    currentUserId: null



}


const dialogPageReducer = (state = initialStateForDialog, action) => {
    let stateCopy = {...state};

    switch (action.type) {
        case setCurrentUser:
            stateCopy.currentUserId = action.id;
            return stateCopy;
        case selectDialog:
            stateCopy.currentUserId =  state.messagesTexts.filter(p => p.id == action.id)[0];
            return stateCopy;
        default:
            return state;
    }
}


export default dialogPageReducer;

// export const setCurrentUserById =(el)=>{
//
//     return { type:setCurrentUser, id:el.id};
// }

export const selectDialogById = (id)=> {
    return {
        type: selectDialog, id: id
    }
}