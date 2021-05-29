import axios from "axios"

export const getStudents = async ()=>{
 await axios.get(`${process.env.REACT_APP_APIURL}/Students`) ;
}

export const addStudent = async(student)=>{
    await axios.post(`${process.env.REACT_APP_APIURL}/Students`, student)
}

export const editStudent = async(student)=>{
    await axios.put(`${process.env.REACT_APP_APIURL}`,student)
}
export const deleteStudent=async(student)=>{
    await axios.delete(`${process.env.REACT_APP_APIURL}`, student)
}