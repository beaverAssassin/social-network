


let initialStateForAuthPAge = {

    userId:1,
    name:'Vasya',
    avatar:'https://s.gamer-info.com/gl/f/a/l/l/fallout-2_w240.jpg',
    isLoggenIn:True



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
                debugger
                return el.id === action.postId;
            })
console.log(currentPostsPlus[0]);
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

