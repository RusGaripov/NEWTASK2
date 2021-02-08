import * as actions from "./index"
import axios from "axios";

const fetchAlbumsRequest = () => {
    return {
        type:actions.FETCH_ALBUMS_REQUEST
    }
}

const fetchAlbumsSuccess = albums => { 
    return {
        type:actions.FETCH_ALBUMS_SUCCESS,
        payload: albums 
    }
}

const fetchAlbumsFailure = error => { 
    return {
        type:actions.FETCH_ALBUMS_FAILURE,
        payload: error
    }
}




export const fetchAlbums = () => {
    return function (dispatch) {
        dispatch(fetchAlbumsRequest())
        axios.get('https://jsonplaceholder.typicode.com/albums')
           .then(response=>{
               const albums =response.data
               dispatch(fetchAlbumsSuccess(albums))
           })
           .catch(error=> {
             dispatch(fetchAlbumsFailure(error.message))
           })
    }
}










