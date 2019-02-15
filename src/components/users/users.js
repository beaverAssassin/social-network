import React from 'react';
import styles from './users.module.css';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {getUsers, statuses} from "../../redux/usersReducer";
import axios from "../../dal/axios-instance";


const Users = ({users = [],status,getUsers}) => {


    if (status == statuses.NOT_INITIALIZED) {
        getUsers();
        return <span>...</span>
    }

    return (
        <div>
            {!users.length && <span>users not found</span>}
            {
                users.map(u => <div className={styles.user}>
                    <div>

                        {/*<img src={u.photo}/>*/}
                        {u.name}     status:{u.status}

                    </div>

                    {/*<NavLink to={`users/${u.id}`}>ssss</NavLink>*/}
                </div>)
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    users: state.usersPage.items,
    status: state.usersPage.status
})

const mapDispatchToProps = (dispatch) => ({

    getUsers:() => {
        dispatch(getUsers())
    }


})
export default connect(mapStateToProps, mapDispatchToProps)(Users);