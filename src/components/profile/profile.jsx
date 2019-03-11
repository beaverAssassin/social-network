import React from 'react';
import style from './profile.module.scss';
import MyPosts from "./myPosts/MyPosts";
import {connect} from "react-redux";
import ContactForm from "../redux-forms/contactForm.js"



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

    submit = values => {
        // print the form values to the console
        console.log(values)
    }


    render() {

        console.log(this.props.status);


        const profile = this.props.profileData;

        if (!profile) {
            return <div>...nothing...</div>
        }

        let editMode = this.props.editMode;


        // const aboutMe = (() => {
        //     for (let key in profile) {
        //         return <div>
        //
        //             <span className={style.property}>{key}</span>:
        //
        //             {editMode ? <input value={profile[key]}
        //                                onChange={
        //                                    (event) => {
        //                                        this.props.onProfileContactChange(event.currentTarget.value, key)
        //                                    }}
        //
        //             /> : <span>{profile[key]}</span>}
        //         </div>
        //     }
        // })()


        const contacts = Object.keys(profile.contacts).map(key => {
            return <div key={key}>
                <span className={style.property}>{key}</span>:
                {editMode ? <input value={profile.contacts[key]} onChange={
                        (e) => {
                            this.props.onProfileContactChange(e.currentTarget.value, key)
                        }}/> :
                    <span>{profile.contacts[key]}</span>}
            </div>
        });




        const checkbox = <>{editMode ? <input type="checkbox" checked={profile.lookingForAJob}
                                              onChange={(e) => {
                                                  this.props.onLookingForAJobSearch(e.currentTarget.checked);
                                              }}
        /> : <div>{profile.lookingForAJob ? 'Ищу работу' : ""}</div>}</>




        var isOwner;

        if (this.props.isAuth && this.props.authUserId && profile.userId) {
            isOwner = true;
        }



        const contactForm =

          editMode && <ContactForm  initialValues = {this.props} onSubmit={this.submit} />
          // <><b>status:</b>{editMode ? <ContactForm  initialValues = {this.props} onSubmit={this.submit} />:<span>{this.props.status}</span>}</>


        return (
            <>


                <div className={style.profile}>
                    <div className={style.profilebg}>
                    </div>
                    <div className={style.personal_data}>
                        <img src="https://s.gamer-info.com/gl/f/a/l/l/fallout-2_w240.jpg" className={style.profile_img}
                             alt="profile_img"/>
                        <div className={style.description}>

                            {isOwner && <button onClick={this.props.onEditClick}>edit</button>}
                            <p className={style.description_name}>{profile.fullName}</p>
                          <span><b>status:</b>{this.props.status}</span><br/>
                          <span><b>aboutMe:</b>{this.props.aboutMe}</span>
                            {contactForm}
                            {contacts}
                            {/*<p><b>Date of birth:</b> 2 january 2035</p>*/}
                            {/*<p><b>City:</b>shelter №13</p>*/}
                            {/*<p><b>Email:</b></p>*/}
                            {/*<p><b>Aducation:</b>JJJJ '2040'</p>*/}
                            {/*<p><b>Web-site:</b>https://it-kamasutra.com/JSKMB</p>*/}
                            {/*{aboutMe}*/}

                            {checkbox}
                            {editMode && <button onClick={this.props.onSaveClick}>save</button>}


                        </div>
                    </div>
                    <MyPosts/>
                </div>
            </>
        )
    }
}


const mapStateToProps = (state) => ({
    profileData: state.profilePage.profileData,
    isAuth: state.authPage.isAuth,
    authUserId: state.authPage.userInfo.userId,
    editMode: state.profilePage.editMode,
    status: state.profilePage.status,
  aboutMe:state.profilePage.profileData.aboutMe
})

const mapDispatchToProps = (dispatch) => ({
    giveProfileInFo: () => dispatch(giveInfoProfile()),
    onEditClick: () => dispatch(toggleEditMode()),
    onProfileContactChange: (value, key) => dispatch(onChangeProfileEdit(value, key)),
    onSaveClick: () => dispatch(onSaveInfoProfile()),
    onLookingForAJobSearch: (event) => dispatch(LookForAJobSearch(event))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);





