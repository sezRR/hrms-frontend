import axios from 'axios'

const { REACT_APP_API_URL } = process.env;

export default class ResumeService {

    getByCandidateId(candidateUserId){
        return axios.get(REACT_APP_API_URL + "/resumes/getbycandidateid?candidateUserId="+candidateUserId)
    }
}
