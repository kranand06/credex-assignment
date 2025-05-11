
import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-background-light dark:bg-background-dark text-text1-light dark:text-text1-dark px-6 text-center">

          <h1 className="text-9xl font-bold ">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mt-4">
            Oops! Page Not Found
          </h2>
          <p className="text-md md:text-lg text-text2-light dark:text-text2-dark mt-2">
            The page you're looking for doesn't exist or has been moved.
          </p>
    

          <Link to="/" className="mt-6">
            <button className="px-6 py-3 text-[#e0e0e0] dark:text-[#121212] bg-primary-light dark:bg-primary-dark font-semibold rounded-lg shadow-md hover:bg-hover-light dark:hover:bg-hover-dark transition-all">
              Go Home
            </button>
          </Link>
          <div className="absolute bottom-10 flex space-x-4">
            <span className="w-3 h-3 bg-text1-light dark:bg-text1-dark rounded-full animate-bounce"></span>
            <span className="w-3 h-3 bg-primary-light dark:bg-primary-dark rounded-full animate-bounce delay-400"></span>
            <span className="w-3 h-3 bg-text1-light dark:bg-text1-dark rounded-full animate-bounce delay-800"></span>
          </div>
        </div>
      );
};

export default Error404;