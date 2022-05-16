import { NoteListContainer } from "./NotesListContainer"



export const Sidebar = () => {
  return (
      <aside
        className="

            flex
            flex-col
            bg-my-color-two
            w-full
            h-screen
            p-5
        ">

          <h2 className="text-4xl text-center font-extrabold">Mis Notas</h2>
          <hr className="w-full bg-my-color-three h-1 rounded-xl border-none mb-7"/>

          <NoteListContainer />


          <footer className="

            bg-my-color-two
            flex
            flex-col
            items-end
            p-2
          ">
            <p className="w-full block uppercase mr-5 text-lg" >bienvenido <span className="text-my-color-five font-medium">NOMBRE</span></p>

            <button className="w-1/3 uppercase border-b border-my-color-four text-my-color-four">salir</button>
          </footer>

      </aside>
  )
}
