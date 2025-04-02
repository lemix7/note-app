import { motion } from "framer-motion";
import { noteVariants } from "../animation/note";
import { useContext, useEffect } from "react";
import Note from "../components/Note";
import { stateContext } from "../store/notesReducer";
import DeleteBtn from "../components/DeleteBtn";
import React from "react";
import { fetchNotesFromFirebase } from "../Operations/firebaseOp";
import { auth } from "../config/firebase";

const MemoNote = React.memo(Note);

const NotesList = () => {
  const { state, dispatch } = useContext(stateContext);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const fetchedNotes = await fetchNotesFromFirebase();
          dispatch({ type: "SET_NOTES", payload: fetchedNotes });
        } catch (error) {
          console.error("Failed to fetch notes:", error);
        }
      } else {
        // Clear notes when user is not authenticated
        dispatch({ type: "SET_NOTES", payload: [] });
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch]);

  const handleClick = React.useCallback(
    (id) => {
      dispatch({ type: "SELECT_NOTE", payload: id });
    },
    [dispatch]
  );

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
          <MemoNote
            title={note.title || "Untitled"}
            key={note.id}
            onclick={() => handleClick(note.id)}
          />

          <DeleteBtn noteid={note.id} />
        </motion.div>
      ))}
    </div>
  );
};
export default NotesList;
