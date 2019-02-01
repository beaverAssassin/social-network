const rememberUser = 'LOGIN/REMEMBER_USER';
const loginOnChange ='LOGIN/LOGIN_ONCHANGE';
const passwordOnChange ='LOGIN/PASSWORD_ONCHANGE';



let initialStateForLoginPage = {
        login:"yura_eremok@mail.ru",
        password:123,
        rememberMe:true

}


const loginPageReducer = (state=initialStateForLoginPage,action)=>{
    let stateCopy = {...state};
    switch (action.type){
        case rememberUser:
            stateCopy.rememberMe = action.rememberMe;
            return stateCopy;
        case loginOnChange:
            stateCopy.login = action.login
            return stateCopy;
        case passwordOnChange:
            stateCopy.password = action.password
        default:
            return state

    }
}

export default loginPageReducer;




