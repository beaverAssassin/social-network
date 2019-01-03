import React from 'react';
import mainphoto from '../../../../mainphoto.jpg';
import style from './Post.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
let Post = (props) => {
    console.log(props.message);
    return (

        <div className={style.post}>
            <img src={mainphoto} alt=""/>

            {props.text}
            <div>
                <FontAwesomeIcon icon="heart" />{props.likesCount}
            </div>
        </div>



    )
}


export default Post;