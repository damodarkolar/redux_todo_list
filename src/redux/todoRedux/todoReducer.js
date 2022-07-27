import { TODOS_LOADING, TODOS_SUCCESS, TODOS_ERR } from "./actionTypes";

const initialState={
    todosLoading: false,
    todosErr: false,
    todosData:[]
}

export const todosReducer= (store=initialState, {type, payload})=>{
    switch (type) {
        case TODOS_LOADING:
            return {
                todosLoading: true,
                todosErr: false,
            }

            case TODOS_SUCCESS:
                return {
                    todosLoading: false,
                    todosErr: false,
                    todosData:payload
                }

                case TODOS_ERR:
                    return {
                        todosLoading: false,
                        todosErr: true,
                    }
    
        default:
            return {...store}
    }
}