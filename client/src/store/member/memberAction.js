
import { getMembers } from "../../api/member";
import { async_action_error, async_action_finish, async_action_start } from "../asyncReducer";
import {toast} from "react-toastify"

export const ADD_MEMBER = "ADD_MEMBER";
export const DELETE_MEMBER = "DELETE_MEMBER";
export const UPDATE_MEMBER="UPDATE_MEMBER";
export const FETCH_MEMBERS = "FETCH_MEMBERS"

export const addMemberAction = (payload)=>{
 return {
     type:ADD_MEMBER,
     payload
 }
}
export const deleteMemberAction = (payload)=>{
 return {
     type:DELETE_MEMBER,
     payload
 }
}

export const updateMemberAction = (payload)=>{
 return {
     type:UPDATE_MEMBER,
     payload
 }
}

export const FetchMembersAction = ()=>{
 return async(dispatch)=>{
   dispatch(async_action_start());
   try {
       const response = await getMembers();
       dispatch({type:FETCH_MEMBERS, payload:response.data})
       dispatch(async_action_finish())
   } catch (error) {
       dispatch(async_action_error());
       toast.error(error)
   }

 }
}