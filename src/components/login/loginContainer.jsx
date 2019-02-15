import React, {Component} from 'react';
import {connect} from "react-redux";
import Login from "./login";
import {
    currentLoginCreator,
    currentPasswordCreator
    , currentResetLoginCreator, currentResetPasswordCreator, loginAjax, rememberUser
} from "../../redux/loginPageReducer";
import {giveInfoAboutMe} from "../../redux/authReducer";

/*import {loginThunk} from "../../redux/authReducer";*/


const mapStateToProps = (state) => {

    return {
         isAuth:state.authPage.isAuth,
        status:state.loginPage.status,
        message:state.loginPage.message,
        captchaUrl:state.loginPage.captchaUrl,

        currentLogin: state.loginPage.currentLogin,
        currentPassword: state.loginPage.currentPassword,
        isLoggedIn: state.authPage.isLoggedIn,
        rememberMe: state.loginPage.currentRememberMe
        // Remember:

    }
}

const mapDispatchToProps = (dispatch,getState) => {


    return {

        login:
            (login,password,rememberMe)=> {
            dispatch(loginAjax(login,password,rememberMe))

        },
        onButtonClickLogin:
            () => {
                dispatch(currentResetLoginCreator())
            },
        onButtonClickLogin:
            () => {
                dispatch(currentResetPasswordCreator())
            },
        onLoginChange:
            (event) => {
                let action = currentLoginCreator(event.currentTarget.value)
                dispatch(action)
            },//currentTarget-эвен событие в котором сидит текст ареа
        onPasswordChange:
            (event) => {
                let action = currentPasswordCreator(event.currentTarget.value)
                dispatch(action)//currentTarget-эвен событие в котором сидит текст ареа
            },
        rememberUser:
            (e) => {
                dispatch(rememberUser(e.currentTarget.checked));
            },
        giveInfo:()=>dispatch(giveInfoAboutMe())
      /*  authUser:
            ()=>{
            dispatch(loginThunk())
            },*/
        // logOutUser:
        //     ()=>{
        //     dispatch(logOutThunk())
        //     }

    }
}

// const mapStateToProps = (state) => {
//
//     return {
//         loginPage: state.loginPage
//     }
// }
//
// const MapDispatchToProps = (dispatch) => {
//     return {
//         onLoginChange: (login) => {
//             dispatch({
//                 type: loginOnChange,
//                 login: login
//             })
//         },
//         onPasswordChange: (password) => {
//             dispatch({
//                 type: passwordOnChange,
//                 password: password
//             })
//         },
//         onSubmitButtonClick: (click) => {
//             dispatch({
//                 type: onSubmitClick
//
//             })
//         }
//
//
//     }
// }
//



export default connect(mapStateToProps, mapDispatchToProps)(Login);

