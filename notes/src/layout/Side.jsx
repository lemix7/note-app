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
      className={`bg-black h-screen border-r lg:w-[30%]  border-gray-400 flex flex-col items-center gap-4 transition-all duration-300 ease-in-out overflow-hidden
    ${
      isSideBarOpen
        ? " max-md:fixed max-md:top-0 max-md:left-0 z-50 max-md:w-[50%] sm:w-[50%] md:w-[40%] "
        : "w-0 overflow-hidden "
    }`}
    >
      <Logo />
      <AddNoteBtn />
      <NotesList />
      <div className="mt-auto w-full mb-4 px-5">
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
