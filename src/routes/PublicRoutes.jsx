import { Navigate, Route, Routes } from "react-router-dom"
import { SigninPage } from "../components/auth/SigninPage"
import { SignupPage } from "../components/auth/SignupPage"


export const PublicRoutes = ( { children} ) => {

    const logged = false;
    
  return (
    
    logged
        ? <Navigate to="/" />
        : children
    
  )
}
