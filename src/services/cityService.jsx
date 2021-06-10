import axios from 'axios'

const { REACT_APP_API_URL } = process.env;

export default class CityService {

    getCities(){
        return axios.get(REACT_APP_API_URL + "/cities/getall")
    }
}
