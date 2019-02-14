import React, {Component} from 'react';
import style from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../logo.png';
import {Link} from "react-router-dom";
import WOW from 'wowjs';
import {giveInfoAboutMe, logOutThunk} from "../../redux/authReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router";




class Header extends Component{

    componentDidMount() {
        new WOW.WOW().init();
    }

    componentWillMount(){


 this.props.giveInfo();

    }

    render() {


         if (!this.props.isAuth ) {

             return <Redirect to='/'/>
        }


debugger
        return (
            <header>

                <div className={style.header_container}>
                    {/*<a href="#" className={style.enter}>Войти</a>*/}

                    <Link to="/profile"><img
                        src="https://cs6.pikabu.ru/images/previews_comm/2015-08_2/1438951906382231414.png"
                        className={`${style.header_logo} ${"wow bounceInRight"}`} alt="logo" data-wow-duration="4s" /></Link>

                    {/*<Link style={{ textDecoration: 'none' }} to="/">*/}
                    {this.props.isAuth && <p>{this.props.userInfo.userName}</p> }
                        <div className={`${style.enter} ${"wow hinge"}`} data-wow-duration="5s" data-wow-delay="2s">
                            <FontAwesomeIcon icon="sign-in-alt"/>
                            <button
                                onClick={this.props.logOutUser}
                                className={style.inputLogin}
                                type="button">
                                logOut
                            </button>
                        </div>

                    {/*</Link>*/}
                </div>


            </header>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        // isLoggedOut: state.authPage.isLoggedOut,
        // isLoggedIn: state.authPage.isLoggedIn
        userInfo:state.authPage.userInfo,
        isAuth:state.authPage.isAuth
    }

}



const mapDispatchToProps=(dispatch)=>{
    return{
        giveInfo:()=>dispatch(giveInfoAboutMe()),

         logOutUser:
             ()=>{
                 dispatch(logOutThunk())
             }
    }


}




export default connect(mapStateToProps,mapDispatchToProps) (Header);