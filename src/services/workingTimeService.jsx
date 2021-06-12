import axios from 'axios'

const { REACT_APP_API_URL } = process.env

export default class WorkingTimeService {
    getWorkingTimes(){
        return axios.get(REACT_APP_API_URL + "/workingtimes/getall")
    }
}
