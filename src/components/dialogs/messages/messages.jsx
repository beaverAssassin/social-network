import React from 'react';
import style from './message.module.css';
import Message from "./message";


const Messages = (props) => {

     let messages = props.dialogs.messagesTexts.map(el => {

        return <Message dialogs ={props.dialogs} text ={el.text} name ={el.name} id ={el.id} url={el.imageUrl}/>
     });

     return(
          <div>
              <Message dialogs ={props.dialogs} />
             {/*{messages}*/}
         </div>

    );

}



export default Messages;


