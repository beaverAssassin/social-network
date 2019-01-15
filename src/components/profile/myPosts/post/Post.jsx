import React from 'react';
import mainphoto from '../../../../mainphoto.jpg';
import style from './Post.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {LIKES_COUNT_MINUS, LIKES_COUNT_PLUS} from "../../../../actiontypes";
let Post = (props) => {

    // let a = 0;
    //
    // let countLikes = ()=> {
    //      a++;
    //    console.log(a);
    //
    //     };

// console.log(props.currentlikesCount);
    return (

        <div className={style.post}>
            <img src={mainphoto} alt=""/>

            {props.text}
            <div>
                <FontAwesomeIcon  icon="heart" onClick={() => {
                    props.dispatch({
                        type: LIKES_COUNT_PLUS,
                        postId: props.postId
                    })
                }}  />{props.likesCount}

                <FontAwesomeIcon className={style.iconThumbDown} icon="thumbs-down" onClick={()=>{
                    props.dispatch({
                        type:LIKES_COUNT_MINUS,
                        postId: props.postId
                    })
                }}/>{props.dislikeCount}
            </div>
        </div>



    )
}


export default Post;

/*

    return (

        <div className={style.post}>
            <img src={mainphoto} alt=""/>

            {props.text}
            <div>
                <FontAwesomeIcon icon="heart"  />{props.likesCount}
            </div>
        </div>



    )
}*/
