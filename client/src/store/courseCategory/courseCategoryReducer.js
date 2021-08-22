
import { getCourseCategories } from "../../api/courseCategory";
import { async_action_error, async_action_finish, async_action_start } from "../asyncReducer";
import {toast} from "react-toastify"

const ADD_CATEGORY = "ADD_CATEGORY";
const DELETE_CATEGORY = "DELETE_CATEGORY";
const UPDATE_CATEGORY="UPDATE_CATEGORY";
const FETCH_CATEGORIES = "FETCH_CATEGORIES"

export const addCourseCategoryAction = (payload)=>{
    return {
        type:ADD_CATEGORY,
        payload
    }
}
export const deleteCourseCategoryAction = (payload)=>{
    return {
        type:DELETE_CATEGORY,
        payload
    }
}

export const updateCourseCategoryAction = (payload)=>{
    return {
        type:UPDATE_CATEGORY,
        payload
    }
}

export const FetchCourseCategoriesAction = ()=>{
    return async(dispatch)=>{
        dispatch(async_action_start());
        try {
            const response = await getCourseCategories();
            dispatch({type:FETCH_CATEGORYS, payload:response.data})
            dispatch(async_action_finish())
        } catch (error) {
            dispatch(async_action_error());
            toast.error(error)
        }

    }
}


const initialValue = {
    courseCategories: [],
};

export const courseCategoryReducer = (state = initialValue, { type, payload }) => {
    switch (type) {
        case ADD_CATEGORY:
            return {
                ...state,
                courseCategories: [...state, payload],
            };
        case DELETE_CATEGORY:
            return {
                ...state,
                courseCategories: [...state.courseCategories.filter((x) => x.id !== payload.id)],
            };
        case UPDATE_CATEGORY:
            return{
                ...state,
                courseCategories:[...state.courseCategories.filter(x=>x.id !== payload.id), payload]
            }
        case FETCH_CATEGORIES:
            return{
                ...state,
                courseCategories: payload
            };
        default:
            return state;
    }
};
