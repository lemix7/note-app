import Msg from "../components/Msg";
import NoteEditor from "../components/NoteEditor";
import Login from "../components/Login";
import Register from "../components/Register";


const Main = () => {
  return (
    <div className="w-[70%] bg-[#111] lg:w-[80%] h-screen">
      <div className="h-full  flex flex-col justify-center gap-[60px] px-[150px] py-10 ">
        <NoteEditor />
        <Msg />
      </div>

      {/* <Login /> */}
      {/* <Register /> */}
    </div>
  );
};

export default Main;
