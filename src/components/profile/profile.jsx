import React from 'react';
import mainphoto from '../../mainphoto.jpg';
import style from './profile.module.scss';
import MyPosts from "./myPosts/MyPosts";
import {connect} from "react-redux";
import {
    toggleEditMode,
    giveInfoProfile,
    onChangeProfileEdit,
    onSaveInfoProfile,
    LookForAJobSearch
} from "../../redux/profilePageReducer";


class Profile extends React.Component {


    componentWillMount() {
        this.props.giveProfileInFo();
    }



    render() {


       const profile = this.props.profileData;
        if (!profile) {
            return <div>...nothing...</div>
        }

        let editMode = this.props.editMode;

        const aboutMe = (() => {
            for (let key in profile) {
                return <div>

                   <span className={style.property}>{key}</span>:

                    {editMode?<input value={profile[key]}
                                     // onChange={
                                     //     (event)=>{this.props.onProfileContactChange(event.currentTarget.value)
                                     //     }}

                    />:<span>{profile[key]}</span>}
                    </div>
            }
        })()


        const contacts = Object.keys(profile.contacts).map(key => {
            return <div>
                    <span className={style.property}>{key}</span>:
                {editMode?<input value={profile.contacts[key]}  onChange={
                        (e)=>{this.props.onProfileContactChange(e.currentTarget.value,key)
                        }}/>:
                <span>{profile.contacts[key]}</span>}
                </div>
        });



        var isOwner;
        if (this.props.isAuth && this.props.authUserId && profile.userId) {
            isOwner = true;
        }


        console.log(profile.lookingForAJob);

        /////////////////////////////END INFO FROM AJAX/////////////////////////
        return (


            <div className={style.profile}>
                <div className={style.profilebg}>
                </div>
                <div className={style.personal_data}>
                    <img src="https://s.gamer-info.com/gl/f/a/l/l/fallout-2_w240.jpg" className={style.profile_img}
                         alt="profile_img"/>
                    <div className={style.description}>
                        {isOwner && <button onClick={this.props.onEditClick} >edit</button>}
                        <p className={style.description_name}>{profile.fullName}</p>
                        {contacts}
                        {/*<p><b>Date of birth:</b> 2 january 2035</p>*/}
                        {/*<p><b>City:</b>shelter №13</p>*/}
                        {/*<p><b>Email:</b></p>*/}
                        {/*<p><b>Aducation:</b>JJJJ '2040'</p>*/}
                        {/*<p><b>Web-site:</b>https://it-kamasutra.com/JSKMB</p>*/}
                        {aboutMe}
                        {editMode?<input  type="checkbox" checked={profile.lookingForAJob}
                                          onChange={(e)=>{
                                              this.props.onLookingForAJobSearch(e.currentTarget.checked);
                                          }}
                        />:<div>{profile.lookingForAJob ? 'Ищу работу':""}</div>}


                        {editMode && <button onClick={this.props.onSaveClick}>save</button>}


                    </div>
                </div>
                <MyPosts/>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    profileData: state.profilePage.profileData,
    isAuth: state.authPage.isAuth,
    authUserId: state.authPage.userInfo.userId,
    editMode:state.profilePage.editMode
})

const mapDispatchToProps = (dispatch) => ({
    giveProfileInFo: () => dispatch(giveInfoProfile()),
    onEditClick: () => dispatch(toggleEditMode()),
    onProfileContactChange:(value,key)=>dispatch(onChangeProfileEdit(value,key)),
    onSaveClick:()=>dispatch(onSaveInfoProfile()),
    onLookingForAJobSearch:(event)=>dispatch(LookForAJobSearch(event))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);





