import axios from "../dal/axios-instance";

const SET_USERS = 'USERS/SET_USERS';
const SET_STATUS = 'USERS/SET_STATUS';


export const statuses = {
    NOT_INITIALIZED: 'NOT_INITIALIZED',
    ERROR: 'ERROR',
    INPROGRESS: 'INPROGRESS',
    CAPTCHAREQUIRED: 'CAPTCHAREQUIRED',
    SUCCES: 'SUCCES'
}


let stateForUsers = {

    status: statuses.NOT_INITIALIZED,
    items: []

}


export const setUsers = (users) => ({type: SET_USERS, users});
export const setStatus = (status) => ({type: SET_STATUS, status});


export const getUsers = (dispatch) => (dispatch) => {
    dispatch(setStatus(statuses.INPROGRESS));
    axios.get('users?count=29').then(r => {
        dispatch(setStatus(statuses.SUCCESS));
        dispatch(setUsers(r.data.items));
    });


}


const UsersReducer = (state = stateForUsers, action) => {
    switch (action.type) {
        case SET_STATUS: {

            return {
                ...state,
                status: action.status
            }

        }
        case SET_USERS: {

            return {
                ...state,
                items: action.users
            }
        }
        default: {
            return state
        }
    }
}

export default UsersReducer;
