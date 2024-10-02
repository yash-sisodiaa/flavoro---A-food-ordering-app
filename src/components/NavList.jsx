import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const NavList = ({ toggleNav, setToggleNav, auth }) => {
  const handleLogout = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/logout");
      const data = res.data; 
      toast.success(data.message);

      // Adding a slight delay to allow toast notification to show
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } catch (error) {
      toast.error("Logout failed. Please try again.");
      console.error("Logout error:", error); // Logging the error for debugging
    }
  };

  return (
    <div
      className={`${
        !toggleNav && "translate-x-[200px]"
      } fixed top-12 right-5 lg:right-8 p-3 w-fit bg-white bg-opacity-10 backdrop-blur-sm flex flex-col justify-center items-start rounded-lg shadow-md border border-white font-bold text-gray-600 transition-all duration-500 ease-in-out`}
    >
      {auth ? (
        <li onClick={handleLogout} className="hover:text-black select-none list-none">
          Logout
        </li>
      ) : (
        <div className="flex flex-col">
          <Link to="/login" className="hover:text-black select-none">
            Login{" "}
          </Link>
          <Link to="/signup" className="hover:text-black select-none">
            Signup{" "}
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavList;
