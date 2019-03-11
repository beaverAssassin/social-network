import {connect} from "react-redux";
import Login from "./login";
import {
    currentLoginCreator,
    currentPasswordCreator
    , currentResetLoginCreator, currentResetPasswordCreator, getCapcha, loginAjax, rememberUser
} from "../../redux/loginPageReducer";
import {giveInfoAboutMe} from "../../redux/authReducer";



const mapStateToProps = (state) => {

    return {
        isAuth: state.authPage.isAuth,
        status: state.loginPage.status,
        message: state.loginPage.message,
        currentLogin: state.loginPage.currentLogin,
        currentPassword: state.loginPage.currentPassword,
        isLoggedIn: state.authPage.isLoggedIn,
        rememberMe: state.loginPage.currentRememberMe,
        // CAPTCHA:
        captcha: state.loginPage.captcha,
        captchaUrl: state.loginPage.captchaUrl,
        captchaText: state.loginPage.captchaText,

    }
}

const mapDispatchToProps = (dispatch, getState) => {


    return {

        login:
            (login, password, rememberMe,captcha) => {
                dispatch(loginAjax(login, password, rememberMe,captcha))

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
        giveInfo:
            () => dispatch(giveInfoAboutMe()),
        CheckCaptcha:
            (event) => {
                dispatch(getCapcha(event.currentTarget.value));
            },


    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);

