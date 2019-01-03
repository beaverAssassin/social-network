import React from 'react';
import style from './MyPosts.module.css';
import Post from "./post/Post";
import {ADD_MESSAGE} from "../../../actiontypes";


let MyPosts = (props) => {
    let message = React.createRef();//??????????????????????????? задать вопрос аналог getelementByid


    let messageTags = props.myPosts.map((el)=>{

        return  <Post text={el.text} likesCount={el.likesCount}/>
    });


    return (

        <div className={style.my_notes}>
            <h3>Мои записи</h3>

            <textarea   ref={message}  cols="80" rows="5"> Что у вас нового  </textarea><br/>

            <button onClick={() => {

            props.dispatch({
                type: ADD_MESSAGE,
                text: message.current.value,
                likesCount: 0
            });
            message.current.value = '';
        }
        }className={style.sentForm}>


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