export const AUTHENTIFICATION = 'AUTH_REDUCER/AUTHENTIFICATION';
export const LOGIN_OUT = 'AUTH_REDUCER/LOGIN_OUT';
const authActionCreator = () => ({type: AUTHENTIFICATION})
const logoutActionCreator = () => ({type: LOGIN_OUT})


// export  const loginThunk=()=>(dispatch)=>{
// dispatch(authActionCreator())
// }


export const loginThunk = () => (dispatch) => {

    setTimeout(() => {
        dispatch(authActionCreator())
    }, 3000)

}



export const logOutThunk = () => (dispatch) => {

    setTimeout(() => {
        dispatch(logoutActionCreator())
    }, 3000)

}


let initialStateForAuthPAge = {
    authUser: 1,
    name: 'Vasya',
    avatar: 'https://s.gamer-info.com/gl/f/a/l/l/fallout-2_w240.jpg',
    isLoggedIn: false,
    isLoggedOut:false


}


const AuthReducer = (state = initialStateForAuthPAge, action) => {
    let stateCopy;
    switch (action.type) {
        case AUTHENTIFICATION:
            stateCopy = {...state}
            stateCopy.isLoggedIn = true;
            stateCopy.isLoggedOut = false;
            return stateCopy;
        case LOGIN_OUT:
            stateCopy.isLoggedOut = true;
            stateCopy.isLoggedIn = false;
            return stateCopy;
        default:
            return state;
    }
}
export default AuthReducer;




