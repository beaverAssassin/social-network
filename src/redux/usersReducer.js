const SET_USERS ='USERS/SET_USERS';
const SET_STATUS ='USERS/SET_STATUS';


export const statuses={
    NOT_INITIALIZED:'NOT_INITIALIZED',
    ERROR:'ERROR',
    INPROGRESS:'INPROGRESS',
    CAPTCHAREQUIRED:'CAPTCHAREQUIRED',
    SUCCES:'SUCCES'
}


let stateForUsers = {
    status: statuses.NOT_INITIALIZED,
    users: [{photo:}]

}


export const setUsers =(users)=>({type:SET_USERS, users});

const UsersReducer=(state=stateForUsers,action)=>{
    switch (action.type){
        case SET_STATUS:{
            return{
                ...state,
                status:action.status
            }

        }
        case SET_USERS:{
            return{
                ...state,
                users:action.users
            }
        }
        default:{
            return state
        }
    }
}

export default UsersReducer;
