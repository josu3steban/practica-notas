import { NoteListContainer } from "./NotesListContainer"
import IconNewNote from '../../../assets/img/icons/icon-new-note.png'
import { useNavigate } from "react-router-dom"


export const Sidebar = () => {

  const navigate = useNavigate();

  const handleNewNote = () => {

    navigate( '/mynote/new' );
    
  }

  const handleLogout = () => {

    navigate( '/auth/signin' );
    
  }
  
  return (
      <aside
        className="

          flex
          flex-col
          bg-my-color-two
          w-full
          h-screen
        ">


          <header onClick={ () => navigate('/') } className="p-2 cursor-pointer">
            <p className="w-full block uppercase mr-5 text-lg" >bienvenido <span className="text-my-color-five font-medium">NOMBRE</span></p>
          </header>

          <section onClick={ handleNewNote } className="flex items-center gap-5 hover:shadow-md border-2 border-transparent hover:border-my-color-five p-2 rounded-md transition-all duration-300 cursor-pointer m-2">
            <div className="w-1/5">
              <img className="w-full" src={ IconNewNote } alt="Icono nueva nota" />
            </div>

            <div className="text-3xl font-extrabold">
              <h3>Nueva Nota</h3>
            </div>
          </section>

            {/* <h2 className="text-4xl text-center font-extrabold">Mis Notas</h2>
            <hr className="w-full bg-my-color-three h-1 rounded-xl border-none mb-7"/> */}

          <div className="grow overflow-y-scroll">
            <NoteListContainer />
          </div>


          <footer className="p-2 text-right">
            <button onClick={ handleLogout } className="w-auto px-2 uppercase border rounded-md bg-my-color-four text-my-color-two font-medium">salir</button>
          </footer>

      </aside>
  )
}
