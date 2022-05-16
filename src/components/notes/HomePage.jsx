import { NotePage } from "./NotePage"
import { Sidebar } from "./Sidebar"


export const HomePage = () => {
  return (
    
    <main className="
      flex
    ">

        <div className="

          w-1/4
        ">
          <Sidebar />
        </div>

        <div className="w-3/4">
          <NotePage />
        </div>

        
    </main>
    
  )
}
