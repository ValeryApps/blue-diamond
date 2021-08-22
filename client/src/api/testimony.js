import axios from "axios"

export const getTestimonies = async ()=>{
    await axios.get(`${process.env.REACT_APP_APIURL}/Testimonies`) ;
}

export const addTestimony = async(testimony)=>{
    await axios.post(`${process.env.REACT_APP_APIURL}/Testimonies`, testimony)
}

export const editTestimony = async(testimony)=>{
    await axios.put(`${process.env.REACT_APP_APIURL}`,testimony)
}
export const deleteTestimony=async(testimony)=>{
    await axios.delete(`${process.env.REACT_APP_APIURL}`, testimony)
}