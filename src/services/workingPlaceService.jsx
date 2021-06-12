import axios from 'axios'

const { REACT_APP_API_URL } = process.env

export default class WorkingPlaceService {
    getWorkingPlaces(){
        return axios.get(REACT_APP_API_URL + "/workingplaces/getall")
    }
}
