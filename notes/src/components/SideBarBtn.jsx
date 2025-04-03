import { RxHamburgerMenu } from "react-icons/rx";

const SideBarBtn = ({ openSidebar }) => {
  return (
    <>
      <button
        onClick={openSidebar}
        className="w-[35px] h-[35px] text-white flex  justify-center items-center cursor-pointer hover:bg-gray-400/30 active:bg-gray-500/30 p-2 rounded-full transition  "
      >
        <RxHamburgerMenu size={50} />
      </button>
    </>
  );
};

export default SideBarBtn;
