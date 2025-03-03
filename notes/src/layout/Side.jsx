
import NotesList from "../components/NotesList";
import AddNoteBtn from "../components/AddNoteBtn";
import Logo from "../components/Logo";

const Side = () => {
  return (
    <div className="w-[30%] bg-black lg:w-[20%] h-screen border-r border-gray-400 flex flex-col items-center gap-4">
      <Logo />
      <AddNoteBtn />
      <NotesList />
    </div>
  );
};

export default Side;
