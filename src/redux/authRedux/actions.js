import { LOGIN_ERR, LOGIN_LOADING, LOGIN_SUCCESSFUL, LOG_OUT, USER_DETAILS } from "./actionTypes";


export const handleLoginLoading=() =>{

    return{
        type: LOGIN_LOADING
    }
}

export const handleLoginSuccessful=(payload) =>{

    return{
        type: LOGIN_SUCCESSFUL,
        payload
    }
}

export const handleLoginErr=() =>{

    return{
        type: LOGIN_ERR
    }
}

export const handleLogout=() =>{

    return{
        type: LOG_OUT
    }
}
export const handleUserDetails=(payload)=>{

    return{
        type: USER_DETAILS,
        payload
    }
}