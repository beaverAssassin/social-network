const setCurrentUser = 'DIALOG/SET_CURRENTUSER';



let initialStateForDialog = {
    users: [
        {
            dialogId: 1234,
            id: 1,
            name: 'Владлен '
        },
        {
            dialogId: 4321,
            id: 2,
            name: 'Вася'
        },
        {
            dialogId: 4321,
            id: 3,
            name: 'джан франко'
        }
    ],
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
    currentUserId: 3


}


const dialogPageReducer = (state = initialStateForDialog, action) => {
    switch (action.type) {
        case setCurrentUser:
            let stateCopy = {...state};

            stateCopy.currentUserId = action.id;
            return stateCopy;
        default:
            return state;
    }
}


export default dialogPageReducer;
export d