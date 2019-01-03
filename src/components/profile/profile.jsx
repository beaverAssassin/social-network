import React from 'react';
import mainphoto from '../../mainphoto.jpg';
import style from './profile.module.css';
import MyPosts from "./myPosts/MyPosts";


let Profile = (props) => {

    return (
        <div className={style.profile}>

            <div className={style.profilebg}>

            </div>
            <div className={style.personal_data}>
                <img src={mainphoto} className={style.profile_img} alt="profile_img"/>
                <div className={style.description}>
                    <p className={style.description_name}>Майкл Иванович Джордан</p>
                    <p>День рождения:2 января</p>
                    <p>Город:Нью Йорк</p>
                    <p>Образование:Бгу '95'</p>
                    <p>Веб-сайт:https://it-kamasutra.com/JSKMB</p>
                </div>
            </div>
            <MyPosts dispatch={props.dispatch}  myPosts={props.myPosts}/>
        </div>
    )

}


export default Profile;