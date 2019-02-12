import React from 'react';
import styles from './users.module.css';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";





const Users = ({users}) => {
debugger;
    return (
        <div>
            {!users.length && <span>users not found</span>}

            {
                users.map(u => <div className={styles.user}>
                    <div>
                        <img src={u.photo}/>
                    </div>
                    <div>
                        <NavLink to={`users/${u.id}`}>{u.name}</NavLink>
                    </div>
                </div>)
            }
        </div>
    )


}




const mapStateToProps = (state)=>({
    users: state.usersPage.users
})

const mapDispatchToProps =(dispatch)=>({

})
export default connect(mapStateToProps,mapDispatchToProps)(Users);