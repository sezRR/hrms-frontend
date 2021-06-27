import axios from 'axios'
import { toast } from 'react-toastify';

const { REACT_APP_API_URL } = process.env;

export default class FavoriteJobAdvertService {

    getByCandidateId(candidateUserId){
        return axios.get(REACT_APP_API_URL + "/favoritejobadvert/getallbycandidateuser?candidateUserId="+candidateUserId)
    }

    addFavorite(candidateUserId, jobAdvert) {
        return axios.post(REACT_APP_API_URL + "/favoritejobadvert/add", {
            candidateUser:{
                id:candidateUserId
            },
            jobAdvert
        }).then(function (values) {
            if (values.data.success) {
                toast.success(values.data.message)
                return values
            } else {
                toast.error(values.data.message)
                return values
            }
        })
    }

    deleteFavorite(favoriteJobAdvertId){
        axios.delete(REACT_APP_API_URL + "/favoritejobadvert/delete/"+favoriteJobAdvertId).then(function(values){
            if (values.data.success) {
                toast.success(values.data.message)
            } else {
                toast.error(values.data.message)
            }
        })
    }
}
