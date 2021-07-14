import axios from 'axios'
import { toast } from 'react-toastify';

const { REACT_APP_API_URL } = process.env;

export default class EmployerStaffVerifyAccountUpdateService {

    getWaitingRequests(){
        return axios.get(REACT_APP_API_URL + "/employerstaffverifyaccountupdatescontroller/getwaitingrequests")
    }

    confirmEmployerAccountUpdateRequest(employerStaffVerifyAccountUpdateId, employerId, staffUserId){
        let params = `employerId=${employerId}&employerStaffVerifyAccountUpdateId=${employerStaffVerifyAccountUpdateId}&staffUserId=${staffUserId}`
        return axios.put(REACT_APP_API_URL + `/employeraccountsupdating/confirmemployeraccountchange?${params}`).then(toast.info(`Account update request (Id: ${employerStaffVerifyAccountUpdateId}) approved by you (Id: ${staffUserId})`))
    }

    rejectEmployerAccountUpdateRequest(employerStaffVerifyAccountUpdateId, staffUserId){
        let params = `employerStaffVerifyAccountUpdateId=${employerStaffVerifyAccountUpdateId}&staffUserId=${staffUserId}`
        return axios.put(REACT_APP_API_URL + `/employeraccountsupdating/rejectemployeraccountchange?${params}`).then(toast.info(`Account update request (Id: ${employerStaffVerifyAccountUpdateId}) rejected by you (Id: ${staffUserId})`))
    }
}
