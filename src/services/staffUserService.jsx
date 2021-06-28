import axios from 'axios'
import { toast } from 'react-toastify';

const { REACT_APP_API_URL } = process.env;

export default class StaffUserService {
    getById(id){
        return axios.get(REACT_APP_API_URL + "/staffusers/getbyid?id="+id)
    }

    update(staffUser){
        axios.put(REACT_APP_API_URL + "/staffusers/update", {
            id: staffUser.id,
            email: staffUser.email,
            firstName: staffUser.firstName,
            lastName: staffUser.lastName,
            password: staffUser.password
        }).then(toast.success("Your account updated successfully"))
    }
}
