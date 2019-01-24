
const addMessage ="PROFILE/ADD_MESSAGE'"


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
        case 'ADD_MESSAGE':
            stateCopy.myPosts.unshift({text: action.text, likesCount: action.likesCount,dislikeCount: action.dislikeCount});
            stateCopy.currentTextAreaValue = "";
            return stateCopy;
        case 'WRITE_TEXTAREA_VALUE':
            debugger
            stateCopy.currentTextAreaValue = action.symbol;
            return stateCopy;
        case 'LIKES_COUNT':
            debugger
            const currentPostsPlus = stateCopy.myPosts.filter((el) => {
                return el.id === action.postId;
            })
            currentPostsPlus[0].likesCount++;
            return stateCopy;
        case 'DISLIKES_COUNT':
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