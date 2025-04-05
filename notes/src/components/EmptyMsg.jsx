import SideBarBtn from "./SideBarBtn";
import { useContext } from "react";
import { stateContext } from "../store/notesReducer";

const EmptyMsg = () => {
  const { state, dispatch } = useContext(stateContext);

  const handleClick = () => {
    dispatch({ type: "TOOGLE_SIDEBAR" });
    console.log(state.isSideBarOpen);
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="md:block lg:hidden h-[20%]">
        <SideBarBtn openSidebar={handleClick} />
      </div>
      <div className="w-full h-[80%] flex justify-center md:py-[200px] max-md:py-[200px] lg:items-center  ">
        <p className="text-gray-400">Select a note or create a new one </p>
      </div>
    </div>
  );
};

export default EmptyMsg;
