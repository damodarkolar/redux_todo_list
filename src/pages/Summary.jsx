import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import {useState, useEffect} from "react"
const Summary=()=>{
    const {token}=useSelector(state=>state.auth);
    const [todoList, setTodoList]=useState([]);
    const [inProgressList, setInProgressList]=useState([]);
    const [doneList, setDoneList]=useState([]);
    

    useEffect(()=>{
         // if(!token){
    //     navigate("/login")
    // }
    },[token])

    useEffect(()=>{
        fetch(`http://localhost:8080/todoList?status=todo`)
        .then(res=>res.json())
        .then(data=>setTodoList(data))
        .catch(err=>console.log(err))
    },[])
    useEffect(()=>{
        fetch(`http://localhost:8080/todoList?status=inProgress`)
        .then(res=>res.json())
        .then(data=>setInProgressList(data))
        .catch(err=>console.log(err))
    },[])
    useEffect(()=>{
        fetch(`http://localhost:8080/todoList?status=done`)
        .then(res=>res.json())
        .then(data=>setDoneList(data))
        .catch(err=>console.log(err))
    },[])

   


    return(
        <>
        <div style={{display:"flex"}}>
            <div>
                <Sidebar/>
            </div>
            <div>
                <div><Navbar/></div>
                <div > 
                    <h1>Summary</h1>
                    <div style={{border:"2px solid black", width:"300px", display:"flex", justifyContent:"space-around"}} ><h2>Todo</h2><h2> {todoList.length}</h2></div>
                    <div style={{border:"2px solid black", width:"300px", display:"flex", justifyContent:"space-around"}}><h2> In Progress</h2><h2> {inProgressList.length}</h2></div>
                    <div style={{border:"2px solid black", width:"300px", display:"flex", justifyContent:"space-around"}}><h2>Done</h2><h2> {doneList.length}</h2></div>                  
                    
                </div>
            </div>        
        </div>        
        </>
    )
}



export default Summary