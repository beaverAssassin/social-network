import React from 'react';

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
        case 'ADD_PHOTO':
            let stateCopy = {...state};
            stateCopy.imagesUrls.unshift({url: action.url});
            return stateCopy;
        default:
            return state;
    }

}
export default photoPageReducer;