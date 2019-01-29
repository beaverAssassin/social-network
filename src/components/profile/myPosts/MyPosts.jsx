import React from 'react';
import style from './MyPosts.module.css';
import Post from "./post/Post";
import {ADD_MESSAGE, LIKES_COUNT, WRITE_TEXTAREA_VALUE} from "../../../actiontypes";
import {connect} from "react-redux";
import {
    addMessageByClick,
     profileDisLikesCalculate, profilelikesCalculate,
    profileOnChangeTextArea
} from "../../../redux/profilePageReducer";


let MyPosts = (props) => {



    console.log(props.profilePage.currentTextAreaValue);
    //let message = React.createRef();??????????????????????????? задать вопрос аналог getelementByid рефеаральная ссылка
    let onChangeTextarea = (event) => {
        props.onchangeTextarea(event)
    }


    let messageTags = props.profilePage.myPosts.map((el) => {

        return <Post key = {el.id} text={el.text} postId={el.id} likesCount={el.likesCount} dislikeCount={el.dislikeCount} likesCalc={props.likesCalc} dislikeCalc={props.dislikeCalc}/>
    });


    return (
        <div className={style.my_notes}>
            <h3>Мои записи</h3>
            <textarea value={props.profilePage.currentTextAreaValue} placeholder="to write some else" onChange={onChangeTextarea}
                      cols="80" rows="5"></textarea><br/>
            <button onClick={() => {
                props.addMessage(props.profilePage.currentTextAreaValue)
                }  } className={style.sentForm}>





            {/*<button onClick={() => {props.addMessage(message.current.value, 0);*/}
                {/*message.current.value = '';}} className={style.sentForm}>*/}
                Отправить
            </button>

            <div className={style.posts}>
                {messageTags}
                {/*<Post message={messageTags[0]} likesCount="15"/>*/}
                {/*<Post message={messageTags[1]} likesCount="20"/>*/}
                {/*<Post message={messageTags[2]} likesCount="25"/>*/}
                {/*<Post message={messageTags[3]} likesCount="25"/>*/}

            </div>
        </div>

    )

}

const mapStateToProps = (state)=>{
    return{
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch)=> {
    debugger
    return{
        addMessage:(currentTextAreaValue) => {
            let action = addMessageByClick(currentTextAreaValue);
            dispatch(action);
        },
        onchangeTextarea:(event)=>{
            let action = profileOnChangeTextArea(event);
            dispatch(action);
        },
        likesCalc: (postId)=>{
            let action = profilelikesCalculate(postId);
            dispatch(action);
        },
        dislikeCalc:(postId)=>{
            let action = profileDisLikesCalculate(postId);
            dispatch(action)

        }


    }
}



const ConnectedMyPosts = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default ConnectedMyPosts;

