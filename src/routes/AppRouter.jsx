import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../components/auth/routes/AuthRoutes";
import { NoteRoutes } from "../components/notes/routes/NoteRoutes";


export const AppRouter = () => {

    
  return (

    <Routes>

      //rutas publicas
      <Route path="/auth/*" element={ <AuthRoutes /> }/>

      //rutas provadas
      <Route path="/*" element={ <NoteRoutes /> } />
        
    </Routes>
    
  )
}
