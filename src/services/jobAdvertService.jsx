import axios from 'axios'

const { REACT_APP_API_URL } = process.env

export default class JobAdvertService {

    getJobAdverts(){
        return axios.get(REACT_APP_API_URL + "/jobadverts/getbyactiveis")
    }

    getJobAdvertsWithPagination(cities, workingTimes, workingPlaces){

        let params = `pageNo=1&pageSize=10`

        if(cities !== 0){
            params += `&cities=${cities}`
        }

        if(workingTimes !== 0) {
            params += `&workingTimes=${workingTimes}`
        }

        if(workingPlaces !== 0){
            params += `&workingPlaces=${workingPlaces}`
        }

        return axios.get(REACT_APP_API_URL + `/jobadverts/getbyactiveiswithpagination?${params}`)
    }

    getProminentJobAdverts(numberOfProminent){
        return axios.get(REACT_APP_API_URL + "/jobadverts/getbyactiveforprominent?numberOfProminent="+numberOfProminent)
    }

    addJobAdvert(jobAdvert){
        return axios.post(REACT_APP_API_URL + "/jobadverts/add", { 
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
            // .then(function (values) { 
            //     console.log(values)
            //     toast.success("Your job advert added by successfully")
            // })
    }
}
