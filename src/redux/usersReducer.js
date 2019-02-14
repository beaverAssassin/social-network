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
    items: [{photo:'https://gc.onliner.by/images/logo/onliner_logo.v3.png?token=1549977790',
    name:'adddd',
    id:12
    }]
}


export const setUsers =(users)=>({type:SET_USERS, users});
export const setStatus =(status)=>({type:SET_STATUS, status});

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
