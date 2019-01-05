import React from 'react';
import style from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../logo.png';
import {Link} from "react-router-dom";





let Header = () => {
    return (
        <header>
            <div className={style.header_container}>
                {/*<a href="#" className={style.enter}>Войти</a>*/}

                <Link to ="/profile"><img src={logo} className={style.header_logo} alt="logo"/></Link>
                <Link to ="/login">  <div><FontAwesomeIcon icon="sign-in-alt" />Войти</div></Link>
            </div>



        </header>
    )
}

export default Header;