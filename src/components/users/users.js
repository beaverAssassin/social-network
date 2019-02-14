import React from 'react';
import styles from './users.module.css';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {setStatus, statuses} from "../../redux/usersReducer";
import axios from 'axios';




const Users = ({users=[], status,setStatus}) => {


    if (status == statuses.NOT_INITIALIZED){

        // axios.get('users').then(r => alert("users receaved"));
        axios.get('users').then(r => {

            setStatus(statuses.SUCCES);
        });

        return <span>...</span>
    }

    return <div>

            {!users.length && <span>users not found</span>}

            {
                users.map(u => <div className={styles.user}>
                    <div>
                        <img src={u.photo}/>
                    </div>
                    <br/>
                    <div>
                        <NavLink to={`users/${u.id}`}>{u.name}</NavLink>
                    </div>
                </div>)
            }
        </div>



}




const mapStateToProps = (state)=>({
    users: state.usersPage.items,
    status:state.usersPage.status
})

const mapDispatchToProps =(dispatch)=>({
    setStatus:(status)=>{dispatch(setStatus(status))
    }

})
export default connect(mapStateToProps,mapDispatchToProps)(Users);