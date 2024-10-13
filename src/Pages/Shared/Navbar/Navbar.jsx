import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { IoIosSunny } from "react-icons/io";
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState(false);
  // Logout user
  const handleLogout = () => {
    logoutUser()
      .then(() => {
        toast.success("Successfully logout to your account");
      })
      .catch((err) => toast.error(err.message));
  };

  // Dark mode handler
  const darkModeHandler = () => {
    setDarkMode(!darkMode);
    // console.log(darkMode);
    document.body.classList.toggle("dark");
    if (!darkMode) {
      document.body.style.background = "#373649";
    }
    if (darkMode) {
      document.body.style.background = "#fff";
    }
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? "text-primary" : isPending ? "pending" : ""
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? "text-primary" : isPending ? "pending" : ""
          }
          to={"/all-craft-items"}
        >
          All Art & craft Items
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isActive ? "text-primary" : isPending ? "pending" : ""
              }
              to={"/add-craft-items"}
            >
              Add Craft Item
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isActive ? "text-primary" : isPending ? "pending" : ""
              }
              to={"/my-craft-list"}
            >
              My Art & Craft List
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="bg-[#F2F2F2] dark:bg-[#151427] dark:text-white py-3">
      <div className="navbar max-w-7xl flex mx-auto">
        <Toaster position="bottom-right" reverseOrder={false} />
        <div className="navbar-start z-10">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-lg font-medium font-quicksand text-[#0D0D0D] dark:text-white"
            >
              {navLinks}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-3xl font-playFair">
            Cheer Craft
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-medium font-quicksand dark:text-white text-[#0D0D0D]">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end flex items-center">
          <div>
            <button onClick={darkModeHandler} className="text-3xl mr-5">
              {darkMode && <IoIosSunny title="Switch to light mode" />}
              {!darkMode && <MdOutlineDarkMode title="Switch to dark mode" />}
            </button>
          </div>
          {user ? (
            <>
              <div className="dropdown dropdown-end z-10">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-16 rounded-full">
                    <img
                      title={user.displayName}
                      alt={user.displayName}
                      src={user.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <h2 className="text-base">{user.displayName}</h2>
                  </li>
                  <li>
                    <h2 className="text-base">
                      Created: {user?.metadata?.creationTime?.slice(0, 11)}
                    </h2>
                  </li>
                  <li>
                    <h2
                      className="text-base text-orange"
                      onClick={handleLogout}
                    >
                      Logout
                    </h2>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link to={"/login"} className="btn mr-2 bg-orange text-[#000]">
                Login
              </Link>
              <Link to={"/register"} className="btn hidden lg:flex">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
