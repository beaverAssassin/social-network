const SET_STATUS = "THUNKEXAMPLE/SET_STATUS";
const SET_MESSAGE = "THUNKEXAMPLE/SET_MESSAGE";


export const SetStatus = (status) => ({type: SET_STATUS, status});
export const SetMessage = (message) => ({type: SET_MESSAGE, message});


export const statuses = {
    NOT_INITIALIZED: "NOT_INITIALIZED",
    ERROR: "ERROR",
    INPROGRESS: "INPROGRESS",
    SUCCES: "SUCCES"
}


const intialStateForThunkExampleComponent = {

    status: statuses.NOT_INITIALIZED,
    message: ''


}


const thunkExampleReducer = (state = intialStateForThunkExampleComponent, action) => {


    switch (action.type) {
        case SET_STATUS: {

            return {
                ...state,
                status: action.status
            }
        }
        case SET_MESSAGE: {

            return {
                ...state,
                message: action.message
            }
        }
        default: {
            return state
        }


    }
}


 export const start = (dispatch) => {


    dispatch(SetStatus(statuses.INPROGRESS))

    setTimeout(() => {
        dispatch(SetStatus(statuses.SUCCES));
        dispatch(SetMessage("1212df"));


    }, 3000)

}


export default thunkExampleReducer;

