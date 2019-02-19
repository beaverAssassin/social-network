import React from 'react';
import mainphoto from '../../../../mainphoto.jpg';
import style from './Post.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {ADD_MESSAGE, DISLIKES_COUNT, LIKES_COUNT} from "../../../../actiontypes";
import {connect} from "react-redux";
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




// export default Post;




















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
