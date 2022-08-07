import { useDispatch, useSelector } from "react-redux"
import { handleTodosLoading,  handleTodosErr, handleTodosSuccess} from "../redux/todoRedux/action";
import {useEffect} from "react"
import { HomeCardsSubtasks } from "./HomeCardsSubtasks";
import { HomeCards } from "./HomeCards";
const HomeTodos=()=>{
const dispatch=useDispatch();
    const {token}=useSelector(state=>state.auth);
    const {todosData}=useSelector(state=>state.todos)

    useEffect(() => {
        dispatch(handleTodosLoading())
      fetch(`http://localhost:8080/todoList`)
      .then(res=>res.json())
      .then(data=>dispatch(handleTodosSuccess(data)))
      .catch(err=>dispatch(handleTodosErr()))

    }, [])

    return(
        <>
        <div style={{display:"flex", justifyContent:"space-around"}}>
            <div >
                <h1>TODO</h1>
                {todosData?.map(ele=> ele.status=="todo"?<HomeCards data={ele} key={ele.id}/>: null)}
            </div>
            <div>
            <h1>IN PROGRESS</h1>
            {todosData?.map(ele=> ele.status=="inProgress"?<HomeCards  data={ele}key={ele.id}/>: null)}
            </div>
            <div>
            <h1>DONE</h1>
            {todosData?.map(ele=> ele.status=="completed"?<HomeCards data={ele}key={ele.id}/>: null)}
            </div>
        </div>        
        </>
    )
}



export default HomeTodos