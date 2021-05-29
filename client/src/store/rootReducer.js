
import { combineReducers } from "redux"
import { modalReducer } from "../common/modals/modalReducer"
import asyncReducer from "./asyncReducer"
import { authReducer } from "./auth/authReducer"
import { courseReducer } from "./course/courseReducer"
import { memberReducer } from "./member/memberReducer"
import { studentReducer } from "./student/studentReducer"



export const rootReducer = combineReducers({
 auth:authReducer,
 course:courseReducer,
 modals:modalReducer,
 members:memberReducer,
 async:asyncReducer,
 students:studentReducer
})