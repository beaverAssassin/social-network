import axios from "../dal/axios-instance";
import {setMessage, setStatus} from "./loginPageReducer";

export const AUTHENTIFICATION = 'AUTH_REDUCER/AUTHENTIFICATION';


export const SET_IS_AUTH = 'LOGIN/SET_IS_AUTH';
export const SET_USER_INFO = 'LOGIN/SET_USER_INFO';
export const GET_PROFILE = 'LOGIN/GET_PROFILE';


export const setIsAuth = (value) => ({type: SET_IS_AUTH, value});
export const setUserInfo = (userId, userName) => ({type: SET_USER_INFO, userId, userName});
export const getProfile = (aboutMe,email)=>({type:GET_PROFILE,aboutMe,email})



export const logOutThunk = () => (dispatch) => {

    axios.post('auth/logout', {}).then((res) => {

        if (res.data.resultCode === 0) {
            dispatch(setIsAuth(false));
            dispatch(setUserInfo(null, null));
        }
    });
}

                                         //THUNK//
export const giveInfoAboutMe = () => (dispatch) => {

    axios.get('auth/me', {}).then((res) => {
        if (res.data.resultCode === 0) {
            dispatch(setIsAuth(true));
            dispatch(setUserInfo(res.data.data.id, res.data.data.login));
        }
    });

    axios.get('profile/16').then((res)=>{

        dispatch(getProfile(res.data.aboutMe,res.data.contacts.email))

    });

}
                                            //END THUNK//

let initialStateForAuthPAge = {
    isAuth: false,
    userInfo: {
        userId: null,
        userName: null,
        avatarUrl: ''
    },
    profileInfo:{

        aboutMe:"",
        email:""
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
                    userId: action.userId,
                    userName: action.userName
                }
            }
        case AUTHENTIFICATION:
            stateCopy = {...state}
            stateCopy.isLoggedIn = action.value;
            return stateCopy;
        case GET_PROFILE:
            debugger
            stateCopy = {...state}
            stateCopy.profileInfo.aboutMe= action.aboutMe;
            stateCopy.profileInfo.email= action.email;
            return stateCopy;
        // case LOGIN_OUT:
        //     stateCopy.isLoggedIn = false;
        //     return stateCopy;
        default:
            return state;
    }
}
export default AuthReducer;




