import React from 'react';
import style from './message.module.css';
import Message from "./message";


const Messages = (props) => {

     let messagesComponents = props.messagesTexts.map((el) => {
         debugger
        return <Message text ={el.text} name ={el.name} id ={el.id}/>
     });

     return(
        <div>
            {messagesComponents}
        </div>
    );

}



export default Messages;


