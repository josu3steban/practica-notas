import { Outlet } from "react-router-dom"
import { NotePage } from "./NotePage"
import { Sidebar } from "./sidebar/Sidebar"


export const NoteHomePage = () => {
  return (
    
    <main className="
      flex
    ">

        <div className="

          w-1/4
        ">
          <Sidebar />
        </div>


        <div className="w-3/4 bg-my-color-three max-h-screen">
          <NotePage>
            <Outlet />
          </NotePage>
        </div>
        

        
    </main>

  )
}
