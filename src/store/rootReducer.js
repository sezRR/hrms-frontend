import { combineReducers } from "redux";
import favoriteJobAdvertReducer from "./reducers/favoriteJobAdvertReducer";

const rootReducer = combineReducers({
    favorites: favoriteJobAdvertReducer,
})

export default rootReducer