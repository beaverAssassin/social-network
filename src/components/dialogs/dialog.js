import React from 'react';
import {NavLink, withRouter} from "react-router-dom";
import style from './dialogs.module.css';
import {connect} from "react-redux";
import {selectDialogById, setCurrentUserById} from "../../redux/dialogPageReducer";

const Dialog = (props) => {

debugger

    let currentUserId = props.dialogs.currentUserId;
    let idFromUrl = + props.match;
    let getDialogs = props.dialogs.messagesTexts.map((el) => {
        let isUserSelected = idFromUrl === el.id;



        let cssClasses = isUserSelected ? style.selected : '';

         let unsyncState = (!currentUserId && !!idFromUrl) || (!!currentUserId && !!idFromUrl && idFromUrl != currentUserId.id) ;

         if (unsyncState) {
             props.selectDialog(idFromUrl);
            return (
                <div>async</div>
            )
        }

        return <NavLink to={"/dialogs/" + el.id}   key={el.key} className={style.NavLink}>
            <li className={cssClasses}>{el.name}</li>
        </NavLink>
    })
    return (
        <ul>{getDialogs}</ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {

        selectDialog: (id) => {
            let action = selectDialogById(id);
            dispatch(action);
        }
    }
}


const ConnectedDialog = connect(null, mapDispatchToProps)(Dialog);
export default  ConnectedDialog;

// const Dialog = (props) => {
//
//     let currentUserId = props.dialogs.currentUserId;
//     let getDialogs = props.dialogs.users.map((el) => {
//
//         // let setCurrentUser = props.dispatch({
//         //     type:SET_CURRENTUSER,
//         //     id:el.id
//         // });
//
//         let isUserSelected = currentUserId === el.id;
//         let cssClasses = isUserSelected ? style.selected : '';
//
//         return <li onClick={() => {
//             props.selectCurrentUser(el)
//
//         }}><NavLink className={cssClasses} to={"/dialogs/"+ el.name}>{el.name}</NavLink></li>
//     })
//
//     return (
//
//         <ul>{getDialogs}</ul>
//
//     )
// }
//
// const mapDispatchToProps =(dispatch)=>{
//
//     return {
//         selectCurrentUser: (el) => {
//             let action = setCurrentUserById(el);
//             dispatch(action);
//         }
//
//
//     }
//
//
// }