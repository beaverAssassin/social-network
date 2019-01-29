
const addMessage ="PROFILE/ADD_MESSAGE";
const writeTextareaValue ="PROFILE/WRITE_TEXTAREA_VALUE";
const likesCalculate = "PROFILE/LIKES_CALCULATE";
const disLikesCalculate = "PROFILE/DISLIKES_CALCULATE";


let initialStateForProfilePage = {

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
    let stateCopy = {...state};
    switch (action.type) {
        case addMessage:
            stateCopy.myPosts.unshift({text: action.text, likesCount: action.likesCount,dislikeCount: action.dislikeCount});
            stateCopy.currentTextAreaValue = "";
            return stateCopy;
        case writeTextareaValue:
            debugger
            stateCopy.currentTextAreaValue = action.symbol;
            return stateCopy;
        case likesCalculate:
            const currentPostsPlus = stateCopy.myPosts.filter((el) => {
                return el.id === action.postId;
            })
            currentPostsPlus[0].likesCount++;
            return stateCopy;
        case disLikesCalculate:
            const currentPostsSubtr = stateCopy.myPosts.filter((el) => {
                return el.id === action.postId;
            })
            currentPostsSubtr[0].dislikeCount++;
            return stateCopy;
        default:
            return state;

    }

}

export default profilePageReducer;

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

export const profileOnChangeTextArea=(event)=>{
    debugger
    return{
        type: writeTextareaValue,
        symbol: event.target.value
    }
}

export const profilelikesCalculate=(postId)=>{
    return{
        type: likesCalculate,
        postId:postId
    }
}

export const profileDisLikesCalculate=(postId)=>{
    return{
        type: disLikesCalculate,
        postId:postId
    }
}