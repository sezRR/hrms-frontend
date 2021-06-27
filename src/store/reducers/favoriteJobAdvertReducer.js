import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../actions/favoriteJobAdvertActions";
import { favoriteJobAdverts } from "../initialValues/favoriteJobAdverts";

const initialState = {
    favoriteJobAdverts: favoriteJobAdverts,
}

export default function favoriteJobAdvertReducer(state = initialState, {type, payload}){
    switch (type) {
        case ADD_TO_FAVORITES:
            let jobAdvert = state.favoriteJobAdverts.find((j) => j.id === payload.id)

            if (jobAdvert) {
                return {...state}
            } else if (!Array.isArray(payload)){
                return {
                    ...state,
                    favoriteJobAdverts: [...state.favoriteJobAdverts, payload]
                }
            }
            else {
                return {
                    ...state,
                    favoriteJobAdverts: [...payload]
                }
            }

        case REMOVE_FROM_FAVORITES:
            return {
                ...state,
                favoriteJobAdverts: state.favoriteJobAdverts.filter((j) => j.id !== payload.id)
            }
    
        default:
            return state;
    }
}