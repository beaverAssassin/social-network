import React from 'react';
import mainphoto from '../../../../mainphoto.jpg';
import style from './Post.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {ADD_MESSAGE, DISLIKES_COUNT, LIKES_COUNT} from "../../../../actiontypes";
import {connect} from "react-redux";
let Post = (props) => {

    // let a = 0;
    //
    // let countLikes = ()=> {
    //      a++;
    //    console.log(a);
    //
    //     };

console.log(props.dispatch);
    debugger
    return (

        <div className={style.post}>
            <img src={mainphoto} alt=""/>

            {props.text}
            <div>
                <FontAwesomeIcon  icon="heart" onClick={() => {
                    props.likesCo(props.postId)
                }}  />{props.likesCount}

                <FontAwesomeIcon className={style.iconThumbDown} icon="thumbs-down" onClick={()=>{
                    props.dispatch({
                        type:DISLIKES_COUNT,
                        postId: props.postId
                    })
                }}/>{props.dislikeCount}
            </div>
        </div>



    )
}

const mapDispatchToProps =(dispatch)=> {
    return {
        likesCo: (postId) => {


            dispatch({
                type: LIKES_COUNT,
                postId: postId


            })


        }
    }

}


const ConnectedMyPost = connect(null, mapDispatchToProps)(Post)

export default ConnectedMyPost;




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
