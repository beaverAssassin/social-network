import React from 'react';
import PropTypes from 'prop-types';
import styles from "./photos.module.css";
import {connect} from "react-redux";
import {addPhotoUrl} from "../../redux/photoPageReducer";

const Photos = (props) => {

    let url = React.createRef();
    let images = null;
    if (!!props.photoPage.imagesUrls) {
        images = props.photoPage.imagesUrls.map((url) => {
            return <img  alt ="img" src={url.url}/>;
        })
    }
    return (
        <div className={styles.photos}>
            {images}
            <hr/>
            <input ref={url}/>
            <button onClick={() => {
                props.addPhoto(url)
            }}>

                Add photo
            </button>
        </div>
    )
};

Photos.propTypes = {
    imagesUrls: PropTypes.array
};


const mapStateToProps = (state) => {
    return {
        photoPage: state.photoPage
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        addPhoto: (url) => {
            let action = addPhotoUrl(url);
            dispatch(action);


        }


    }

};


const ConnectedPhotos = connect(mapStateToProps, mapDispatchToProps)(Photos);
export default ConnectedPhotos;

