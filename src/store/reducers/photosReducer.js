import * as actions from "../actions"

const initialState= {
    photos:null,
    loading:false
};

export default (state=initialState,action) => {
    switch (action.type) {
        case actions.FETCH_PHOTOS_REQUEST:
            return {...state,loading:true}
        case actions.FETCH_PHOTOS_SUCCESS:
            return {
                loading:false,
                photos:action.payload,
                error:'' 
            }
        case actions.FETCH_PHOTOS_FAILURE:
            return {
                loading:false,
                photos:[],
                error:action.photos
            }
        default:
            return state
    }
}