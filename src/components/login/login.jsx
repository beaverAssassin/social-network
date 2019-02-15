import React, {Component} from 'react';
import style from './login.module.css';
import {Link, Redirect} from "react-router-dom";
import WOW from 'wowjs';
import {statuses} from "../../redux/thunkReducer";


class Login extends Component {

    componentDidMount() {
        new WOW.WOW().init();
    }


    render() {
        const login = () => {
            this.props.login && this.props.login(this.props.currentLogin, this.props.currentPassword, this.props.rememberMe)
        }



        if(this.props.isAuth){
            return <Redirect to='/content/profile'/>
        }


        // if (this.props.isLoggedIn) {
        //     return <Redirect to='/content/profile'/>
        // }


        // let login = this.props.loginPage.currentLogin;
        // let password = this.props.loginPage.currentPassword;
        return (

            <div className={`${style.login_page} ${"wow bounceInDown"}`} data-wow-duration="3s">


                <form className={style.login_form}>
                    <div className={style.login_reg}>
                        <a href="#">Login</a>
                        <a href="#">Registration</a>
                    </div>
                    <div className={style.input_area}>
                        < label htmlFor=""> Email</label>
                        <input
                            type="email"
                            defaultValue="yura_eremok@mail.ru"
                             value={this.props.currentLogin}
                            onChange={(e) => {
                                this.props.onLoginChange(e)
                            }}/>
                        <label htmlFor="">Password</label>
                        <input
                            type="password"
                             value={this.props.currentPassword}
                            defaultValue="sukinsun2211"
                            onChange={(e) => {
                                this.props.onPasswordChange(e)
                            }}/>
                    </div>
                    <div className={style.checkbox}>
                        <label htmlFor=""><input
                            type="checkbox"
                            checked={this.props.rememberMe}
                            onChange={(c) => {
                                this.props.rememberUser(c);

                                alert(c.currentTarget.checked)

                            }
                            }
                        />remember me</label>
                          {/*<Link to="/content/profile"><input className={style.inputLogin}  type="submit"
                                                           value="Login"/></Link>*/}
                        <button  disabled={this.props.status === statuses.INPROGRESS} onClick={login}  /*{this.props.authUser}*/ className={style.inputLogin} type="button">login</button>
                    </div>
                    {this.props.status === statuses.ERROR &&
                    <div className='error'>
                        {this.props.message}
                    </div>
                    }
                </form>
            </div>
        )
    }
}


export default Login;
