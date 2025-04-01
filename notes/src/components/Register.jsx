import { doCreateUserWithEmailAndPassword } from "../firebase/auth";
// import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  const form = useForm();
  const { register, handleSubmit, formState, getValues } = form;
  const { errors } = formState;

  const navigate = useNavigate();

  const onSignUp = async (data) => {
    try {
      await doCreateUserWithEmailAndPassword(data.email, data.password);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
    console.log(data);
  };

  return (
    <div className="w-full h-full flex justify-center bg-black items-center">
      <div className="w-[500px] h-full flex flex-col justify-center text-white p-4">
        {/* Form header */}
        <div className="mb-8 flex flex-col gap-2">
          <h1 className="text-4xl font-bold mb-2">Sign Up</h1>
          <p className="text-gray-400 text-xl">Create your notes account</p>
        </div>

        {/* Signup form */}
        <form onSubmit={handleSubmit(onSignUp)} noValidate>
          {/* Name field */}
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-xl">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              className="w-full p-3 bg-[#1a1f2e] border-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none rounded-md text-white"
              required
              {...register("name", {
                required: {
                  value: true,
                  message: "name is required",
                },
              })}
            />
            <p className="text-sm text-red-500 mt-2">{errors.name?.message}</p>
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
              className="w-full p-3 bg-[#1a1f2e] border-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none rounded-md text-white"
              required
              {...register("email", {
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Please enter a valid email",
                },
              })}
            />
            <p className="text-sm text-red-500 mt-2">{errors.email?.message}</p>
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
              className="w-full p-3 bg-[#1a1f2e] border-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none rounded-md text-white"
              required
              {...register("password", {
                required: {
                  value: true,
                  message: "Invalid password",
                },
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />
            <p className="text-sm text-red-500 mt-2">
              {errors.password?.message}
            </p>
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
              className="w-full p-3 bg-[#1a1f2e] border-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none rounded-md text-white"
              required
              {...register("confirmPassword", {
                required: {
                  value: true,
                  message: "Confirm password is required",
                },
                // validate: (value) => value === formState.getValues("password") || "Passwords do not match"
                validate: (value) =>
                  value === getValues("password") || "Passwords do not match",
              })}
            />
            <p className="text-sm text-red-500 mt-2">
              {errors.confirmPassword?.message}
            </p>
          </div>

          {/* Terms and conditions checkbox */}
          <div className="mb-8 flex items-center gap-2">
            <input
              id="terms"
              type="checkbox"
              className="border-[#4d7cfe] h-4 w-4"
              required
              {...register("terms", {
                required: {
                  value: true,
                  message: "You must agree to the terms and conditions",
                },
              })}
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
            <p className="text-sm text-red-500 mt-2">{errors.terms?.message}</p>
          </div>

          {/* Sign Up button */}
          <button
            type="submit"
            className="w-full p-2 cursor-pointer bg-[#4d7cfe] hover:bg-[#3a69eb] text-white text-xl rounded-md"
          >
            Sign Up
          </button>
        </form>

        {/* <DevTool control={control}/> */}
        {/* Login link */}
        <div className="mt-8 text-center">
          <span className="text-gray-400">Already have an account? </span>
          <Link to={`/`} className="text-[#4d7cfe] hover:underline">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
