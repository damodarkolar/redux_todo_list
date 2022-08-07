import { useDispatch,useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { handleLogout } from "../redux/authRedux/actions";
const SidebarUserArea=()=>{
const dispatch=useDispatch();
const data =useSelector(state=>state.auth);
const userDetails=data.userDetails
const token=data.token

    return !!token? (
        <>
        <div>
            {"userDetails"} 
            <button onClick={()=>dispatch(handleLogout())}>Log Out</button>
        </div>        
        </>
    ):(
        <div>
        <Link to={"/login"}>Log In</Link>/
        <Link to={"/register"}>Sign Up</Link>
        </div>
    )
}



export default SidebarUserArea