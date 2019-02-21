import React from 'react';
import mainphoto from '../../mainphoto.jpg';
import style from './profile.module.scss';
import MyPosts from "./myPosts/MyPosts";
import {connect} from "react-redux";
import {giveInfoProfile} from "../../redux/profilePageReducer";


class Profile extends React.Component {


    componentWillMount() {
        this.props.giveProfileInFo();
    }

    render() {

        let profile = this.props.profileData;

        // Object.keys(profile.contacts).map(key=>{
        //     return <div>{key}:{profile.contacts[key]}</div>
        // });






        return (

            <div className={style.profile}>

                <div className={style.profilebg}>

                </div>
                <div className={style.personal_data}>
                    <img src="https://s.gamer-info.com/gl/f/a/l/l/fallout-2_w240.jpg" className={style.profile_img}
                         alt="profile_img"/>
                    <div className={style.description}>
                        <p className={style.description_name}>Майкл Иванович Джордан</p>
                        <p><b>Date of birth:</b> 2 january 2035</p>
                        <p><b>City:</b>shelter №13</p>
                        <p><b>Email:</b></p>
                        <p><b>Aducation:</b>JJJJ '2040'</p>
                        <p><b>Web-site:</b>https://it-kamasutra.com/JSKMB</p>
                        <p><b>Обо мне:</b>{this.props.profileData}</p>
                    </div>
                </div>
                <MyPosts/>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    profileData: state.profilePage.profileData

})

const mapDispatchToProps = (dispatch) => ({
        giveProfileInFo: () => dispatch(giveInfoProfile())
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);





