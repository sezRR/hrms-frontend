import axios from 'axios'
import { toast } from 'react-toastify'

const { REACT_APP_API_URL } = process.env

export default class jobAdvertStaffVerifyService {

    addJobAdvertStaffVerify(jobAdvertId) {
        axios.post(REACT_APP_API_URL + "/jobadvertsstaffverify/add", {
            createdDate: new Date(),
            jobAdvertId: jobAdvertId
        })
    }

    getByStaffUserIsNull() {
        return axios.get(REACT_APP_API_URL + "/jobadvertsstaffverify/getbystaffuserisnull")
    }

    confirmJobAdvert(jobAdvertStaffVerifyId, jobAdvertId, staffUserId) {
        let params = `jobAdvertStaffVerifyId=${jobAdvertStaffVerifyId}&jobAdvertId=${jobAdvertId}&staffUserId=${staffUserId}`
        setTimeout(()=>{
            axios.put(REACT_APP_API_URL + `/jobadvertsstaffverify/confirmjobadvert?${params}`)
            .then(toast.info(`Job advert (Id: ${jobAdvertId}) approved by you (Id: ${staffUserId})`))
            window.location.reload(true);
        }, 5500);
    }

    rejectJobAdvert(jobAdvertStaffVerifyId, jobAdvertId, staffUserId) {
        let params = `jobAdvertStaffVerifyId=${jobAdvertStaffVerifyId}&staffUserId=${staffUserId}`
        setTimeout(()=>{
            axios.put(REACT_APP_API_URL + `/jobadvertsstaffverify/rejectjobadvert?${params}`)
            .then(toast.info(`Job advert (Id: ${jobAdvertId}) rejected by you (Id: ${staffUserId})`))
            window.location.reload(true);
        }, 5500);
    }
}
