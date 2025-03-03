import { useContext } from "react";
import { dispatchContext } from "../store/notesReducer";
import { FiPlusCircle } from "react-icons/fi";
import { createNoteInFirebase } from "../Operations/firebaseOp";

const AddNoteBtn = () => {
  const dispatch = useContext(dispatchContext);

  const handleCreateNote = async () => {
    const tempNote = { id: Date.now(), title: "", content: "" }; // temp note just for firebase to generate and Id

    dispatch({
      type: "ADD_NOTE",
      payload: { id: tempNote.id, title: "", content: "" },
    });

    try {
      const noteID = await createNoteInFirebase(tempNote);

      dispatch({
        type: "UPDATE_NOTE_ID",
        payload: { oldId: tempNote.id, newId: noteID },
      });
    } catch (error) {
      console.error("failed to create a new note", error);
    }
  };

  return (
    <div className="w-full px-4">
      <button
        className=" lg:w-full text-white bg-blue-500 hover:bg-blue-600 flex justify-center items-center gap-2 capitalize py-2 px-6 rounded-md cursor-pointer transition-all"
        onClick={handleCreateNote}
      >
        <FiPlusCircle size={18} />
        new note
      </button>
    </div>
  );
};

export default AddNoteBtn;
