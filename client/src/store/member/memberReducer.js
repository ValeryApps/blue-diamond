
import { ADD_MEMBER, DELETE_MEMBER, FETCH_MEMBERS, UPDATE_MEMBER } from "./memberAction";

const initialValue = {
  members: [],
};

export const memberReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case ADD_MEMBER:
      return {
        ...state,
        members: [...state, payload],
      };
    case DELETE_MEMBER:
      return {
        ...state,
        members: [...state.members.filter((x) => x.id !== payload.id)],
      };
    case UPDATE_MEMBER:
        return{
            ...state,
            members:[...state.members.filter(x=>x.id !== payload.id), payload]
        }
    case FETCH_MEMBERS:
        return{
          ...state,
         members: payload
        };
    default:
        return state;
  }
};
