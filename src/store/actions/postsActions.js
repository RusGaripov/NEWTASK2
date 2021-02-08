import * as actions from "./index"
import axios from "axios";


const fetchPostsRequest = () => {
    return {
        type:actions.FETCH_POSTS_REQUEST
    }
}

const fetchPostsSuccess = posts => { 
    return {
        type:actions.FETCH_POSTS_SUCCESS,
        payload: posts
    }
}

const fetchPostsFailure = error => { 
    return {
        type:actions.FETCH_POSTS_FAILURE,
        payload: error
    }
}


export const fetchPosts = () => {
    return function (dispatch) {
        dispatch(fetchPostsRequest())
        axios.get('https://jsonplaceholder.typicode.com/posts')
           .then(response=>{
               const posts = response.data
               dispatch(fetchPostsSuccess(posts))
           })
           .catch(error=> {
             dispatch(fetchPostsFailure(error.message))
           })
    }
}


export const addPost = (one, history) => async dispatch => {
        axios
          .post('https://jsonplaceholder.typicode.com/posts',one)
          .then (response=>{
           console.log(response)
          })    
          .catch(error=> {
           console.log(error)
          })
          dispatch({type:actions.ADD_POST});
            history.push('/')
}












