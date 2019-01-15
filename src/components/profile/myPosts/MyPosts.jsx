import React from 'react';
import style from './MyPosts.module.css';
import Post from "./post/Post";
import {ADD_MESSAGE, WRITE_TEXTAREA_VALUE} from "../../../actiontypes";


let MyPosts = (props) => {



    console.log(props.currentTextAreaValue);

    //let message = React.createRef();??????????????????????????? задать вопрос аналог getelementByid рефеаральная ссылка

    let onChangeTextarea = (event) => {

        props.dispatch({
            type: WRITE_TEXTAREA_VALUE,
            symbol: event.target.value
        })
    }


    let messageTags = props.myPosts.map((el) => {
        return <Post text={el.text} postId={el.id} likesCount={el.likesCount} dislikeCount={el.dislikeCount} dispatch={props.dispatch}/>
    });


    return (

        <div className={style.my_notes}>
            <h3>Мои записи</h3>

            <textarea value={props.currentTextAreaValue} placeholder="to write some else" onChange={onChangeTextarea}
                      cols="80" rows="5"></textarea><br/>

            <button onClick={() => {
                props.dispatch({
                    type: ADD_MESSAGE,
                    text: props.currentTextAreaValue,
                    likesCount: props.currentTextAreaValue.length
                }); }  } className={style.sentForm}>





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


export default MyPosts;