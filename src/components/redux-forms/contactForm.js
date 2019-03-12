import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { LookForAJobSearch, toggleEditMode } from "../../redux/profilePageReducer";


let ContactForm = (props) => {

  const profile = props.profileData;

  const editMode = props.editMode;
  console.log(editMode);


  const { handleSubmit, pristine, reset, submitting, status } = props;


  var isOwner;

  if (props.isAuth && props.authUserId && profile.userId) {
    isOwner = true;
  }



  const checkbox = <>{editMode ? <input type="checkbox" checked={profile.lookingForAJob}
                                        onChange={(e) => {
                                          props.onLookingForAJobSearch(e.currentTarget.checked);
                                        }}
  /> : <div>{profile.lookingForAJob ? "Ищу работу" : ""}</div>}</>;




  const contacts = Object.keys(profile.contacts).map(key => {
    //debugger
    return <div key={key}>
      <b>{key}</b>:
      {editMode ? <Field name={"profileData.contacts." + key} component="input" type="text"/> :
        <span>{profile.contacts[key]}</span>}
    </div>;
  });






  return (
    <form onSubmit={handleSubmit}>
      {isOwner && <button type="button" onClick={props.onEditClick}>edit</button>}
      {contacts}
      <p><b>status</b>:{editMode?<Field name="status" component="input" type="text"/>:<span>{props.status}</span>}</p>
      <p><b>aboutMe</b>:{editMode?<Field name={"profileData.aboutMe"} component="input" type="text"/>:<span>{props.aboutMe}</span>}</p>
      <p>{checkbox}</p>
      <button type="submit">Submit</button>
    </form>
  );
};


ContactForm = reduxForm({
  form: "ContactForm"
})(ContactForm);


const mapStateToProps = (state) => {
  return {
    profileData: state.profilePage.profileData,
    editMode: state.profilePage.editMode,
    isAuth: state.authPage.isAuth,
    authUserId: state.authPage.userInfo.userId,
    status: state.profilePage.status,
    aboutMe:state.profilePage.profileData.aboutMe
  };

};

const mapDispatchToProps = (dispatch) => {
  return {
    onEditClick: () => dispatch(toggleEditMode()),
    onLookingForAJobSearch: (event) => dispatch(LookForAJobSearch(event))


  };

};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

