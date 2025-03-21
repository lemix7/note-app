


const Login = () => {
  return (
    <div className=" w-full h-full flex justify-center  bg-black items-center">
      <div className="w-[500px] h-full flex flex-col  justify-center text-white p-4">
        {/* Form header */}
        <div className="mb-8 flex flex-col gap-2">
          <h1 className="text-3xl font-bold mb-2">Log In</h1>
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
              className="w-full p-3 bg-[#1a1f2e] border-none  outline-none  rounded-md text-white"
              required
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
              className="w-full p-3 bg-[#1a1f2e] outline-none  border-none rounded-md text-white"
              required
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
          >
            Log In
          </button>
        </form>
        {/* Support link */}
        <div className="mt-8 text-center">
          <span className="text-gray-400">Need help? </span>
          <a href="#" className="text-[#4d7cfe] hover:underline">
            Contact support
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
