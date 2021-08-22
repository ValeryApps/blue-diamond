import axios from "axios"

export const getCourseCategories = async ()=>{
    await axios.get(`${process.env.REACT_APP_APIURL}/CourseCategories`) ;
}

export const addCourseCategory = async(courseCategory)=>{
    await axios.post(`${process.env.REACT_APP_APIURL}/CourseCategories`, courseCategory)
}

export const editCourseCategory = async(courseCategory)=>{
    await axios.put(`${process.env.REACT_APP_APIURL}`,courseCategory)
}
export const deleteCourseCategory=async(courseCategory)=>{
    await axios.delete(`${process.env.REACT_APP_APIURL}`, courseCategory)
}