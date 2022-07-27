
import {Link} from "react-router-dom"
import "./components.css"

const Navbar=()=>{


    return(
        <>
        <div id="navBar">
        <Link to="/">Home</Link>
        <Link to="/newTask">New Task</Link>
        <Link to="/summary">Summary</Link>
        </div>        
        </>
    )
}



export default Navbar