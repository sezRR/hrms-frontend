import axios from 'axios'

const { REACT_APP_API_URL } = process.env;

export default class EmployerUserService {
    getEmployerUsers(){
        return axios.get(REACT_APP_API_URL + "/employerusers/getall")
    }
}
