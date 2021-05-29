
import { ADD_COURSE, DELETE_COURSE, FETCH_COURSES, UPDATE_COURSE } from "./courseAction";

const initialValue = {
  courses: [],
};

export const courseReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case ADD_COURSE:
      return {
        ...state,
        courses: [...state, payload],
      };
    case DELETE_COURSE:
      return {
        ...state,
        courses: [...state.courses.filter((x) => x.id !== payload.id)],
      };
    case UPDATE_COURSE:
        return{
            ...state,
            courses:[...state.courses.filter(x=>x.id !== payload.id), payload]
        }
    case FETCH_COURSES:
        return{
          ...state,
         courses: payload
        };
    default:
        return state;
  }
};
