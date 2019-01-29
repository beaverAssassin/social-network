import React from 'react';
import style from './dialogs.module.css';
import Messages from "./messages/messages";
import Dialog from "./dialog";
import {Route} from "react-router-dom";
import {connect} from "react-redux";


let Dialogs = (props) => {

    return (
        <div className={style.wrap_dialogs}>
            <div className={style.dialogs}>
                <h3>DIALOGS</h3>
                <Dialog dialogs={props.dialogsPage} />
            </div>

            <div className={style.messages_container}>
                <div className={style.wrap_messages}>
                    <Messages dialogs={props.dialogsPage}/>
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



const ConnectedDialogs = connect(mapStateToProps,null)(Dialogs);


export default ConnectedDialogs;