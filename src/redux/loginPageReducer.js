import axios from './../dal/axios-instance';
import {setIsAuth} from "./authReducer";


export const REMEMBER_USER = 'LOGIN/REMEMBER_USER';
export const LOGIN_ONCHANGE = 'LOGIN/LOGIN_ONCHANGE';
export const PASSWORD_ONCHANGE = 'LOGIN/PASSWORD_ONCHANGE';
export const ON_SUBMIT_CLICK = 'LOGIN/ON_SUBMIT_CLICK';
export const RESET_LOGIN_VALUE ='LOGIN/RESET_LOGIN_VALUE';
export const RESET_PASSWORD_VALUE ='LOGIN/RESET_PASSWORD_VALUE';
//WITH AJAX//
export const SET_STATUS ='LOGIN/SET_STATUS';
export const SET_MESSAGE ='LOGIN/SET_MESSAGE';


export const currentPasswordCreator =(value)=>({type:PASSWORD_ONCHANGE, symbol:value});
export const currentLoginCreator =(value)=>({type:LOGIN_ONCHANGE, symbol:value});
export const currentResetLoginCreator =()=>({type:RESET_LOGIN_VALUE});
export const currentResetPasswordCreator =()=>({type:RESET_PASSWORD_VALUE});
export const CheckboxCreator =()=>({type:REMEMBER_USER});
export const setStatus =(status)=>({type:SET_STATUS,status });
export const setMessage =(message)=>({type:SET_MESSAGE,message });

                                                            //THUNK//
export const loginAjax = (login, password, rememberMe, captchaUrl)=>(dispatch)=>{

    dispatch(setStatus(statuses.INPROGRESS));

    axios.post('auth/login',{
        email: login,
        password:password,
        rememberMe:rememberMe
    }).then((res)=>{
debugger
        if(res.data.resultCode===0) {
            dispatch(setStatus(statuses.SUCCES));
            dispatch(setIsAuth(true))
            alert('мы залогигились')
        }else{
            dispatch(setStatus(statuses.ERROR));
            dispatch(setMessage(res.data.messages[0]));

        }
    });
}
                                                            // END THUNK//

const statuses ={
    INIT:'INIT',
    ERROR:'ERROR',
    INPROGRESS:'INPROGRESS',
    CAPTCHAREQUIRED:'CAPTCHAREQUIRED',
    SUCCESS:'SUCCESS'
}

// export const currentLoginCreator =()=>({loginOnChange, symbol:value});


let initialStateForLoginPage = {

    status:statuses.INIT,
    captchaUrl:'',
    message:'',

    //without ajax
    login: '',
    password: '',
    currentRememberMe: false,
    currentLogin: 'yura_eremok@mail.ru',
    currentPassword: 'sukinsun2211'

}


const loginPageReducer = (state = initialStateForLoginPage, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case SET_STATUS:{
            return{
                ...state,
                status:action.status
            }
        }
        case SET_MESSAGE:{
            return{
                ...state,
                message:action.message
            }
        }



        case REMEMBER_USER:
            stateCopy.rememberMe = action.rememberMe;
            return stateCopy;
        case RESET_LOGIN_VALUE:
            stateCopy.login = stateCopy.currentLogin;
            stateCopy.currentLogin = '';
            return stateCopy;
        case RESET_PASSWORD_VALUE:
            stateCopy.password = stateCopy.currentPassword;
            stateCopy.currentPassword = '';
            return stateCopy;
        case LOGIN_ONCHANGE:

            stateCopy.currentLogin = action.symbol
            return stateCopy;
        case PASSWORD_ONCHANGE:
            stateCopy.currentPassword  = action.symbol;
            return stateCopy;
        case ON_SUBMIT_CLICK:
            stateCopy = action.password;
            return stateCopy;
        default:
            return state

    }
}

export default loginPageReducer;




