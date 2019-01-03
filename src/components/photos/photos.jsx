import React from 'react';
import PropTypes from 'prop-types';

import styles from "./photos.module.css";
import {ADD_PHOTO} from "../../actiontypes";


 const Photos = (props) => {




 // let addPhoto = props.addPhoto;


     // let addPhoto = props.dispatch({
     //     type:ADD_PHOTO,
     // });


     let url = React.createRef();
     let images = null;
     if(!!props.imagesUrls){
     images = props.imagesUrls.map((url) => {

     return <img  src={url.url} />;
     })




     }


debugger;
    return (
        <div className={styles.photos}>
            {images}
            <hr/>
            <input ref={url}/>
            <button onClick={()=>{

                props.dispatch({
                    type:ADD_PHOTO,
                   url: url.current.value
                });





            }}>
                Add photo
            </button>
        </div>


    )

}
Photos.propTypes = {
    imagesUrls: PropTypes.array
}
export default Photos;