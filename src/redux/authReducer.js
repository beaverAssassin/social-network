import axios from "../dal/axios-instance";
import {setMessage, setStatus} from "./loginPageReducer";

export const AUTHENTIFICATION = 'AUTH_REDUCER/AUTHENTIFICATION';


export const SET_IS_AUTH = 'LOGIN/SET_IS_AUTH';
export const SET_USER_INFO = 'LOGIN/SET_USER_INFO';


export const setIsAuth = (value) => ({type: SET_IS_AUTH, value});
export const setUserInfo = (userId, userName) => ({type: SET_USER_INFO, userId, userName});


// const changeLoginStatus = (value)=>({type:AUTHENTIFICATION,value:value})
/*
export const loginThunk = () => (dispatch) => {

    setTimeout(() => {
        dispatch(changeLoginStatus(true))
    }, 3000)
}
*/

export const logOutThunk = () => (dispatch) => {

    axios.post('auth/logout', {}).then((res) => {
debugger;
        if (res.data.resultCode === 0) {
            dispatch(setIsAuth(false));
            dispatch(setUserInfo(null, null));
        }
    });
}




// export const logOutThunk = () => (dispatch) => {
//
//     setTimeout(() => {
//         dispatch(changeLoginStatus(false))
//     }, 3000)
//
// }



                                            //THUNK//
export const giveInfoAboutMe = () => (dispatch) => {


    axios.get('auth/me', {}).then((res) => {

        if (res.data.resultCode === 0) {
            dispatch(setIsAuth(true));
            dispatch(setUserInfo(res.data.data.userId, res.data.data.login));
        }
    });
}
                                            //END THUNK//

let initialStateForAuthPAge = {
    isAuth: false,
    userInfo: {
        iserId: null,
        userName: null,
        avatarUrl: ''
    },

    //without ajax
    authUser: 1,
    name: 'Vasya',
    avatar: 'https://s.gamer-info.com/gl/f/a/l/l/fallout-2_w240.jpg',
    isLoggedIn: false,


}


const AuthReducer = (state = initialStateForAuthPAge, action) => {
    let stateCopy;
    switch (action.type) {
        case SET_IS_AUTH: {
            return {
                ...state,
                isAuth: action.value
            }
        }
        case SET_USER_INFO:
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    userId: action.login,
                    userName: action.userName
                }
            }

        case AUTHENTIFICATION:
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




