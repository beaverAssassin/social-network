import React from 'react';
import style from './dialogs.module.css';
import Messages from "./messages/messages";
import Dialog from "./dialog";
import {Route} from "react-router-dom";
import {connect} from "react-redux";


let Dialogs = (props) => {
debugger
    return (
        <div className={style.wrap_dialogs}>
            <div className={style.dialogs}>
                <h3>DIALOGS</h3>
                <Dialog dialogs={props.dialogsPage} dispatch={props.dispatch}/>
            </div>

            <div className={style.messages_container}>
                <div className={style.wrap_messages}>
                    <Messages messagesTexts={props.dialogsPage.messagesTexts}/>
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

const mapStateToProps =(state)=>{
    return{

        dialogsPage : state.dialogsPage

    }
}

const mapDispatchToProps =(dispatch)=>{
    return{

        dispatch
    }

}

const ConnectedDialogs = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default ConnectedDialogs;