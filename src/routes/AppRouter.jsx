import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "../components/notes/HomePage"
import { AuthRouter } from "./AuthRouter"
import { PrivateRoutes } from "./PrivateRoutes"
import { PublicRoutes } from "./PublicRoutes"


export const AppRouter = () => {
  return (

    <BrowserRouter>
    
        <Routes>

            <Route path="/auth/*" element={ 
                <PublicRoutes>
                    <AuthRouter />      
                </PublicRoutes>
            } />

            <Route path="/*" element={
                <PrivateRoutes>
                    <HomePage />
                </PrivateRoutes>
            } />
            
        </Routes>
    
    </BrowserRouter>
    
  )
}
