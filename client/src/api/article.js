import axios from "axios"

export const getArticles = async ()=>{
 await axios.get(`${process.env.REACT_APP_APIURL}/Articles`) ;
}

export const addArticle = async(article)=>{
    await axios.post(`${process.env.REACT_APP_APIURL}/Articles`, article)
}

export const editArticle = async(article)=>{
    await axios.put(`${process.env.REACT_APP_APIURL}`,article)
}
export const deleteArticle=async(article)=>{
    await axios.delete(`${process.env.REACT_APP_APIURL}`, article)
}