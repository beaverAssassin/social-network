import React, {Component} from 'react';
import style from './login.module.css';
import { Redirect} from "react-router-dom";
import WOW from 'wowjs';
import {statuses} from "../../redux/thunkReducer";
import { InputArea, LoginForm, LoginPage } from "./loginStyle/loginStyleComponent";
import { withRouter } from "react-router";


class Login extends Component {



    componentDidMount() {
        new WOW.WOW().init();
    }


    componentWillMount() {
        this.props.giveInfo();
    }

    

    render() {
        const login = () => {
            this.props.login && this.props.login(this.props.currentLogin, this.props.currentPassword, this.props.rememberMe,this.props.captchaText)
        }

        if (this.props.isAuth) {

            const redirectTo = !!this.props.location.state && !!this.props.location.state.from
          ? this.props.location.state.from : '/content/profile';


            return <Redirect to={redirectTo}/>
        }


        return (

            < LoginPage >
            <div className={`${style.login_page} ${"wow bounceInDown"}`} data-wow-duration="3s">


                <LoginForm>
                    <div className={style.login_reg}>
                        <a href="#top" onClick={login}>Login</a>
                        <a href="https://social-network.samuraijs.com">Registration</a>
                    </div>
                    <InputArea>
                        < label htmlFor=""> Email</label>
                        <input
                            type="email"
                            // defaultValue="yura_eremok@mail.ru"
                            value={this.props.currentLogin}
                            onChange={(e) => {
                                this.props.onLoginChange(e)
                            }}/>
                        <label htmlFor="">Password</label>
                        <input
                            type="password"
                            value={this.props.currentPassword}
                            // defaultValue="sukinsun2211"
                            onChange={(e) => {
                                this.props.onPasswordChange(e)
                            }}/>
                    </InputArea>
                    {this.props.captcha ? <div className={style.captcha}>
                        <img alt={this.props.captchaUrl} src={this.props.captchaUrl}/>
                        <input
                            type='text'
                            className={style.Rem}
                            value={this.props.captchaText}
                            onChange={(el) => {
                                this.props.CheckCaptcha(el)
                            }
                            }
                        />
                    </div> : ''}
                    <div className={style.checkbox}>
                        <label htmlFor=""><input type="checkbox" checked={this.props.rememberMe} onChange={(c) => {
                            this.props.rememberUser(c);}} />remember me</label>

                        {/*<Link to="/content/profile"><input className={style.inputLogin}  type="submit"
                                                           value="Login"/></Link>*/}
                        <button
                                onClick={login}   className={style.inputLogin}
                                type="button">login
                        </button>
                    </div>
                    {this.props.status === statuses.ERROR &&
                    <div className='error'>
                        {this.props.message}
                    </div>
                    }
                </LoginForm>
            </div>
            </LoginPage>
        )
    }
}





export default withRouter (Login);
