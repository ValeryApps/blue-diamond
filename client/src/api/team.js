import axios from "axios"

export const getTeamMembers = async ()=>{
    await axios.get(`${process.env.REACT_APP_APIURL}/TeamMembers`) ;
}

export const addTeamMember = async(teamMember)=>{
    await axios.post(`${process.env.REACT_APP_APIURL}/TeamMembers`, teamMember)
}

export const editTeamMember = async(teamMember)=>{
    await axios.put(`${process.env.REACT_APP_APIURL}`,teamMember)
}
export const deleteTeamMember=async(teamMember)=>{
    await axios.delete(`${process.env.REACT_APP_APIURL}`, teamMember)
}