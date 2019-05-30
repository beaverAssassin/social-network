import React from 'react';
import style from './dialogs.module.css';
import Messages from "./messages/messages";
import Dialog from "./dialog";
import { withRouter} from "react-router-dom";
import {connect} from "react-redux";


let Dialogs = (props) => {

    return (
        <div className={style.wrap_dialogs}>
            <div className={style.dialogs}>
                <h3>DIALOGS</h3>
                <Dialog match={props.match.params.dialogId} dialogs={props.dialogsPage} />
            </div>

            <div className={style.messages_container}>
                <div className={style.wrap_messages}>
                    <Messages  dialogs={props.dialogsPage}/>
                </div>

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


export default withRouter(ConnectedDialogs);