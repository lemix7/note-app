import { useState } from "react";
import { doCreateUserWithEmailAndPassword } from "../firebase/auth";
import { useAuth } from "../context/AuthProvider";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSignUp = async () => {
    if (!isRegistered) {
      setIsRegistered(true);
      await doCreateUserWithEmailAndPassword(email, password);
    }
  };

  return (
    <div className="w-full h-full flex justify-center bg-black items-center">
      <div className="w-[500px] h-full flex flex-col justify-center text-white p-4">
        {/* Form header */}
        <div className="mb-8 flex flex-col gap-2">
          <h1 className="text-3xl font-bold mb-2">Sign Up</h1>
          <p className="text-gray-400 text-xl">Create your notes account</p>
        </div>

        {/* Signup form */}
        <form>
          {/* Name field */}
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-xl">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              className="w-full p-3 bg-[#1a1f2e] border-none outline-none rounded-md text-white"
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          {/* Email field */}
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-xl">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 bg-[#1a1f2e] border-none outline-none rounded-md text-white"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          {/* Password field */}
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-xl">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Create a password"
              className="w-full p-3 bg-[#1a1f2e] border-none outline-none rounded-md text-white"
              required
              minLength={8}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          {/* Confirm Password field */}
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block mb-2 text-xl">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              className="w-full p-3 bg-[#1a1f2e] border-none outline-none rounded-md text-white"
              required
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
            {/* {passwordError && <p className="mt-2 text-red-500">{passwordError}</p>} */}
          </div>

          {/* Terms and conditions checkbox */}
          <div className="mb-8 flex items-center gap-2">
            <input
              id="terms"
              type="checkbox"
              className="border-[#4d7cfe] h-4 w-4"
              required
            />
            <label htmlFor="terms" className="">
              I agree to the{" "}
              <a href="#" className="text-[#4d7cfe] hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-[#4d7cfe] hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>

          {/* Sign Up button */}
          <button
            type="submit"
            className="w-full p-2 cursor-pointer bg-[#4d7cfe] hover:bg-[#3a69eb] text-white text-xl rounded-md"
            onClick={handleSignUp()}
          >
            Sign Up
          </button>
        </form>

        {/* Login link */}
        <div className="mt-8 text-center">
          <span className="text-gray-400">Already have an account? </span>
          <a href="/login" className="text-[#4d7cfe] hover:underline">
            Log In
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
