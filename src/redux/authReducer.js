
export const AUNTIFICATION ='AUTHREDUCER/AUNTIFICATION';
const authActionCreator = ()=>({type:AUNTIFICATION, isLoggedIn:true })

export  const loginThunk=()=>(dispatch)=>{
dispatch(authActionCreator())
}


// export  const loginThunk=()=>(dispatch)=>{
//     setTimeout(()=>{
//         dispatch(authActionCreator())
//     }, 1000)
//
// }



let initialStateForAuthPAge = {
     authUser:1,
     name:'Vasya',
     avatar:'https://s.gamer-info.com/gl/f/a/l/l/fallout-2_w240.jpg',
    isLoggedIn:false



}


const AuthReducer = (state = initialStateForAuthPAge, action) => {
    let stateCopy = { ...state }
    switch (action.type) {
        case AUNTIFICATION:

            stateCopy.isLoggedIn = action.isLoggedIn;
            return stateCopy;
        // case LOGIN_OUT:
        //     stateCopy.isLoggedIn = action.loginOut;

            // return stateCopy;
        default:
            return state;
    }
}
export default AuthReducer;




