import * as actions from "./index"
import axios from "axios";


const fetchPhotosRequest = () => {
    return {
        type:actions.FETCH_PHOTOS_REQUEST
    }
}

const fetchPhotosSuccess = photos => { 
    return {
        type:actions.FETCH_PHOTOS_SUCCESS,
        payload: photos 
    }
}

const fetchPhotosFailure = error => { 
    return {
        type:actions.FETCH_PHOTOS_FAILURE,
        payload: error
    }
}

export const fetchPhotos = (id) => {
    let photos=[];
    return function (dispatch) {
        dispatch(fetchPhotosRequest())
        axios.get('https://jsonplaceholder.typicode.com/photos')
           .then(response=>{
               const allPhotos =response.data
               let idNum= Number.parseInt(id)
               for(var i=0;i<allPhotos.length;i++){
                   if(allPhotos[i].albumId===idNum){
                  photos.push(allPhotos[i])              
                   }
               }
               dispatch(fetchPhotosSuccess(photos))
           })
           .catch(error=> {
             dispatch(fetchPhotosFailure(error.message))
           })
    }
}
