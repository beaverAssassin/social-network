import React from 'react';
import {NavLink} from "react-router-dom";
import style from './dialogs.module.css';
import {connect} from "react-redux";
import {setCurrentUserById} from "../../redux/dialogPageReducer";

const Dialog = (props) => {

    let currentUserId = props.dialogs.currentUserId;
    let getDialogs = props.dialogs.users.map((el) => {

        // let setCurrentUser = props.dispatch({
        //     type:SET_CURRENTUSER,
        //     id:el.id
        // });

        let isUserSelected = currentUserId === el.id;
        let cssClasses = isUserSelected ? style.selected : '';

        return <li onClick={() => {
            props.selectCurrentUser(el)

        }}><NavLink className={cssClasses} to={"/dialogs/"+ el.name}>{el.name}</NavLink></li>
    })

    return (

        <ul>{getDialogs}</ul>

    )
}

const mapDispatchToProps =(dispatch)=>{
    debugger
    return {
        selectCurrentUser: (el) => {
            let action = setCurrentUserById(el);
            dispatch(action);
        },


    }


}


const ConnectedDialog = connect(null,mapDispatchToProps)(Dialog);



export default ConnectedDialog;

//
//