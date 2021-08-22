
import { getTestimonies } from "../../api/Testimony";
import { async_action_error, async_action_finish, async_action_start } from "../asyncReducer";
import {toast} from "react-toastify"

const ADD_TESTIMONY = "ADD_TESTIMONY";
const DELETE_TESTIMONY = "DELETE_TESTIMONY";
const UPDATE_TESTIMONY="UPDATE_TESTIMONY";
const FETCH_TESTIMONIES = "FETCH_TESTIMONIES"

export const addTestimonyAction = (payload)=>{
    return {
        type:ADD_TESTIMONY,
        payload
    }
}
export const deleteTestimonyAction = (payload)=>{
    return {
        type:DELETE_TESTIMONY,
        payload
    }
}

export const updateTestimonyAction = (payload)=>{
    return {
        type:UPDATE_TESTIMONY,
        payload
    }
}

export const FetchTestimoniesAction = ()=>{
    return async(dispatch)=>{
        dispatch(async_action_start());
        try {
            const response = await getTestimonies();
            dispatch({type:FETCH_TESTIMONIES, payload:response.data})
            dispatch(async_action_finish())
        } catch (error) {
            dispatch(async_action_error());
            toast.error(error)
        }

    }
}


const initialValue = {
    testimonies: [],
};

export const TestimonyReducer = (state = initialValue, { type, payload }) => {
    switch (type) {
        case ADD_TESTIMONY:
            return {
                ...state,
                testimonies: [...state, payload],
            };
        case DELETE_TESTIMONY:
            return {
                ...state,
                testimonies: [...state.testimonies.filter((x) => x.id !== payload.id)],
            };
        case UPDATE_TESTIMONY:
            return{
                ...state,
                testimonies:[...state.testimonies.filter(x=>x.id !== payload.id), payload]
            }
        case FETCH_TESTIMONIES:
            return{
                ...state,
                testimonies: payload
            };
        default:
            return state;
    }
};
