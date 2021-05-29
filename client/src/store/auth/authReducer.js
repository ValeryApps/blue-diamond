import { LOGIN, LOGOUT } from "./authAction";


export const authReducer = (state = JSON.parse(localStorage.getItem("user")), { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {
        ...state,
        ...payload,
      };
    case LOGOUT:
      return {
        payload,
      };
    default:
      return state;
  }
};
