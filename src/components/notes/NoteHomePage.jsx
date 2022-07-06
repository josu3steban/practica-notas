import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Outlet } from "react-router-dom";
import { startLoadNotes } from "../../store/slices/note/noteThunk";
import { NotePage } from "./NotePage";
import { Sidebar } from "./sidebar/Sidebar";


export const NoteHomePage = () => {

  const dispatch = useDispatch();
  
  
  useEffect( () => {

    dispatch( startLoadNotes() );
    
  }, []);
  
  
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
