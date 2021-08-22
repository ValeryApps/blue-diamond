
import { getTeamMembers } from "../../api/teamMember";
import { async_action_error, async_action_finish, async_action_start } from "../asyncReducer";
import {toast} from "react-toastify"

const ADD_TEAM_MEMBER = "ADD_TEAM_MEMBER";
const DELETE_TEAM_MEMBER = "DELETE_TEAM_MEMBER";
const UPDATE_TEAM_MEMBER="UPDATE_TEAM_MEMBER";
const FETCH_TEAM_MEMBERS = "FETCH_TEAM_MEMBERS"

export const addTeamMemberAction = (payload)=>{
    return {
        type:ADD_TEAM_MEMBER,
        payload
    }
}
export const deleteTeamMemberAction = (payload)=>{
    return {
        type:DELETE_TEAM_MEMBER,
        payload
    }
}

export const updateTeamMemberAction = (payload)=>{
    return {
        type:UPDATE_TEAM_MEMBER,
        payload
    }
}

export const FetchTeamMembersAction = ()=>{
    return async(dispatch)=>{
        dispatch(async_action_start());
        try {
            const response = await getTeamMembers();
            dispatch({type:FETCH_TEAM_MEMBERS, payload:response.data})
            dispatch(async_action_finish())
        } catch (error) {
            dispatch(async_action_error());
            toast.error(error)
        }

    }
}


const initialValue = {
    teamMembers: [],
};

export const teamMemberReducer = (state = initialValue, { type, payload }) => {
    switch (type) {
        case ADD_TEAM_MEMBER:
            return {
                ...state,
                teamMembers: [...state, payload],
            };
        case DELETE_TEAM_MEMBER:
            return {
                ...state,
                teamMembers: [...state.teamMembers.filter((x) => x.id !== payload.id)],
            };
        case UPDATE_TEAM_MEMBER:
            return{
                ...state,
                teamMembers:[...state.teamMembers.filter(x=>x.id !== payload.id), payload]
            }
        case FETCH_TEAM_MEMBERS:
            return{
                ...state,
                teamMembers: payload
            };
        default:
            return state;
    }
};
