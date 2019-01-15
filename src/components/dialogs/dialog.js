import React from 'react';
import {NavLink} from "react-router-dom";
import style from './dialogs.module.css';
import {SET_CURRENTUSER} from "../../actiontypes";


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
            props.dispatch({
                type: SET_CURRENTUSER,
                id:el.id
            });
        }}><NavLink className={cssClasses} to={"/dialogs/"+ el.name}>{el.name}</NavLink></li>
    })

    return (

        <ul>{getDialogs}</ul>

    )
}


export default Dialog;

//
//