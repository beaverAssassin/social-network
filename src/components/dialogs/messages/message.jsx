import React from 'react';
import style from './message.module.css';


let Message = (props) => {

    return (
        props.dialogs.currentUserId ?
        <div className={style.message}>
            <span><b>{props.dialogs.currentUserId.name}</b></span><br/>
            <img className={style.avatarImage} src={props.dialogs.currentUserId.imageUrl}/>
            <span className={style.messageText}>{props.dialogs.currentUserId.text}</span>


        </div> : null

    )
}
export default Message