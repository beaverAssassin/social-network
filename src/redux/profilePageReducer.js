import axios from "../dal/axios-instance";

const GET_PROFILE = 'PROFILE/GET_PROFILE';
const addMessage = "PROFILE/ADD_MESSAGE";
const writeTextareaValue = "PROFILE/WRITE_TEXTAREA_VALUE";
const likesCalculate = "PROFILE/LIKES_CALCULATE";
const disLikesCalculate = "PROFILE/DISLIKES_CALCULATE";
const EDIT_MODE = "PROFILE/EDIT_MODE";
const CHANGE_VALUE = "PROFILE/CHANGE_VALUE";
const LOOK_JOB = "PROFILE/LOOK_JOB";
const GET_PROFILE_STATUS ="PROFILE/GET_PROFILE_STATUS"


export const getProfileData = (profileData) => ({type: GET_PROFILE, profileData})
export const addMessageByClick = (currentTextAreaValue) => {
    if (currentTextAreaValue === "") {
        var av = Number(currentTextAreaValue.length);
    }
    else {
        av = currentTextAreaValue.length - 2;
    }
    return {
        type: addMessage,
        text: currentTextAreaValue,
        likesCount: currentTextAreaValue.length,
        dislikeCount: av
    }
}
export const profileOnChangeTextArea = (event) => ({type: writeTextareaValue, symbol: event.target.value})
export const profilelikesCalculate = (postId) => ({type: likesCalculate, postId})
export const profileDisLikesCalculate = (postId) => ({type: disLikesCalculate, postId})
export const toggleEditMode = () => ({type: EDIT_MODE})
export const onChangeProfileEdit = (value, key) => ({type: CHANGE_VALUE, value, key})
export const LookForAJobSearch = (event) => ({type: LOOK_JOB, event})
export const getProfileStatus = (data)=>({type:GET_PROFILE_STATUS, data})

export const onSaveInfoProfile = () => (dispatch, getState) => {
    axios.put('profile', getState().profilePage.profileData)
        .then((res) => {

        });
debugger
    axios.put('profile/status', {status:getState().profilePage.status})
        .then((res) => {

        });

    dispatch(toggleEditMode());

}


export const giveInfoProfile = () => (dispatch) => {

    axios.get('profile/status/16').then(result => {
        dispatch(getProfileStatus(result.data))
    });

    axios.get('profile/16').then((res) => {
        dispatch(getProfileData(res.data))
    });
}

let initialStateForProfilePage = {
    profileData: "",
    editMode: false,
    status:"",
    myPosts: [
        {
            id: 1,
            text: 'Hi,how are you?',
            likesCount: 15,
            dislikeCount: 3
        },
        {
            id: 2,
            text: 'yo',
            likesCount: 18,
            dislikeCount: 1
        },
        {
            id: 3,
            text: 'good morning',
            likesCount: 13,
            dislikeCount: 2
        },
        {
            id: 4,
            text: 'bye',
            likesCount: 12,
            dislikeCount: 0
        }

    ]
}


const profilePageReducer = (state = initialStateForProfilePage, action) => {
    let stateCopy;
    switch (action.type) {
        case addMessage:
            stateCopy = {...state}
            stateCopy.myPosts.unshift({
                text: action.text,
                likesCount: action.likesCount,
                dislikeCount: action.dislikeCount
            });
            stateCopy.currentTextAreaValue = "";
            return stateCopy;
        case writeTextareaValue:
            stateCopy = {...state}
            stateCopy.currentTextAreaValue = action.symbol;
            return stateCopy;
        case likesCalculate:
            stateCopy = {...state}
            const currentPostsPlus = stateCopy.myPosts.filter((el) => {
                return el.id === action.postId;
            })
            currentPostsPlus[0].likesCount++;
            return stateCopy;
        case disLikesCalculate:
            stateCopy = {...state}
            const currentPostsSubtr = stateCopy.myPosts.filter((el) => {
                return el.id === action.postId;
            })
            currentPostsSubtr[0].dislikeCount++;
            return stateCopy;
        case GET_PROFILE:
            stateCopy = {...state}
            stateCopy.profileData = action.profileData;
            return stateCopy;
        case EDIT_MODE:
            stateCopy = {...state}
            stateCopy.editMode = !state.editMode
            return stateCopy;
        case CHANGE_VALUE:

            stateCopy = {...state, profileData: {...state.profileData}}
            stateCopy.profileData.contacts[action.key] = action.value;
            stateCopy.profileData[action.key] = action.value;
            stateCopy.status = action.value;

            debugger

            return stateCopy;
        case LOOK_JOB:
            stateCopy = {...state, profileData: {...state.profileData}}
            stateCopy.profileData.lookingForAJob = action.event;
            stateCopy.profileData.lookingForAJobDescription = "ищу работу ";
            return stateCopy;
        case GET_PROFILE_STATUS:
            stateCopy = {...state,status:{...state.status}};
            stateCopy.status = action.data;
            return stateCopy
        default:
            return state;

    }

}


export default profilePageReducer;

