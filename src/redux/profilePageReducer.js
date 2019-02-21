import axios from "../dal/axios-instance";

const GET_PROFILE = 'PROFILE/GET_PROFILE';
const addMessage ="PROFILE/ADD_MESSAGE";
const writeTextareaValue ="PROFILE/WRITE_TEXTAREA_VALUE";
const likesCalculate = "PROFILE/LIKES_CALCULATE";
const disLikesCalculate = "PROFILE/DISLIKES_CALCULATE";




export const getProfileData = (profileData)=>({type:GET_PROFILE,profileData})



export const addMessageByClick =(currentTextAreaValue)=>{
    if(currentTextAreaValue === ""){
        var av = Number(currentTextAreaValue.length);
    }
    else{
        av = currentTextAreaValue.length-2;
    }
    return {
        type: addMessage,
        text: currentTextAreaValue,
        likesCount:currentTextAreaValue.length,
        dislikeCount: av
    }
}
export const profileOnChangeTextArea=(event)=>({type: writeTextareaValue,symbol: event.target.value})
export const profilelikesCalculate=(postId)=>({type:likesCalculate,postId})
export const profileDisLikesCalculate=(postId)=>({type: disLikesCalculate,postId})



export const giveInfoProfile=()=>(dispatch)=>{

    axios.get('profile/16').then((res)=>{

        dispatch(getProfileData(res.data))

    });



}



let initialStateForProfilePage = {
    profileData:"",

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
            stateCopy.myPosts.unshift({text: action.text, likesCount: action.likesCount,dislikeCount: action.dislikeCount});
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
            stateCopy.profileData= action.profileData;
            return stateCopy;
        default:
            return state;

    }

}

export default profilePageReducer;

