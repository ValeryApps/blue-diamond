import axios from "axios"

export const getCourses = async ()=>{
 await axios.get(`${process.env.REACT_APP_APIURL}/Courses`) ;
}

export const addCourse = async(course)=>{
    await axios.post(`${process.env.REACT_APP_APIURL}/Courses`, course)
}

export const editCourse = async(course)=>{
    await axios.put(`${process.env.REACT_APP_APIURL}`,course)
}
export const deleteCourse=async(course)=>{
    await axios.delete(`${process.env.REACT_APP_APIURL}`, course)
}