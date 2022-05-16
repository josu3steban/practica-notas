import { NotesList } from "./NotesList"


export const NoteListContainer = () => {

  const notas = [
    { id: 1, title: "Nota 1"},
    { id: 2, title: "Nota 2"},
    { id: 3, title: "Nota 3"},
    { id: 4, title: "Nota 4"},
    { id: 5, title: "Nota 5"},
    { id: 6, title: "Nota 6"},
    { id: 7, title: "Nota 7"},
    { id: 8, title: "Nota 8"},
    { id: 9, title: "Nota 9"},
    { id: 10, title: "Nota 10"}
  ]
  
  return (

    <main className="p-2">

      {
        notas.map( note => (
          <NotesList key={ note.id } note={ note } />
        ))
      }
        
    </main>
    
  )
}
