import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { FetchMembersAction } from "../../store/member/memberAction";



const MemberList = () => {
   
 
const dispatch = useDispatch();
useEffect(()=>{
    dispatch(FetchMembersAction())
}, [dispatch])
const {members} = useSelector(state=>state.members);
    return (
        <div>
            {members.map((member)=>(
 <h2 key={member?.id}>{member?.name}</h2>
            ))}
        </div>
    )
}

export default MemberList
