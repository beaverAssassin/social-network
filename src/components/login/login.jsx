import React from 'react';
import style from './login.module.css';

let Login = () => {
    return (
        <div className={style.login_page}>
            <form className={style.login_form} action="https://echo.htmlacademy.ru" method="post">
                <div className={style.login_reg}>
                    <a href="#">Login</a>
                    <a href="#">Registration</a>
                </div>
                <div className={style.input_area}>
                    < label htmlFor=""> Email</label>
                    <input type="email" value="email"/>
                    <label htmlFor="">Password</label>
                    <input value="password" type="password"/>
                </div>
                <div className={style.checkbox}>
                    <label htmlFor=""><input type="checkbox"/>remember me</label>
                    <input className={style.inputLogin} type="submit" value="Login"/>
                </div>

            </form>
        </div>
    )
}


export default Login;