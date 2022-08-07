import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { handleLoginErr, handleLoginSuccessful, handleLoginLoading, handleUserDetails } from "../redux/authRedux/actions"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import React from "react"
const loginData={
    username:"",
    password:""
}
const Login=()=>{
const dispatch = useDispatch();
const [loginDetails, setLoginDetails]=useState(loginData)
const {username, password}=loginDetails;
const navigate =useNavigate();
const {token}=useSelector(state=> state.auth)


React.useEffect(()=>{
    if(!!token){
    navigate("/")
}
},[token])


const handleOnChange=(e)=>{
    const {name,value}=e.target;
setLoginDetails(prev=> ({...loginDetails,[name]:value}))
}


const handleOnSubmit =(e)=>{
    e.preventDefault()
    
dispatch(handleLoginLoading());
fetch(`https://reqres.in/api/login`,{
    method:"POST",
    body:JSON.stringify(loginDetails),
    headers:{
        "Content-Type": "application/json"
    }  
})
.then(res=>res.json())
.then(data=>{dispatch(handleLoginSuccessful(data.token))
//     fetch(`https://reqres.in/api/users/2`)
// .then(res=>res.json)
// .then(result=> console.log(result))
// .catch(err=>console.log(err)) 
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