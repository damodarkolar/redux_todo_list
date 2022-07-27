import { useState } from "react"
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";


const registrationData={
        name: "",
        email: "",
        password: "",
        username: "",
        mobile: "",
        description: ""
}
const Register=()=>{
    const [newUserData, setNewUserData]=useState(registrationData);

    const {name, email,password,username,mobile,description}=newUserData;

    const handleOnChange=(e)=>{
        const {name,value}=e.target;

        setNewUserData(prev=> ({...newUserData,[name]:value}));
    }


    const handleSubmit=(e)=>{
        e.preventDefault()
        fetch(`https://masai-api-mocker.herokuapp.com/auth/register`,{
            method:"POST",
            body:JSON.stringify(newUserData),
            headers:{
                "Content_Type" : "application/json"
            }
        })
        setNewUserData(registrationData)
    }

    return(
        <>
        <div style={{display:"flex"}}>
            <div><Sidebar/></div>
            <div><Navbar/>
            <form action="" onSubmit={e=>handleSubmit(e)}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={name} onChange={(e)=>handleOnChange(e)} id="name"/>
                <br />
                <label htmlFor="email">Email</label>
                <input type="text" name="email" value={email} onChange={(e)=>handleOnChange(e)} id="email"/>
                <br />
                <label htmlFor="password">Password</label>
                <input type="text" name="password" value={password} onChange={(e)=>handleOnChange(e)} id="password"/>
                <br />
                <label htmlFor="username">Username</label>
                <input type="text" name="username" value={username} onChange={(e)=>handleOnChange(e)} id="username"/>
                <br />
                <label htmlFor="mobile">Mobile</label>
                <input type="text" name="mobile" value={mobile} onChange={(e)=>handleOnChange(e)} id="mobile"/>
                <br />
                <label htmlFor="description">Description</label>
                <input type="text" name="description" value={description} onChange={(e)=>handleOnChange(e)} id="description"/>
                <br />
                <input type="submit" />

            </form>
            </div>
            
        </div>        
        </>
    )
}



export default Register