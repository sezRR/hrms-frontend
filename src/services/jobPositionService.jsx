import axios from 'axios'

const { REACT_APP_API_URL } = process.env;

export default class JobPositionService {
    getJobPositions(){
        return axios.get(REACT_APP_API_URL + "/jobpositions/getall")
    }

    getByPosition(position){
        return axios.get(REACT_APP_API_URL + "/jobpositions/getbyposition?position=" + position)
    }
}
