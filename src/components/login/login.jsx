import React,{ Component }from 'react';
import style from './login.module.css';
import {Link} from "react-router-dom";
import WOW from 'wowjs';




class Login extends Component{




    componentDidMount() {
        new WOW.WOW().init();
    }



    render(){


        return (

            <div className={`${style.login_page} ${"wow bounceInDown"}`} data-wow-duration="3s" >


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
                        <Link to="/profile"><input className={style.inputLogin} type="submit" value="Login"/></Link>
                    </div>

                </form>
            </div>
        )
    }
}

// const mapStateToProps =(state)=>{
//
//     return{
//         dialogsPage : state.dialogsPage
//     }
// }
//
//
//
// const ConnectedLogin = connect(mapStateToProps,null)(Login);


export default Login;

// export default Login;