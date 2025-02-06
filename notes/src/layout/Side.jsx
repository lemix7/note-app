import { useContext } from "react";
import Note from "../components/Note";
import { stateContext } from "../store/notesReducer";
import AddNoteBtn from "../components/AddNoteBtn";
import Logo from "../components/Logo";
import { AiOutlineDelete } from "react-icons/ai";
import { motion } from "framer-motion";
import { noteVariants } from "../animation/note";



const Side = () => {
  const { state, dispatch } = useContext(stateContext);

  return (
    <div className=" w-[30%] bg-black lg:w-[20%] h-screen border-r border-gray-400 flex flex-col items-center gap-4">
      <Logo />
      <AddNoteBtn />

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

            <button
              className="w-[30px] h-[30px] rounded-full cursor-pointer  transition"
              onClick={() =>
                dispatch({ type: "DELETE_NOTE", payload: note.id })
              }
            >
              <AiOutlineDelete
                size={20}
                fill="#F1F5F9"
                className="hover:fill-red-600 transition"
              />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Side;
