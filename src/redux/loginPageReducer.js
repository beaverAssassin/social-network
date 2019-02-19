import axios from './../dal/axios-instance';
import {setIsAuth} from "./authReducer";


export const REMEMBER_USER = 'LOGIN/REMEMBER_USER';
export const LOGIN_ONCHANGE = 'LOGIN/LOGIN_ONCHANGE';
export const PASSWORD_ONCHANGE = 'LOGIN/PASSWORD_ONCHANGE';
export const ON_SUBMIT_CLICK = 'LOGIN/ON_SUBMIT_CLICK';
export const RESET_LOGIN_VALUE = 'LOGIN/RESET_LOGIN_VALUE';
export const RESET_PASSWORD_VALUE = 'LOGIN/RESET_PASSWORD_VALUE';
//WITH AJAX//
export const SET_STATUS = 'LOGIN/SET_STATUS';
export const SET_MESSAGE = 'LOGIN/SET_MESSAGE';
export const GET_CAPTCHA = 'LOGIN/GET_CAPTCHA';
export const CAPTCHA_FLAG = 'LOGIN/CAPTCHA_FLAG';


export const currentPasswordCreator = (value) => ({type: PASSWORD_ONCHANGE, symbol: value});
export const currentLoginCreator = (value) => ({type: LOGIN_ONCHANGE, symbol: value});
export const currentResetLoginCreator = () => ({type: RESET_LOGIN_VALUE});
export const currentResetPasswordCreator = () => ({type: RESET_PASSWORD_VALUE});
export const rememberUser = (value) => ({type: REMEMBER_USER, value});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const setMessage = (message) => ({type: SET_MESSAGE, message});
//captcha
export const getCapcha = (text) => ({type: GET_CAPTCHA, text});
export const captchaFlag = (url) => ({type: CAPTCHA_FLAG, url});

//THUNK login
export const loginAjax = (login, password, rememberMe, captcha) => (dispatch) => {

    dispatch(setStatus(statuses.INPROGRESS));

    axios.post('auth/login', {
        email: login,
        password: password,
        rememberMe: rememberMe,
        captcha:captcha
    }).then((res) => {

        if (res.data.resultCode === 0) {
            dispatch(setStatus(statuses.SUCCES));
            dispatch(setIsAuth(true))
            alert('мы залогигились')
        } else if (res.data.resultCode === 1) {
            dispatch(setStatus(statuses.ERROR));
             dispatch(setMessage(res.data.messages[0]));

        } else {

            axios.get('security/get-captcha-url', {}).then((e) => {
                dispatch(captchaFlag(e.data.url));
                dispatch(setStatus(statuses.ERROR));
                dispatch(setMessage(res.data.messages[0]));
            })
        }

    })
}
// END THUNK//

const statuses = {
    INIT: 'INIT',
    ERROR: 'ERROR',
    INPROGRESS: 'INPROGRESS',
    CAPTCHAREQUIRED: 'CAPTCHAREQUIRED',
    SUCCESS: 'SUCCESS',
    ERROR_CAPTCHA: 'ERROR_CAPTCHA',

}

// export const currentLoginCreator =()=>({loginOnChange, symbol:value});


let initialStateForLoginPage = {

    status: statuses.INIT,
    captchaUrl: '',
    message: '',
    captchaText: '',
    captcha: false,
    //without ajax
    login: '',
    password: '',
    currentRememberMe: false,
    currentLogin: '',
    currentPassword: ''

}



const loginPageReducer = (state = initialStateForLoginPage, action) => {
    let stateCopy;
    switch (action.type) {
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_MESSAGE: {
            return {
                ...state,
                message: action.message
            }
        }
        case REMEMBER_USER:
            stateCopy = {...state};
            stateCopy.currentRememberMe = action.value;
            return stateCopy;
        case RESET_LOGIN_VALUE:
            stateCopy = {...state};
            stateCopy.login = stateCopy.currentLogin;
            stateCopy.currentLogin = '';
            return stateCopy;
        case RESET_PASSWORD_VALUE:
            stateCopy = {...state};
            stateCopy.password = stateCopy.currentPassword;
            stateCopy.currentPassword = '';
            return stateCopy;
        case LOGIN_ONCHANGE:
            stateCopy = {...state};
            stateCopy.currentLogin = action.symbol
            return stateCopy;
        case PASSWORD_ONCHANGE:
            stateCopy = {...state};
            stateCopy.currentPassword = action.symbol;
            return stateCopy;
        case ON_SUBMIT_CLICK:
            stateCopy = {...state};
            stateCopy = action.password;
            return stateCopy;
        case GET_CAPTCHA:
            stateCopy = {...state};
            stateCopy.captchaText = action.text;
            return stateCopy;
        case CAPTCHA_FLAG:
            return {...state, captcha: true, captchaUrl: action.url};
        default:
            return state

    }
}

export default loginPageReducer;

//
// import {
//     captchaRequest,
//     loginRequest,} from "../../dal/axios";
// import {AuthMeAction} from "../Auth/AuthReducer";
// export const AREA_MAIL_VALUE = 'AREA_MAIL_VALUE';
// export const AREA_PASSWORD_VALUE = 'AREA_PASSWORD_VALUE';
// export const REMEMBER_USER = 'REMEMBER_USER';
// const CAPTCHA = 'CAPTCHA';
// const CAPTCHA_FLAG = 'CAPTCHA_FLAG';
//
// export const rememberMeCreator = (rememberMe) => ({type: REMEMBER_USER, rememberMe});
// export const areaMailValueCreator = (sym) => ({type: AREA_MAIL_VALUE, sym});// (value)sym: value
// export const areaPassCreator = (value) => ({type: AREA_PASSWORD_VALUE, symbol: value});
// export const captchaCreator = (text) => ({type: CAPTCHA, text});
// const captchaFlag = (url) => ({type: CAPTCHA_FLAG, url});
//
// export const loginThunk = (email, password, rememberMe, captcha) => (dispatch,) => {
//     let promise = loginRequest(email, password, rememberMe, captcha);
//     promise.then((response) => {
//         if (response.data.resultCode === 0) {
//             dispatch(AuthMeAction(true));
//         } else if (response.data.resultCode === 1) {
//             alert(response.data.messages[0])
//         }
//         else {
//             captchaRequest().then((e) => {
//                 dispatch(captchaFlag(e.data.url));
//                 console.log(e)
//             })
//         }
//     })
// };
//
// let initialStateForLoginPage = {
//     email: 'tooreckky@gmail.com',
//     password: 'Gg6243646',
//     rememberMe: true,
//     captchaText: '',
//     captcha: false,
//     captchaUrl: '',
//     isLoggedIn: false
// };
// const LoginPageReducer = (state = initialStateForLoginPage, action) => {
//
//     let stateCopy = {...state};
//     switch (action.type) {
//         case CAPTCHA:
//             stateCopy.captchaText = action.text;
//             return stateCopy;
//         case CAPTCHA_FLAG:
//             return {...state, captcha: true, captchaUrl: action.url};
//
//         case AREA_MAIL_VALUE:
//             stateCopy.email = action.symbol;
//             return stateCopy;
//         case AREA_PASSWORD_VALUE:
//
//             stateCopy.password = action.symbol;
//             return stateCopy;
//         case REMEMBER_USER:
//
//             stateCopy.rememberMe = action.rememberMe;
//             return stateCopy;
//         default:
//             return state;
//
//     }
// };
// export default LoginPageReducer
//


//
//
// import React,{Component} from 'react';
// import logo from '../../images/logo1.png';
// import style from './LoginStyle/Login.module.css';
// import {Redirect} from 'react-router';
//
// class Login extends Component {
//
//     componentWillMount(){
//         this.props.giveInfo();
//     }
//
//
//
//     render() {
//         if (this.props.isAuth ) {
//             return <Redirect to='/profile'/>
//         }
//
//
//         return (
//             <div className={style.log_box}>
//                 <div>
//                     <img className={style.logo} src={logo}/>
//                 </div>
//                 <div className={style.text_login}>
//                     <div className={style.h_login1}>
//                         <span>
//                             {`Login |  `}
//                         </span>
//                     </div>
//                     <div className={style.h_login2}>
//                         <span>
//                             {` Registration`}
//                         </span>
//                     </div>
//                 </div>
//                 <br/>
//                 <label htmlFor='mail'>
//                     Email
//                 </label>
//                 <input
//                     type='email'
//                     value={this.props.email}
//                     className={style.mail}
//                     placeholder='Email'
//
//                     onChange={(b) => {
//                         this.props.onChangeMailArea(b);
//                     }
//                     }
//                 /><br/>
//
//                 <label htmlFor='pass'>
//                     password
//                 </label>
//                 <input
//                     className={style.password}
//
//                     value={this.props.password}
//                     type='password'
//                     placeholder='Password'
//                     onChange={(a) => {
//                         this.props.onChangePassArea(a);
//                     }}
//                 /><br/>
//                 {this.props.captcha ? <div className={style.captcha}>
//                     <img src={this.props.captchaUrl}/>
//                     <input
//                         type='text'
//                         className={style.Rem}
//                         value={this.props.captchaText}
//                         onChange={(el) => {
//                             this.props.onChangeCheckCaptcha(el)
//                         }
//                         }
//                     />
//                 </div> : ''}
//                 <div className='remember'>
//                     <input
//                         type='checkbox'
//                         className={style.Rem}
//                         value='Rem'
//                         onChange={(event) => {
//
//                             this.props.onChangeCheckBox(event);
//                         }}
//                     />
//                     <label className={style.Rem_lable} htmlFor='Rem_input'>
//                         Remember me
//                     </label>
//                     <button
//                         onClick={() => {
//                             this.props.logGetIn(
//                                 this.props.email,
//                                 this.props.password,
//                                 this.props.rememberMe,
//                                 this.props.captchaText)
//                         }}
//                         className={style.button}
//                         type='submit'>
//                         Login
//                     </button>
//                 </div>
//             </div>
//         )
//     }
// }
//
// export default Login;
//
//


//
//
//
// const mapStateToProps = (state) => {
//
//     return {
//         email: state.LoginPage.email,
//         password: state.LoginPage.password,
//         isLoggedIn: state.LoginPage.isLoggedIn,
//         captcha: state.LoginPage.captcha,
//         captchaUrl: state.LoginPage.captchaUrl,
//         rememberMe: state.LoginPage.rememberMe,
//         captchaText: state.LoginPage.captchaText,
//         isAuth:state.AuthPage.isAuth
//
//
//     }
// };
//
// const mapDispatchToProps = (dispatch) => ({
//     onChangeMailArea: (event) => {
//         let action = areaMailValueCreator(event.currentTarget.value);
//         dispatch(action)
//     },//currentTarget-эвен событие в котором сидит текст ареа
//     onChangePassArea: (event) => {
//         let action = areaPassCreator(event.currentTarget.value);
//         dispatch(action)//currentTarget-эвен событие в котором сидит текст ареа
//     },
//     onChangeCheckBox: (e) => {
//         dispatch(rememberMeCreator(e.currentTarget.value));
//         // console.log(e)
//     },
//     logGetIn: (email, password, rememberMe, captcha) => {
//         dispatch(loginThunk(email, password, rememberMe, captcha))
//     },
//     onChangeCheckCaptcha: (event)=>{
//         let action = captchaCreator(event.currentTarget.value);
//         dispatch(action)
//     },
//     giveInfo:()=> dispatch(authMeThunk())
// });
