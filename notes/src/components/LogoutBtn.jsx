import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useContext } from "react";
import { stateContext } from "../store/notesReducer";
import { useNavigate } from "react-router-dom";

const LogoutBtn = () => {
  const { dispatch } = useContext(stateContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Clear the notes state when logging out
      dispatch({ type: "SET_NOTES", payload: [] });
      dispatch({ type: "SELECT_NOTE", payload: null });
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 cursor-pointer w-full  hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
