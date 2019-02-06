import React from 'react';
import {connect} from "react-redux";
import {SetMessage, SetStatus, start, statuses} from "../../redux/thunkReducer";


const Thunk = (props) => {

    return (
        <>

            <button onClick={props.start}>Start</button>
            <br/>
            {props.status}<br/>
            {props.message}
        </>

    )
}

const mapStateToProps = (state) => {
    return {
        status: state.thunkPage.status,
        message: state.thunkPage.message
    }
}


const mapDispatchToProps = (dispatch) => ({

    // setStatus: (status) => dispatch(SetStatus(status)),
    // setMessage: (message) => dispatch(SetMessage(message)),
    start: () => dispatch(start)
})


export default connect(mapStateToProps, mapDispatchToProps)(Thunk)
