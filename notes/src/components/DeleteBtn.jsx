import { dispatchContext } from "../store/notesReducer";
import { useContext, useMemo, memo } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import PropTypes from 'prop-types';

const DeleteBtn = ({noteid}) => {
  const dispatch = useContext(dispatchContext);
  
  const handleDeleteNote = useMemo(() => {
    return () => dispatch({ type: "DELETE_NOTE", payload: noteid });
  }, [dispatch, noteid]);
  
  return (
    <div>
      <button
        className="w-[30px] h-[30px] rounded-full cursor-pointer transition"
        onClick={handleDeleteNote}
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
  noteid: PropTypes.string.isRequired 
};

export default memo(DeleteBtn);