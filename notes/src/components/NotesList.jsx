import { motion } from "framer-motion";
import { noteVariants } from "../animation/note";
import { useContext } from "react";
import Note from "../components/Note";
import { stateContext } from "../store/notesReducer";
import DeleteBtn from "../components/DeleteBtn";

const NotesList = () => {
    const { state, dispatch } = useContext(stateContext);

  return (
    <div className="w-full flex flex-col items-center  gap-5 p-4">
    {state.notes.map((note) => (
      <motion.div
        className="w-full flex items-center gap-3"
        key={note.id}
        variants={noteVariants}
        animate="visible"
        initial="hidden"
      >
        <Note
          title={note.title || "Untitled"}
          key={note.id}
          onclick={() =>
            dispatch({ type: "SELECT_NOTE", payload: note.id })
          }
        />

          <DeleteBtn noteid={note.id}/>
     
      </motion.div>
    ))}
  </div>
  )
}
export default NotesList
