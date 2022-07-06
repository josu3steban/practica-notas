import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setActiveNote } from "../../../store/slices/note/noteSlice";


export const NotesList = ( {note} ) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const dateFormat = new Date(note.create);

  const handleSelectNote = ( id ) => {

    dispatch( setActiveNote( id ) );
    
    navigate( `/mynote/${id}` );
    
  }
  
  return (
    
    <div
      onClick={ () => handleSelectNote(note._id) }

      className="

        bg-white
        rounded-lg
        border-2
        border-my-color-five
        p-2
        cursor-pointer
        flex
        flex-col
        items-center
        mb-3
    ">

        <h3 className="text-lg font-medium">{note.title}</h3>
        <p className="text-sm">{ note.description }</p>
        <p className="text-xs text-left text-gray-500 w-full pt-3">creada: { `${dateFormat.getDate()}/${dateFormat.getMonth() + 1}/${dateFormat.getFullYear()} - ${dateFormat.getHours()}h:${dateFormat.getMinutes()}`}</p>
        
    </div>
    
  )
}
