import { useContext } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext"



export const Private=({children})=>{

    const {token}=useContext(AuthContext);
    const navigate=useNavigate();

    if(!token){
        return <Navigate to="/login"/>;

    }

    return children

}