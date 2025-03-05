import Msg from "../components/Msg";
import NoteEditor from "../components/NoteEditor";

const Main = () => {
  return (
    <div className="w-[70%] bg-[#111] px-[150px] py-10 lg:w-[80%] h-screen flex flex-col gap-[60px] p-4">
      <NoteEditor />
      <Msg />
    </div>
  );
};

export default Main;
