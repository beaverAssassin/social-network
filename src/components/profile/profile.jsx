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


    // const contacts = Object.keys(profile.contacts).map(key => {
    //     return <div key={key}>
    //         <b >{key}</b>:
    //         {editMode ? <field name={profile.contacts[key]} /> :
    //             <span>{profile.contacts[key]}</span>}
    //     </div>
    // });


    const checkbox = <>{editMode ? <input type="checkbox" checked={profile.lookingForAJob}
                                          onChange={(e) => {
                                            this.props.onLookingForAJobSearch(e.currentTarget.checked);
                                          }}
    /> : <div>{profile.lookingForAJob ? "Ищу работу" : ""}</div>}</>;


    var isOwner;

    if (this.props.isAuth && this.props.authUserId && profile.userId) {
      isOwner = true;
    }


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

              {/*{isOwner && <button onClick={this.props.onEditClick}>edit</button>}*/}
              <p className={style.description_name}>{profile.fullName}</p>
              {/*<span><b>status:</b>{this.props.status}</span><br/>*/}
              {/*<span><b>aboutMe:</b>{this.props.aboutMe}</span>*/}
              <input type="file" id="photo" ref={fileAvatarImg} onChange={() => onAddAvatarClick()}/>

              <ContactForm initialValues={this.props} onSubmit={this.submit}/>
              {/*{editMode && <ContactForm  initialValues = {this.props} onSubmit={this.submit} />}*/}

              {/*/!*<p><b>Date of birth:</b> 2 january 2035</p>*!/*/}
              {/*/!*<p><b>City:</b>shelter №13</p>*!/*/}
              {/*/!*<p><b>Email:</b></p>*!/*/}
              {/*/!*<p><b>Aducation:</b>JJJJ '2040'</p>*!/*/}
              {/*/!*<p><b>Web-site:</b>https://it-kamasutra.com/JSKMB</p>*!/*/}
              {/*{aboutMe}*/}

              {/*{checkbox}*/}
              {/*{editMode && <button onClick={this.props.onSaveClick}>save</button>}*/}


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





