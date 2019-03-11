import React from "react"
import {Field, reduxForm} from "redux-form";


let ContactForm = (props)=>{

    // let onSubmit =value=>{
    //     debugger
    //     console.log(values);
    //
    // }
    const { handleSubmit,pristine,reset,submitting,status } = props
debugger
    return (

    <form onSubmit={handleSubmit}>
       <Field name ="status" component="input"  type="text"/><br/>
        <Field name ="aboutMe" component="input"  type="text"/>

    </form>
    )

}

ContactForm = reduxForm({

    form:'ContactForm'
})(ContactForm)

export default ContactForm;