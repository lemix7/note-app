import { useContext } from "react"
import { stateContext } from "../store/notesReducer"
import { FiPlusCircle } from "react-icons/fi";


const AddNoteBtn = () => {
    const {dispatch} = useContext(stateContext)

  return (
    <div className="w-full px-4">
        <button className=" lg:w-full text-white bg-blue-500 hover:bg-blue-600 flex justify-center items-center gap-2 capitalize py-2 px-6 rounded-md cursor-pointer transition-all" onClick={() => dispatch({type : 'ADD_NOTE'})}>
        <FiPlusCircle size={18}/>
          new note
        </button>
    </div>
  )
}

export default AddNoteBtn