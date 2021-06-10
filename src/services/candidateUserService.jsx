import axios from 'axios'

const { REACT_APP_API_URL } = process.env;

export default class CandidateUserService {
    getCandidateUsers(){
        return axios.get(REACT_APP_API_URL + "/candidateusers/getall")
    }
}
