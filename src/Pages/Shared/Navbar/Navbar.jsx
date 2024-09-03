import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? "text-primary" : isPending ? "pending" : "text-[#0D0D0D]"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? "text-primary" : isPending ? "pending" : "text-[#0D0D0D]"
          }
          to={"/all-craft-items"}
        >
          All Art & craft Items
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? "text-primary" : isPending ? "pending" : "text-[#0D0D0D]"
          }
          to={"/add-craft-items"}
        >
          Add Craft Item
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? "text-primary" : isPending ? "pending" : "text-[#0D0D0D]"
          }
          to={"/my-craft-list"}
        >
          My Art & Craft List
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-[#F2F2F2] py-3">
      <div className="navbar max-w-7xl flex mx-auto">
        <div className="navbar-start">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-lg font-medium font-quicksand"
            >
              {navLinks}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-3xl font-playFair">
            Cheer Craft
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-medium font-quicksand">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to={"/login"} className="btn">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
