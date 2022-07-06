import { Navigate, Route, Routes } from "react-router-dom"
import { NoteHomePage, NotesWelcom, NoteNew, NoteEdit } from "../"


export const NoteRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={ <NoteHomePage /> }>

        <Route index element={ <NotesWelcom /> } />
        <Route path="mynote/newnote" element={ <NoteNew /> } />
        <Route path="mynote/:id" element={ <NoteEdit /> } />
        
      </Route>

      <Route path="/*" element={ <Navigate to="/" /> } />
      
    </Routes>
    
  )
}
