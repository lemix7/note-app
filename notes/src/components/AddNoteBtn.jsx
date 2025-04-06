import { useContext, useMemo , memo } from "react";
import { dispatchContext } from "../store/notesReducer";
import { FiPlusCircle } from "react-icons/fi";
import { createNoteInFirebase } from "../Operations/firebaseOp";

const AddNoteBtn = () => {
  const dispatch = useContext(dispatchContext);

  const handleCreateNote = useMemo(() => async () => {
    const tempNote = { id: Date.now(), title: "", content: "" }; // temp note just for firebase to generate and Id

    try {
      const noteID = await createNoteInFirebase(tempNote);
      dispatch({
        type: "ADD_NOTE",
        payload: { id:noteID , title: "", content: "" },
      });

      // if(noteID !== tempNote.id){ this will cause the note to render twice 
      //   dispatch({
      //     type: "UPDATE_NOTE_ID",
      //     payload: { oldID: tempNote.id, newID: noteID }
      //   });
      // } 

    } catch (error) {
      console.error("failed to create a new note", error); 
    }
  }, [dispatch]);

  return (
    <div className="w-full px-4">
      <button
        className=" w-full text-white bg-blue-500 hover:bg-blue-600 flex justify-center items-center gap-2 capitalize py-2 px-6 rounded-md cursor-pointer transition-all"
        onClick={handleCreateNote}
      >
        <FiPlusCircle size={18} />
        new note
      </button>
    </div>
  );
};

export default memo(AddNoteBtn);
