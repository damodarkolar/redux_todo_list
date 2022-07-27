
import SidebarUserArea from "./SidebarUserArea"
import SidebarTodoListArea from "./SidebarTodoListArea"
import "./components.css"

const Sidebar=()=>{


    return(
        <>
        <div id="sidebar">
        <SidebarUserArea/>
        <SidebarTodoListArea/> 
        </div>        
        </>
    )
}



export default Sidebar