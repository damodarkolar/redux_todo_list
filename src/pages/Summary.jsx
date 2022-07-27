import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import {useState, useEffect} from "react"
const Summary=()=>{
    const {token}=useSelector(state=>state.auth);
    const {todosData}=useSelector(state=>state.todos)
    const navigate=useNavigate()
    const [tc, setTc]=useState(0);
    const [pc, setPc]=useState(0);
    const [cc, setCc]=useState(0);

    // if(!token){
    //     navigate("/login")
    // }
useEffect(() => {
console.log(todosData)
    for(let i=0; i<todosData.length; i++){
        if(todosData.status=="todo"){
            setTc(tc+1)
        }else if(todosData.status=="completed"){
            setCc(cc+1)
        }else{
            setPc(pc+1)
        }
    }
    
}, [])

   


    return(
        <>
        <div style={{display:"flex"}}>
            <div>
                <Sidebar/>
            </div>
            <div>
                <div><Navbar/></div>
                <div> 
                    <h1>Summary</h1>
                    <h2>{tc}</h2>
                    <h2>{pc}</h2>
                    <h2>{cc}</h2>
                </div>
            </div>        
        </div>        
        </>
    )
}



export default Summary