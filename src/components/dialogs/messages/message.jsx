import React from 'react';
import style from './message.module.css';


let Message = (props) => {

    return (
        <div className={style.message}>
            <img src="https://via.placeholder.com/50"/>


            <span>{props.name}</span>:
            <span>{props.text}</span>
            <span>id="{props.id}"</span>

        </div>

    )
}
export default Message