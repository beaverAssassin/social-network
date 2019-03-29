import React from 'react';
import styles from './users.module.css';
import {connect} from "react-redux";
import {getUsers, statuses} from "../../redux/usersReducer";


const Users = ({users = [],status,getUsers}) => {


    if (status == statuses.NOT_INITIALIZED) {
        getUsers();
        return <span>...</span>
    }

    return (
        <>
            {!users.length && <span>users not found</span>}
            {
                users.map(u => <div className={styles.user}>
                    <div>

                        <img src={u.photos}/>
                        {u.name}     status:{u.status}

                    </div>

                    {/*<NavLink to={`users/${u.id}`}>ssss</NavLink>*/}
                </div>)
            }
        </>
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