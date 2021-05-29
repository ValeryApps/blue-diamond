
import { getStudents } from "../../api/student";
import { async_action_error, async_action_finish, async_action_start } from "../asyncReducer";
import {toast} from "react-toastify"

const ADD_STUDENT = "ADD_STUDENT";
const DELETE_STUDENT = "DELETE_STUDENT";
const UPDATE_STUDENT="UPDATE_STUDENT";
const FETCH_STUDENTS = "FETCH_STUDENTS"

export const addStudentAction = (payload)=>{
 return {
     type:ADD_STUDENT,
     payload
 }
}
export const deleteStudentAction = (payload)=>{
 return {
     type:DELETE_STUDENT,
     payload
 }
}

export const updateStudentAction = (payload)=>{
 return {
     type:UPDATE_STUDENT,
     payload
 }
}

export const FetchStudentsAction = ()=>{
 return async(dispatch)=>{
   dispatch(async_action_start());
   try {
       const response = await getStudents();
       dispatch({type:FETCH_STUDENTS, payload:response.data})
       dispatch(async_action_finish())
   } catch (error) {
       dispatch(async_action_error());
       toast.error(error)
   }

 }
}


const initialValue = {
  students: [],
};

export const studentReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case ADD_STUDENT:
      return {
        ...state,
        students: [...state, payload],
      };
    case DELETE_STUDENT:
      return {
        ...state,
        students: [...state.students.filter((x) => x.id !== payload.id)],
      };
    case UPDATE_STUDENT:
        return{
            ...state,
            students:[...state.students.filter(x=>x.id !== payload.id), payload]
        }
    case FETCH_STUDENTS:
        return{
          ...state,
         students: payload
        };
    default:
        return state;
  }
};
