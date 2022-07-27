import { createContext } from "react";
import { useState,useEffect } from "react";
import {useNavigate} from "react-router-dom";


export const AuthContext=createContext();

export const AuthContextProvider =({children}) =>{

    const navigate =useNavigate();
const [token, setToken]=useState(5);
const [newUserDetails, setNewUserDetails]=useState({});
const [loginDetails, setLoginDetails]=useState({});
const [userDetails, setUserDetails]=useState({});

const handleLogin=(loginData)=>{
    const {username,password}=loginData
fetch(`https://masai-api-mocker.herokuapp.com/auth/login`,{
    method:"POST",
    body:JSON.stringify(loginData),
    headers:{
        "Content-Type": "application/json"
    }
})
.then(res=>res.json)
.then(  data=>{
fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
    method :"GET",
    headers:{
        "Authorization": `Bearer ${data.token}`
    },
})
.then(res=>res.json)
.then(result=> newUserDetails(result))
.catch(err=>console.log(err))
setToken(data.token)}
)
.catch(err=> console.log(err))
}



const handleRegistration=(registrationData)=>{
    console.log(registrationData);
fetch(`https://masai-api-mocker.herokuapp.com/auth/register`,{
    method:"",
    body:JSON.stringify(registrationData),
    headers:{
        "Content-Type": "application/json"
    }
})
.then(res=>res.json())
.then(data=>{return navigate("/login")})
.catch(err=>console.log(err))
}

const handleLogout=()=>{
    setToken("");
    setLoginDetails({});
}


const value={handleLogin, handleRegistration, handleLogout, token, userDetails}

return(
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
)
}