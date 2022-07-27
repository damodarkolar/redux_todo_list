import { TODOS_LOADING, TODOS_SUCCESS, TODOS_ERR } from "./actionTypes";


export const handleTodosLoading =()=>{

    return{
        type:TODOS_LOADING
    }
}
export const handleTodosSuccess =(payload)=>{

    return{
        type:TODOS_SUCCESS,
        payload
    }
}

export const handleTodosErr =()=>{

    return{
        type:TODOS_ERR
    }
}