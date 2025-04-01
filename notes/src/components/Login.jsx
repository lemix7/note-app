/* eslint-disable react/no-unescaped-entities */
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../firebase/auth";
// import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { GoogleLogo } from "../assets/google";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Login = () => {
  // const { userLoggedIn } = useAuth();

  const [loginMsg, setLoginMsg] = useState("");

  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const navigate = useNavigate();

  const handleLogIn = async (data) => {
    try {
      await doSignInWithEmailAndPassword(data.email, data.password);
      navigate("/Homepage");
    } catch (err) {
      console.error(err);
      switch (err.code) {
        case "auth/invalid-credential":
          setLoginMsg("Invalid email or password");
          break;
        case "auth/user-not-found":
          setLoginMsg("No user found with this email");
          break;
        case "auth/wrong-password":
          setLoginMsg("Wrong password");
          break;
        default:
          setLoginMsg("Login error:", err.message);
      }
    }
  };

  const handleGoogleSignIn =  async (e) => {
    e.preventDefault();
    try {
      await doSignInWithGoogle();
      navigate("/Homepage");
    } catch (err) {
      console.error(err);
    }
  };

  //backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl rounded-xl;

  return (
    <div className=" w-full h-full flex justify-center  bg-black items-center">
      <div className="w-[500px] h-full flex flex-col  justify-center text-white p-4">
        {/* Form header */}
        <div className="mb-8 flex flex-col gap-2">
          <h1 className="text-4xl font-bold mb-2">Log In</h1>
          <p className="text-gray-400 text-xl">Welcome back to your notes</p>
        </div>

        {/* Login form */}
        <form onSubmit={handleSubmit(handleLogIn)} noValidate>
          {/* Email field */}
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-xl">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 bg-[#1a1f2e] border-none  outline-none  rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-white"
              {...register("email", {
                required: "email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a valid email",
                },
              })}
            />
            <p className="text-sm text-red-500 mt-2">{errors.email?.message}</p>
          </div>

          {/* Password field with forgot password link */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="password" className="text-xl">
                Password
              </label>
              <a href="#" className="text-[#4d7cfe] text-sm hover:underline">
                Forgot password?
              </a>
            </div>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 bg-[#1a1f2e] outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500  border-none rounded-md text-white"
              {...register("password", {
                required: {
                  value: true,
                  message: "Invalid email or password",
                },
              })}
            />
            <p className="text-sm text-red-500 mt-2">
              {errors.password?.message}
            </p>
          </div>

          {/* Remember me checkbox */}
          <div className="mb-4 flex items-center gap-2">
            <input
              id="remember"
              type="checkbox"
              className="border-[#4d7cfe]   h-4 w-4"
            />
            <label htmlFor="remember" className="">
              Remember me for 30 days
            </label>
          </div>

          <p className="mb-4 text-red-500">{loginMsg}</p>

          {/* Login button */}
          <button
            type="submit"
            className="w-full p-2 cursor-pointer bg-[#4d7cfe] hover:bg-[#3a69eb] text-white text-xl rounded-md"
            onClick={handleLogIn}
          >
            Log In
          </button>
        </form>

        <div className="relative flex items-center my-4">
          <div className="flex-grow border-t border-gray-700"></div>
          <span className="mx-4 flex-shrink text-gray-400">or</span>
          <div className="flex-grow border-t border-gray-700"></div>
        </div>

        <button
          type="submit"
          className="w-full p-2 cursor-pointer flex items-center justify-center gap-4 text-xl rounded-md text-black bg-white font-semibold transition"
          onClick={handleGoogleSignIn}
        >
          <GoogleLogo className="h-6 w-6" />
          Sign in with Google
        </button>

        <div className="mt-4 text-center">
          <span className="text-gray-400">Don't have an account ? </span>
          <Link to={`/SignUp`} className="text-[#4d7cfe] hover:underline">
            Sign Up{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
