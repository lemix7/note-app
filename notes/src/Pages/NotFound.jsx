/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-9xl font-bold">404</h1>
          <p className="mt-2 text-xl text-gray-400">Page not found</p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-lg">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="mt-8">
          <Link
            to={"/"}
            className="block w-full rounded-md bg-blue-600 py-3 text-center font-medium text-white hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
