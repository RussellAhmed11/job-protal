import { useContext } from "react";
import AuthContex from "../Contex/AuthContex/AuthContex";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const {user,loading}=useContext(AuthContex);
    const loaction =useLocation()
    if(loading){
        return <span className="loading loading-ring loading-lg"></span>
    }
    if(user){
       return children
    }
    return <Navigate to={'/signin'} state={loaction?.pathname}></Navigate>
};

export default PrivetRoute;