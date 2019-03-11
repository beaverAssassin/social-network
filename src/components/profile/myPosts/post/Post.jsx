import React from 'react';
import style from './Post.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
let Post = (props) => {

    return (

        <div className={style.post}>
            <img src="https://s.gamer-info.com/gl/f/a/l/l/fallout-2_w240.jpg" alt=""/>

            {props.text}
            <div>
                <FontAwesomeIcon  icon="heart" onClick={() => {
                    props.likesCalc(props.postId)
                }}  />{props.likesCount}

                <FontAwesomeIcon className={style.iconThumbDown} icon="thumbs-down" onClick={()=>{
                    props.dislikeCalc(props.postId)

                }}/>{props.dislikeCount}
            </div>
        </div>



    )
}






export default Post


