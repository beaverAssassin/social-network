import React from 'react';
import mainphoto from '../../mainphoto.jpg';
import style from './profile.module.scss';
import MyPosts from "./myPosts/MyPosts";
import {connect} from "react-redux";


let Profile = ({profileInfo}) => {

    return (
        <div className={style.profile}>

            <div className={style.profilebg}>

            </div>
            <div className={style.personal_data}>
                <img src="https://s.gamer-info.com/gl/f/a/l/l/fallout-2_w240.jpg" className={style.profile_img} alt="profile_img"/>
                <div className={style.description}>
                    <p className={style.description_name}>Майкл Иванович Джордан</p>
                    <p><b>Date of birth:</b> 2 january 2035</p>
                    <p><b>City:</b>shelter №13</p>
                    <p><b>Email:</b> {profileInfo.email}</p>
                    <p><b>Aducation:</b>JJJJ '2040'</p>
                    <p><b>Web-site:</b>https://it-kamasutra.com/JSKMB</p>
                    <p><b>Обо мне:</b> {profileInfo.aboutMe} </p>
                </div>
            </div>
            <MyPosts/>
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        profileInfo:state.authPage.profileInfo

        }

}

export default connect(mapStateToProps,null)(Profile);





