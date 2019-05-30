import React from "react";
import style from "./profile.module.scss";
import MyPosts from "./myPosts/MyPosts";
import { connect } from "react-redux";
import ContactForm from "../redux-forms/contactForm.js";


import {
  toggleEditMode,
  giveInfoProfile,
  onChangeProfileEdit,
  onSaveInfoProfile,
  LookForAJobSearch, uploadAvatar
} from "../../redux/profilePageReducer";


class Profile extends React.Component {
  componentWillMount() {
    this.props.giveProfileInFo();
  }


  submit = values => {
    // print the form values to the console
    this.props.onSaveClick(values);
    console.log(values);
  };


  render() {

    const profile = this.props.profileData;

    if (!profile) {
      return <div>...nothing...</div>;
    }

    // let editMode = this.props.editMode;

    // const checkbox = <>{editMode ? <input type="checkbox" checked={profile.lookingForAJob}
    //                                       onChange={(e) => {
    //                                         this.props.onLookingForAJobSearch(e.currentTarget.checked);
    //                                       }}
    // /> : <div>{profile.lookingForAJob ? "Ищу работу" : ""}</div>}</>;

    // var isOwner;
    //
    // if (this.props.isAuth && this.props.authUserId && profile.userId) {
    //   isOwner = true;
    // }




    let fileAvatarImg = React.createRef();
    const onAddAvatarClick = () => {
      this.props.uploadPhoto(fileAvatarImg);
    };


    return (
      <>
        <div className={style.profile}>
          <div className={style.profilebg}>
          </div>
          <div className={style.personal_data}>
            <img src="https://s.gamer-info.com/gl/f/a/l/l/fallout-2_w240.jpg" className={style.profile_img}
                 alt="profile_img"/>
            <div className={style.description}>

              <p className={style.description_name}>{profile.fullName}</p>


              <input type="file" id="photo" ref={fileAvatarImg} onChange={() => onAddAvatarClick()}/>

              <ContactForm initialValues={this.props} onSubmit={this.submit}/>

            </div>
          </div>
          <MyPosts/>
        </div>
      </>
    );
  }
}


const mapStateToProps = (state) => ({
  profileData: state.profilePage.profileData,
  editMode: state.profilePage.editMode,
  isAuth: state.authPage.isAuth,
  authUserId: state.authPage.userInfo.userId,
  status: state.profilePage.status,
  aboutMe: state.profilePage.profileData.aboutMe

});

const mapDispatchToProps = (dispatch) => ({
  uploadPhoto: (fileAvatarImg) => dispatch(uploadAvatar(fileAvatarImg)),
  giveProfileInFo: () => dispatch(giveInfoProfile()),
  onEditClick: () => dispatch(toggleEditMode()),
  onProfileContactChange: (value, key) => dispatch(onChangeProfileEdit(value, key)),
  onLookingForAJobSearch: (event) => dispatch(LookForAJobSearch(event)),
  onSaveClick: (data) => {
    dispatch(onSaveInfoProfile(data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);





