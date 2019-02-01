import React, {Component} from 'react';
import style from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../logo.png';
import {Link} from "react-router-dom";
import WOW from 'wowjs';




class Header extends Component{

    componentDidMount() {
        new WOW.WOW().init();
    }
    render() {
        return (
            <header>
                <div className={style.header_container}>
                    {/*<a href="#" className={style.enter}>Войти</a>*/}

                    <Link to="/profile"><img
                        src="https://cs6.pikabu.ru/images/previews_comm/2015-08_2/1438951906382231414.png"
                        className={`${style.header_logo} ${"wow bounceInRight"}`} alt="logo" data-wow-duration="4s" /></Link>

                    <Link style={{ textDecoration: 'none' }} to="/">
                        <div className={`${style.enter} ${"wow hinge"}`} data-wow-duration="5s" data-wow-delay="2s"><FontAwesomeIcon icon="sign-in-alt" /> Войти</div>
                    </Link>
                </div>


            </header>
        )
    }
}

export default Header;