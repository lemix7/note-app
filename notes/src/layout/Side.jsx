import NotesList from "../components/NotesList";
import AddNoteBtn from "../components/AddNoteBtn";
import Logo from "../components/Logo";
import LogoutBtn from "../components/LogoutBtn";
import PropTypes from "prop-types";
import { useContext } from "react";
import { stateContext } from "../store/notesReducer";

const Side = () => {
  const { state } = useContext(stateContext);

  const { isSideBarOpen } = state;

  return (
    <div
      className={`bg-black lg:w-[30%]  ${isSideBarOpen ? "" : ""} h-screen border-r  border-gray-400 flex flex-col items-center gap-4 transition-all duration-300  ease-in-out overflow-hidden sm:relative sm:z-50`}
    >
      <Logo  />
      <AddNoteBtn />
      <NotesList />
      <div className="mt-auto mb-4">
        <LogoutBtn />
      </div>
    </div>
  );
};

Side.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Side;

// `${
//         isOpen
//           ? "w-[80%] sm:w-[0%] md:w-[40%] lg:w-[30%] xl:w-[25%]"
//           : "w-[10%] "
//       }
