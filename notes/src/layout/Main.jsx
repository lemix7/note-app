import Msg from "../components/Msg";
import NoteEditor from "../components/NoteEditor";
import PropTypes from "prop-types";

const Main = ({ isSidebarOpen }) => {
  return (
    <div
      className={`bg-[#111] w-[70%] md:w-full max-md:w-full h-screen transition-all duration-300 ease-in-out`}
    >
      
      <div className="h-full flex flex-col justify-center gap-6 px-4 sm:px-8 md:px-12  py-10">
        <NoteEditor />
        <Msg />
      </div>
    </div>
  );
};

Main.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
};

export default Main;


