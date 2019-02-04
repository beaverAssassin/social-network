import React, {Component} from 'react';
import style from './login.module.css';
import {Link} from "react-router-dom";
import WOW from 'wowjs';
import {connect} from "react-redux";
import {loginOnChange, onSubmitClick, passwordOnChange} from "../../redux/loginPageReducer";


class Login extends Component {
    componentDidMount() {
        new WOW.WOW().init();
    }


    render() {


        let login = this.props.loginPage.login;
        let password = this.props.loginPage.password;

        return (

            <div className={`${style.login_page} ${"wow bounceInDown"}`} data-wow-duration="3s">


                <form className={style.login_form} action="https://echo.htmlacademy.ru" method="post">
                    <div className={style.login_reg}>
                        <a href="#">Login</a>
                        <a href="#">Registration</a>
                    </div>
                    <div className={style.input_area}>
                        < label htmlFor=""> Email</label>
                        <input type="email" value={login} onChange={(e) => {
                            this.props.onLoginChange(e.currentTarget.value)
                        }}/>
                        <label htmlFor="">Password</label>
                        <input type="password" value={password} onChange={(e)=>{
                            this.props.onPasswordChange(e.currentTarget.value)
                        }}/>
                    </div>
                    <div className={style.checkbox}>
                        <label htmlFor=""><input type="checkbox"/>remember me</label>
                        <Link to="/content/profile"><input className={style.inputLogin} type="submit"
                                                           value="Login"/></Link>
                    </div>

                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        loginPage: state.loginPage
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        onLoginChange: (login) => {
            dispatch({
                type: loginOnChange,
                login: login
            })
        },
        onPasswordChange: (password) => {
            dispatch({
                type: passwordOnChange,
                password: password
            })
        },
        onSubmitButtonClick:(click)=>{
            dispatch({
                type:onSubmitClick

            })
        }


    }
}


const ConnectedLogin = connect(mapStateToProps, MapDispatchToProps)(Login);


export default ConnectedLogin;

// export default Login;