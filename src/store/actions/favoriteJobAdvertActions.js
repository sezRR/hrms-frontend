export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES"
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES"

export function addToFavorites(jobAdvert){
    return {
        type: ADD_TO_FAVORITES,
        payload: jobAdvert
    }
}

export function removeFromFavorites(jobAdvert){
    return {
        type: REMOVE_FROM_FAVORITES,
        payload: jobAdvert
    }
}