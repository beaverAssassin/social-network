export const REMEMBER_USER = 'LOGIN/REMEMBER_USER';
export const LOGIN_ONCHANGE = 'LOGIN/LOGIN_ONCHANGE';
export const PASSWORD_ONCHANGE = 'LOGIN/PASSWORD_ONCHANGE';
export const ON_SUBMIT_CLICK = 'LOGIN/ON_SUBMIT_CLICK';
export const RESET_LOGIN_VALUE ='LOGIN/RESET_LOGIN_VALUE';
export const RESET_PASSWORD_VALUE ='LOGIN/RESET_PASSWORD_VALUE';


export const currentPasswordCreator =(value)=>({type:PASSWORD_ONCHANGE, symbol:value});
export const currentLoginCreator =(value)=>({type:LOGIN_ONCHANGE, symbol:value});
export const currentResetLoginCreator =()=>({type:RESET_LOGIN_VALUE});
export const currentResetPasswordCreator =()=>({type:RESET_PASSWORD_VALUE});
export const currentResetCheckboxCreator =()=>({type:REMEMBER_USER});


// export const currentLoginCreator =()=>({loginOnChange, symbol:value});


let initialStateForLoginPage = {
    login: '',
    password: '',
    rememberMe: true,
    currentLogin: '',
    currentPassword: ''

}


const loginPageReducer = (state = initialStateForLoginPage, action) => {
    let stateCopy = {...state};
    switch (action.type) {
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




