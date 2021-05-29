import axios from "axios"

export const getMembers = async ()=>{
  return await axios.get(`${process.env.REACT_APP_APIURL}/staff`) ;
}

export const addMember = async(member)=>{
    await axios.post(`${process.env.REACT_APP_APIURL}/staff`, member)
}

export const editMember = async(member)=>{
    await axios.put(`${process.env.REACT_APP_APIURL}/staff/${member.id}`,member)
}
export const deleteMember=async(member)=>{
    await axios.delete(`${process.env.REACT_APP_APIURL}/staff/${member.id}`)
}