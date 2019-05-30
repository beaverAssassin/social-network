import React from "react";
import { NavLink } from "react-router-dom";
import style from "./dialogs.module.css";
import { connect } from "react-redux";
import { selectDialogById, } from "../../redux/dialogPageReducer";

const Dialog = (props) => {


  let currentUserId = props.dialogs.currentUserId;
  let idFromUrl = +props.match;
  let getDialogs = props.dialogs.messagesTexts.map((el) => {
    let isUserSelected = idFromUrl === el.id;

    let cssClasses = isUserSelected ? style.selected : "";

    let unsyncState = (!currentUserId && !!idFromUrl) || (!!currentUserId && !!idFromUrl && idFromUrl !== currentUserId.id);
    if (unsyncState) {
      props.selectDialog(idFromUrl);
      return (
        <div>async</div>
      );
    }
    return <NavLink to={"/content/dialogs/" + el.id} key={el.key} className={style.NavLink}>
      <li className={`${style.lii} ${cssClasses}`}>{el.name}</li>
    </NavLink>;
  });

  return (
    <ul>{getDialogs}</ul>
  );
};


const mapDispatchToProps = (dispatch) => {

  return {
    selectDialog: (id) => {
      let action = selectDialogById(id);
      dispatch(action);
    }
  };
};


const ConnectedDialog = connect(null, mapDispatchToProps)(Dialog);
export default ConnectedDialog;

