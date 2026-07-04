// we make this so that the unregisterd user can not acess the home page 

import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";
import React from 'react'

const Protected = ({children}) => {
    const { loading,user } = useAuth()

//useNavigate is a hook, and hooks can't be called conditionally or before an early return.
    
if(loading){
        return (<main><h1>Loading...</h1></main>)  // ← early return
    }


//  useNavigate would have to be used AFTER the early return above
    if(!user){
        return <Navigate to={'/login'} />  //<Navigate> is not a hook — it's a regular React component
    }
    
    return children
}

export default Protected