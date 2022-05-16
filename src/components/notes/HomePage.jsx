import { Navigate, Route, Routes } from "react-router-dom"
import { NoteForm } from "./NoteForm"
import { NoteHomePage } from "./NoteHomePage"
import { NotesWelcom } from "./NotesWelcom"


export const HomePage = () => {
  return (
    <Routes>

      <Route path="/" element={ <NoteHomePage /> }>

        <Route index element={ <NotesWelcom /> } />
        <Route path="mynote/:id" element={ <NoteForm /> } />
        
      </Route>

      <Route path="/*" element={ <Navigate to="/" /> } />
      
    </Routes>
    
  )
}
