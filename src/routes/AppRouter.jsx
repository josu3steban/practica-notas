import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";


import { HomePage } from "../components/notes/HomePage";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { useEffect } from "react";


export const AppRouter = () => {

    const { checking } = useSelector( state => state.auth );

    useEffect( () => {
            
        console.log(checking);
    
    }, [] );

    
  return (

    <BrowserRouter>
    
        <Routes>

            <Route path="/auth/*" element={ 
                <PublicRoutes checking={checking}>
                    <AuthRouter />      
                </PublicRoutes>
            } />

            <Route path="/*" element={
                <PrivateRoutes checking={checking}>
                    <HomePage />
                </PrivateRoutes>
            } />
            
        </Routes>
    
    </BrowserRouter>
    
  )
}
