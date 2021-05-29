export const ADD_COURSE = "ADD_COURSE";
export const DELETE_COURSE = "DELETE_COURSE";
export const UPDATE_COURSE="UPDATE_COURSE";
export const FETCH_COURSES = "FETCH_COURSES"

export const addCourseAction = (payload)=>{
 return {
     type:ADD_COURSE,
     payload
 }
}
export const deleteCourseAction = (payload)=>{
 return {
     type:DELETE_COURSE,
     payload
 }
}

export const updateCourseAction = (payload)=>{
 return {
     type:UPDATE_COURSE,
     payload
 }
}

export const FetchCoursesAction = (payload)=>{
 return {
     type:FETCH_COURSES,
     payload
 }
}