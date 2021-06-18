import axios from 'axios'
import { toast } from 'react-toastify'

const { REACT_APP_API_URL } = process.env

export default class JobAdvertService {

    getJobAdverts(){
        return axios.get(REACT_APP_API_URL + "/jobadverts/getbyactiveis")
    }

    getProminentJobAdverts(numberOfProminent){
        return axios.get(REACT_APP_API_URL + "/jobadverts/getbyactiveforprominent?numberOfProminent="+numberOfProminent)
    }

    addJobAdvert(jobAdvert){
        axios.post(REACT_APP_API_URL + "/jobadverts/add", { 
            employerId: jobAdvert.employerId,
            jobPositionId: jobAdvert.jobPositionId,
            cityId: jobAdvert.cityId,
            workingPlaceId: jobAdvert.workingPlaceId,
            workingTimeId: jobAdvert.workingTimeId,
            advertDescription: jobAdvert.advertDescription,
            minSalary: jobAdvert.minSalary * 1000,
            maxSalary: jobAdvert.maxSalary * 1000,
            openPosition: jobAdvert.openPosition,
            createdDate: jobAdvert.createdDate,
            deadline: jobAdvert.deadline
         })
            .then(function () { 
                toast.success("Your job advert added by successfully")
            })
    }
}
