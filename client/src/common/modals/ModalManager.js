import { useSelector } from "react-redux"
import Register from "../../auth/Register";
import Login from "../../auth/Login"
import MemberForm from "../../features/members/MemberForm"
import StudentForm from "../../features/students/StudentForm"

export const ModalManager = ()=>{
    const {modals} = useSelector(state=>({...state}));
    const lookupModal = {
        Register,
        Login,
        MemberForm,
        StudentForm
    }
    let renderedModal
    
    if(modals){
        const {modalType, modalProps}=modals;
        const ModalComponent = lookupModal[modalType];
        renderedModal = <ModalComponent {...modalProps}/>
    }
    return <span>{renderedModal}</span>
}