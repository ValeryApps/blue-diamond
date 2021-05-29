export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";
export const LOGOUT = "LOGOUT"

export const loginAction = (payload)=>{
 return {
     type:LOGIN,
     payload
 }
}
export const RegisterAction = (payload)=>{
 return {
     type:REGISTER,
     payload
 }
}
export const logoutAction = (payload)=>{
 return {
     type:LOGOUT,
     payload
 }
}