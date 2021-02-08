import * as actions from "../actions"

const initialState= {
    posts:null,
    news:null,
    one:null,
    loading:false
};

export default (state=initialState,action) => {
    switch (action.type) {
        case actions.FETCH_POSTS_REQUEST:
            return {...state,loading:true}
        case actions.FETCH_POSTS_SUCCESS:
            return {
                loading:false,
                news:action.payload, //users
                posts:action.payload,
                error:'' 
            }
        case actions.FETCH_POSTS_FAILURE:
            return {
                loading:false,
                posts:[],
                news: [], //users
                error:action.payload
            }
        default:
            return state
    }
}