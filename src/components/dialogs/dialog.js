import React from 'react';


const Dialog = (props) => {
const getDialogs = props.dialogs.map((el)=>{
    debugger
    return <li>{el.name}</li>
})

    return (

        <div>{getDialogs}</div>

    )
}


export default Dialog;


