import React from 'react';
import style from './dialogs.module.css';
import Messages from "./messages/messages";
import Dialog from "./dialog";
import {Route} from "react-router-dom";




let Dialogs = (props) => {

    return (
        <div className={style.wrap_dialogs}>


            <div className={style.dialogs}>
                <h3>DIALOGS</h3>
                <ul>
                    <Dialog dialogs={props.state.dialogs}/>

                </ul>
            </div>

            <div className={style.messages_container}>
                <div className={style.wrap_messages}>

                    <Messages  messagesTexts={props.state.messagesTexts}/>
                    {/*<Route exact path='/{props.currentDialogId}' render={() => <Messages currentMessagesById={props.currentMessagesById} filterMessages={props.filterMessages}/>}/>*/}
                </div>
                {/*<div className={style.wrap_messages}>*/}
                    {/*<div className={style.user_img}><p className={style.user_name}>Me</p></div>*/}
                    {/*<Messages/>*/}
                {/*</div>*/}
                {/*<div className={style.wrap_messages}>*/}
                    {/*<div className={style.user_img}><span className={style.user_name}>Dmitryi</span></div>*/}
                    {/*<Messages/>*/}
                {/*</div>*/}
                {/*<div className={style.wrap_messages}>*/}
                    {/*<div className={style.user_img}><span className={style.user_name}>Me</span></div>*/}
                    {/*<Messages/>*/}
                {/*</div>*/}
            </div>
        </div>

    )
}
export default Dialogs;