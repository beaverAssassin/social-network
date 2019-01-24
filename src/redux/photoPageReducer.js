import React from 'react';

const addPhoto = "PHOTO/ADD_PHOTO"

let initialStateForPhotoPage = {
    imagesUrls: [
        {
            url: 'https://www.cstatic-images.com/car-pictures/xl/USC70CHC021E021001.jpg'
        },
        {
            url: 'https://cdn.motor1.com/images/mgl/qxZrL/s3/25-future-cars-worth-waiting-for.jpg'
        }
    ]


}


const photoPageReducer = (state = initialStateForPhotoPage, action) => {

    switch (action.type) {
        case addPhoto:
            let stateCopy = {...state};
            stateCopy.imagesUrls.unshift({url: action.url});
            return stateCopy;
        default:
            return state;
    }

}
export default photoPageReducer;

export const addPhotoUrl =(url)=>{
    return { type:addPhoto,  url: url.current.value};
}
