import * as actions from "./index"
import axios from "axios";





const fetchUsersRequest = () => {
    return {
        type:actions.FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = users => { //users
    return {
        type:actions.FETCH_USERS_SUCCESS,
        payload: users //users
    }
}

const fetchUsersFailure = error => { 
    return {
        type:actions.FETCH_USERS_FAILURE,
        payload: error
    }
}




export const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
           .then(response=>{
               const users =response.data
               dispatch(fetchUsersSuccess(users))
           })
           .catch(error=> {
            dispatch(fetchUsersFailure(error.message))
           })
    }
}













