import { useSelector, useDispatch } from "react-redux"


const SidebarTodoListArea=()=>{

const {token}=useSelector(state=>state.auth);
const {todosData}=useSelector(state=>state.todos)


    return !!token? (
        <>
        <div style={{paddingTop:"50px"}}>
        ALL{todosData.length}
        </div>        
        </>
    ) :(
        <div>Please Login or Sign up</div>
    )
}



export default SidebarTodoListArea