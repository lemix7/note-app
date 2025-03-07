import { dispatchContext } from "../store/notesReducer";
import { useContext, useMemo, memo } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { deleteNoteFromFirebase } from "../Operations/firebaseOp";
import PropTypes from "prop-types";

const DeleteBtn = ({ noteid }) => {
  const dispatch = useContext(dispatchContext);

  const handleDeleteNote = useMemo(() => async (noteid) => {
    try {
      await deleteNoteFromFirebase(noteid);
      dispatch({ type: "DELETE_NOTE", payload: noteid });
    } catch (error) {
      console.error(error);
    }
  }, [dispatch]);

  return (
    <div>
      <button
        className="w-[30px] h-[30px] rounded-full cursor-pointer transition"
        onClick={() => handleDeleteNote(noteid)}
      >
        <AiOutlineDelete
          size={20}
          fill="#F1F5F9"
          className="hover:fill-red-600 transition"
        />
      </button>
    </div>
  );
};

DeleteBtn.propTypes = {
  noteid: PropTypes.string.isRequired,
};

export default memo(DeleteBtn);
