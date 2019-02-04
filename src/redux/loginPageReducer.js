export const rememberUser = 'LOGIN/REMEMBER_USER';
export const loginOnChange = 'LOGIN/LOGIN_ONCHANGE';
export const passwordOnChange = 'LOGIN/PASSWORD_ONCHANGE';
export const onSubmitClick = 'LOGIN/ON_SUBMIT_CLICK';


let initialStateForLoginPage = {
    login: "yura_eremok@mail.ru",
    password: 123,
    rememberMe: true,
    currentLogin: '',
    currentPassword: ''

}


const loginPageReducer = (state = initialStateForLoginPage, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case rememberUser:
            stateCopy.rememberMe = action.rememberMe;
            return stateCopy;
        case loginOnChange:
            stateCopy.login = action.login
            return stateCopy;
        case passwordOnChange:
            stateCopy.password = action.password;
            return stateCopy;
        case onSubmitClick:
            stateCopy = action.password;
            return stateCopy;
        default:
            return state

    }
}

export default loginPageReducer;




