import React from 'react';
import mainphoto from '../../mainphoto.jpg';
import style from './profile.module.scss';
import MyPosts from "./myPosts/MyPosts";


let Profile = (props) => {

    return (
        <div className={style.profile}>

            <div className={style.profilebg}>

            </div>
            <div className={style.personal_data}>
                <img src="https://s.gamer-info.com/gl/f/a/l/l/fallout-2_w240.jpg" className={style.profile_img} alt="profile_img"/>
                <div className={style.description}>
                    <p className={style.description_name}>Майкл Иванович Джордан</p>
                    <p>Date of birth: 2 january 2035</p>
                    <p>City:shelter №13</p>
                    <p>Aducation:JJJJ '2040'</p>
                    <p>Web-site:https://it-kamasutra.com/JSKMB</p>
                </div>
            </div>
            <MyPosts/>
        </div>
    )

}

export default Profile;

/*<MyPosts dispatch={props.dispatch}  myPosts={props.myPosts} currentTextAreaValue={props.currentTextAreaValue} />*/




