import { LOGIN_LOADING, LOGIN_SUCCESSFUL, LOG_OUT, LOGIN_ERR, USER_DETAILS } from "./actionTypes"; 


const initialState={
    loginLoading:false,
    loginErr:false,
    token:"",
    userDetails:{}
}
export const authReducer =(store=initialState, action)=>{

    switch (action.type) {
        case LOGIN_LOADING:
            return{
                ...store,
                loginLoading:true,
                loginErr:false
            }
            case LOGIN_SUCCESSFUL:
                return{
                    ...store,
                    loginLoading:false,
                    loginErr:false,
                    token: action.payload,
                }
                case LOGIN_ERR:
                return{
                    ...store,
                    loginLoading:false,
                    loginErr:true,
                }
                case LOG_OUT:
                    return{
                        ...store,
                        token:""
                    } 
                    case USER_DETAILS:
                        return{
                            ...store,
                            userDetails:action.payload
                        }     
    
        default:
            return{ 
                ...store
            }
    }
}