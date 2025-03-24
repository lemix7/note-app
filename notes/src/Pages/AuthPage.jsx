import Register from "../components/Register";
import Login from "../components/Login";
import { useState } from "react";

const AuthPage = () => {
  const [openLogin, setOpenLogin] = useState(false);
  return (
    <div className="h-screen w-full bg-black flex flex-col items-center ">
      {!openLogin ? <Register /> : <Login />}
      <button
        className="text-white border-white border-2 w-[150px] mb-3 h-[50px] py-2 px-4 rounded-sm cursor-pointer"
        onClick={() => {
          setOpenLogin(!openLogin);
        }}
      >
        open login in{" "}
      </button>
    </div>
  );
};

export default AuthPage;
