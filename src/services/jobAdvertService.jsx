import axios from 'axios'

const { REACT_APP_API_URL } = process.env

export default class JobAdvertService {
    addJobAdvert(jobAdvert){
        axios.post(REACT_APP_API_URL + "/jobadverts/add", { 
            employerId: jobAdvert.employerId,
            jobPositionId: jobAdvert.jobPositionId,
            cityId: jobAdvert.cityId,
            workingPlaceId: jobAdvert.workingPlaceId,
            workingTimeId: jobAdvert.workingTimeId,
            advertDescription: jobAdvert.advertDescription,
            minSalary: jobAdvert.minSalary,
            maxSalary: jobAdvert.maxSalary,
            openPosition: jobAdvert.openPosition,
            createdDate: jobAdvert.createdDate,
            deadline: jobAdvert.deadline
         })
            .then(function (response) { 
                console.log(response.data.message)
            })
    }
}
