import { useState } from "react";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../firebase/auth";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {GoogleLogo} from "../assets/google";

const Login = () => {
  // const { userLoggedIn } = useAuth();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMsg, setErrorMsg] = useState({
    email: "",
    password: "",
  });

  const handleLogIn = async (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      errorMsg.email = "please enter a valid email address";
    }
    if (password.length > 8) {
      errorMsg.password = "wrong password";
    }

    if (!isSigningIn) {
      setIsSigningIn(true);
      await doSignInWithEmailAndPassword(email, password);
      navigate("/");
    }
  };

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      doSignInWithGoogle().catch((err) => {
        setIsSigningIn(false);
        console.log(err);
      });
    }
  };

  return (
    <div className=" w-full h-full flex justify-center  bg-black items-center">
      <div className="w-[500px] h-full flex flex-col  justify-center text-white p-4">
        {/* Form header */}
        <div className="mb-8 flex flex-col gap-2">
          <h1 className="text-4xl font-bold mb-2">Log In</h1>
          <p className="text-gray-400 text-xl">Welcome back to your notes</p>
        </div>
        {/* Login form */}
        <form>
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
              required
              onChange={(e) => setEmail(e.target.value)}
            />
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
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* Remember me checkbox */}
          <div className="mb-8 flex items-center gap-2">
            <input
              id="remember"
              type="checkbox"
              className="border-[#4d7cfe]   h-4 w-4"
            />
            <label htmlFor="remember" className="">
              Remember me for 30 days
            </label>
          </div>
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
          className="w-full p-2 cursor-pointer flex items-center justify-center gap-4 bg-gray-800 hover:bg-gray-900 text-white text-xl rounded-md hover:text-black hover:bg-white font-semibold transition"
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
