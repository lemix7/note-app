import PropTypes from "prop-types";

const Logo = () => {
  return (
    <div className="w-full h-[100px] border-b-2 border-gray-500 flex justify-between  md:px-4 items-center py-5">
      <h1 className="text-2xl font-semibold text-white">Notes</h1>
      <button  className=" lg:hidden w-[35px] h-[35px] text-white flex  justify-center items-center cursor-pointer hover:bg-gray-400/30 active:bg-gray-500/30 p-2 rounded-full transition text-xl  ">X</button>
      
    </div>
  );
};

Logo.propTypes = {
  onMenuClick: PropTypes.func.isRequired,
};

export default Logo;
