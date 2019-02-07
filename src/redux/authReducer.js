export const AUTHENTIFICATION = 'AUTH_REDUCER/AUTHENTIFICATION';

const changeLoginStatus = (value)=>({type:AUTHENTIFICATION,value:value})



export const loginThunk = () => (dispatch) => {
debugger
    setTimeout(() => {

        debugger
        dispatch(changeLoginStatus(true))

    }, 3000)

}



export const logOutThunk = () => (dispatch) => {

    setTimeout(() => {
        dispatch(changeLoginStatus(false))
    }, 3000)

}


let initialStateForAuthPAge = {
    authUser: 1,
    name: 'Vasya',
    avatar: 'https://s.gamer-info.com/gl/f/a/l/l/fallout-2_w240.jpg',
    isLoggedIn: false,



}


const AuthReducer = (state = initialStateForAuthPAge, action) => {
    let stateCopy;
    switch (action.type) {
        case AUTHENTIFICATION:
            debugger
            stateCopy = {...state}
            stateCopy.isLoggedIn = action.value;
            return stateCopy;
        // case LOGIN_OUT:
        //     stateCopy.isLoggedIn = false;
        //     return stateCopy;
        default:
            return state;
    }
}
export default AuthReducer;




