import * as actions from "../actions"

const initialState= {
    albums:null,
    loading:false
};

export default (state=initialState,action) => {
    switch (action.type) {
        case actions.FETCH_ALBUMS_REQUEST:
            return {...state,loading:true}
        case actions.FETCH_ALBUMS_SUCCESS:
            return {
                loading:false,
                albums:action.payload,
                error:'' 
            }
        case actions.FETCH_ALBUMS_FAILURE:
            return {
                loading:false,
                albums:[],
                error:action.payload
            }
        default:
            return state
    }
}