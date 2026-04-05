import { Link, NavLink } from "react-router";

export default function NavBar() {
  const navItems = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "border border-green-400 text-green-400" : ""
          }
          to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "border border-green-400 text-green-400" : ""
          }
          to="/books">
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "border border-green-400 text-green-400" : ""
          }
          to="/pages-to-read">
          Pages to Read
        </NavLink>
      </li>
    </>
  );
  return (
    <nav className=" bg-base-100 shadow-sm border-2 border-gray-300/60">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {navItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            Book Vibe
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end gap-4">
          <a className="btn bg-green-500 text-white">Sign In</a>
          <a className="btn bg-teal-500 text-white">Sign Up</a>
        </div>
      </div>
    </nav>
  );
}
