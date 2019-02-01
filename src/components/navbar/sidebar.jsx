import React from 'react';
import {Link} from "react-router-dom";
import style from "./sidebar.module.css";


let SideBar = () => {
    return (

            <div className={style.sidebar_block}>


                <nav>
                    <ul>
                        <li><Link to="/content/profile">Профиль</Link></li>
                        <li><Link to="/content/dialogs">Сообщения</Link></li>
                        <li><Link to="/content/dialogs">Музыка</Link></li>
                        <li><Link to="/content/photos">Фото</Link></li>
                        <br/>
                        <li><Link to="/profile">Настройки</Link></li>

                    </ul>


                </nav>
            </div>


    )
}

export default SideBar;