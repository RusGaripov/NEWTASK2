import {combineReducers} from "redux";
import usersReducer from "./usersReducer"
import postsReducer from "./postsReducer"
import albumsReducer from "./albumsReducer"
import photosReducer from "./photosReducer"
export default combineReducers({
    usersReducer,
    postsReducer,
    albumsReducer,
    photosReducer
});