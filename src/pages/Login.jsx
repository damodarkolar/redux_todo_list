import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { handleLoginErr, handleLoginSuccessful, handleLoginLoading, handleUserDetails } from "../redux/authRedux/actions"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const loginData={
    password:"",
    username:""
}
const Login=()=>{
const dispatch = useDispatch();
const [loginDetails, setLoginDetails]=useState(loginData)
const {username, password}=loginDetails;
const navigate =useNavigate();
const {token}=useSelector(state=> state.auth)

if(!!token){
    navigate("/")
}
const handleOnChange=(e)=>{
    const {name,value}=e.target;
setLoginDetails(prev=> ({...loginDetails,[name]:value}))
}


const handleOnSubmit =(e)=>{
    e.preventDefault()
    
dispatch(handleLoginLoading());
fetch(`https://masai-api-mocker.herokuapp.com/auth/login`,{
    method:"POST",
    body:JSON.stringify(loginDetails),
  
})
.then(res=>res.json())
.then(data=>{dispatch(handleLoginSuccessful)
    fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
    method :"GET",
    headers:{
        "Authorization": `Bearer ${data.token}`
    },
})
.then(res=>res.json)
.then(result=> dispatch(handleUserDetails(result)))
.catch(err=>console.log(err))    
})
.catch(err=>dispatch(handleLoginErr()))


setLoginDetails(loginData)
}

    return(

        <>
        <div style={{display:"flex"}}>
            <div>
                <Sidebar/>
            </div>
            <div>
                <div>
                    <Navbar/>
                </div>
                <div>
                <form onSubmit={e=>handleOnSubmit(e)}>
                <label htmlFor="username">USER NAME</label>
                <input onChange={e=>handleOnChange(e)} type="text" name="username" value={username} placeholder="Please enter user name" id="username"/>
                <br />
                <label htmlFor="password">PASSWORD</label>
                <input onChange={e=>handleOnChange(e)} type="text" name="password" value={password} placeholder="Please enter password" id="password"/>
                <br />
                <input type="submit" />
            </form>  
                </div>
            </div>
        </div>
                 
        </>
    )
}



export default Login