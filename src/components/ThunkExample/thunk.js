import React from 'react';
import {connect} from "react-redux";
import {SetMessage, SetStatus, start, statuses} from "../../redux/thunkReducer";

import putToTemplate1 from "../../HOCs/putComponent";
import isIEHoc from "../../HOCs/isIEHoc";
import {compose} from "redux";


const Thunk = (props) => {

    return (
        <>
            {props.isChrome && 'CHROM'}
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


const abc = connect(mapStateToProps, mapDispatchToProps)(Thunk);

let composedHoc = compose(
    isIEHoc,putToTemplate1);



export default composedHoc(abc);