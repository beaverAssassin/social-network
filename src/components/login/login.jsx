import React,{ Component }from 'react';
import style from './login.module.css';
import {Link} from "react-router-dom";
import WOW from 'wowjs';
import {connect} from "react-redux";




class Login extends Component{
    componentDidMount() {
        new WOW.WOW().init();
    }



    render(){


        let login = this.props.loginPage.login;
        let password = this.props.loginPage.password;

        return (

            <div className={`${style.login_page} ${"wow bounceInDown"}`} data-wow-duration="3s" >


                <form className={style.login_form} action="https://echo.htmlacademy.ru" method="post">
                    <div className={style.login_reg}>
                        <a href="#">Login</a>
                        <a href="#">Registration</a>
                    </div>
                    <div className={style.input_area}>
                        < label htmlFor=""> Email</label>
                        <input type="email"  defaultValue={login}/>
                        <label htmlFor="">Password</label>
                        <input type="password" defaultValue={password}/>
                    </div>
                    <div className={style.checkbox}>
                        <label htmlFor=""><input type="checkbox"/>remember me</label>
                        <Link to="/content/profile"><input className={style.inputLogin} type="submit" value="Login"/></Link>
                    </div>

                </form>
            </div>
        )
    }
}

const mapStateToProps =(state)=>{

    return{
        loginPage : state.loginPage
    }
}

const MapDispatchToProps = (dispatch)=>{
    return {
        onChange: () => {
            dispatch({
                type: state.loginPage.login
            })
        }
    }
}


const ConnectedLogin = connect(mapStateToProps,MapDispatchToProps)(Login);


export default ConnectedLogin;

// export default Login;