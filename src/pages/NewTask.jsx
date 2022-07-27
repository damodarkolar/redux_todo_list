import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from "react-redux";
import { handleTodosLoading, handleTodosSuccess, handleTodosErr } from "../redux/todoRedux/action";
import { useNavigate } from "react-router-dom";

const subtask={
    subTaskTitle:"",
    status:false,
    subtaskId:uuidv4()
}

const initialNewTaskData={
    title:"",
    description:"",
    subTodoData:[],
    tags:{
        official:false,
        personal:false,
        others:false,
    },
    status:"todo",
}

const NewTask=()=>{

const [newTaskData, setNewTaskData]=useState(initialNewTaskData)
const {title, description, subTodoData, status, tags}=newTaskData;

const {official, personal, others}=tags
const {todo, inProgress, completed} =status

const [listSubTodo, setListSubTodo]=useState([])
const [subTodo, setSubTodo]=useState(subtask);
const {subTaskTitle}=subTodo
const{token }=useSelector(state=>state.auth);
const dispatch =useDispatch();
const navigate=useNavigate();


const handleOnchangeSubTodo=(e)=>{
    const {name, value}  =e.target;
    setSubTodo(prev => ({...subTodo,[name]:value})) 
}
const handleSubTodoAdd=()=>{
    setListSubTodo(prev => ([...listSubTodo,subTodo]))
    setSubTodo(subtask);
}

const handleNewTaskOnchange = (e)=>{
    let nameis=e.target.name
const {name, value,type}=e.target
if(type=="checkbox"){
console.log(newTaskData)
}
else{
    setNewTaskData(prev=>({...newTaskData,[name]:value}))
}

}


const handleCreateNewTask=()=>{
    console.log("listSubTodo")
    console.log(listSubTodo)
setNewTaskData(prev => ({...newTaskData,subTodoData:listSubTodo}))
fetch(`http://localhost:8080/todoList`,{
    method:"POST",
    body:JSON.stringify(newTaskData),
    headers:{
        "COntent-Type" : "application/json"
    }
})
.then(res=>res.json())
.then(data=>{
    dispatch(handleTodosLoading())
    fetch(`http://localhost:8080/todoList`)
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>dispatch(handleTodosErr()))
    navigate("/")
})
.catch(err=>console.log(err))

setNewTaskData(initialNewTaskData)
setListSubTodo([])
}


    return(
        <>
        <div style={{display:"flex"}}>
            <div>
                <Sidebar/>
            </div>
            <div>
                <div><Navbar/></div>
                <div style={{display:"flex"}}>
                    <div style={{display:"flex", flexDirection:"column", width:"45%",boxSizing:"border-box", padding:"20px"}}>
                        <input type="text" name="title" value={title} onChange={handleNewTaskOnchange} placeholder="Title"/>
                        <textarea name="description" id="description" onChange={handleNewTaskOnchange} value={description} cols="30" rows="10" placeholder="description"></textarea>
                        <div>
                            <label htmlFor="">Status</label>
                        <br />
                        <label htmlFor="">Todo</label>
                        <input type="radio" onChange={handleNewTaskOnchange} value={"todo"} name="status"/>
                        <br />
                        <label htmlFor="">In Progress</label>
                        <input type="radio" onChange={handleNewTaskOnchange}  value={"inProgress"} name="status"/>
                        <br />
                        <label htmlFor="">Completed</label>
                        <input type="radio" onChange={handleNewTaskOnchange}  value={"completed"}name="status"/>
                        </div>
                        <br />
                        <div>
                        <label htmlFor="">Tag</label>
                        <br />
                        <label htmlFor="">Official</label>
                        <input type="checkbox" name="personal" value={personal} onChange={handleNewTaskOnchange}/>
                        <br />
                        <label htmlFor="">Personal</label>
                        <input type="checkbox" name="personal" value={personal} onChange={handleNewTaskOnchange}/>
                        <br />
                        <label htmlFor="">others</label>
                        <input type="checkbox" name="others" value={others} onChange={handleNewTaskOnchange}/>
                        </div>                        
                    </div>
                    <div style={{width:"45%", display:"flex", flexDirection:"column", padding:"20px"}}>
                        <div>
                            <label htmlFor="">Sub task</label>
                            <input type="text" name="subTaskTitle" value={subTaskTitle} onChange={e=>handleOnchangeSubTodo(e)}/>
                            <button onClick={handleSubTodoAdd}>Add</button>
                        </div>
                        <div>
                            {listSubTodo?.map(ele=> <div key={ele.id}><input type="checkbox"/> <h2>{ele.subTaskTitle}</h2><button>Delete</button></div>)}
                        </div>                                           
                    </div>
                    <div>
                        <button onClick={e=>handleCreateNewTask()}>Create New Task</button> 
                    </div>
                </div>
            </div>
        </div>        
        </>
    )
}



export default NewTask