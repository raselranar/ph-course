import GradientButton from "../UI/GradientButton";
import { FiShoppingCart } from "react-icons/fi";

export default function NavBar({ selectProduct }) {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost min-[830px]:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {/* nav link for side bar */}
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 *:text-base rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <a className="font-semibold leading-[120%]">Solutions</a>
              </li>
              <li>
                <a className="font-semibold leading-[120%]">Capabilities</a>
              </li>
              <li>
                <a className="font-semibold leading-[120%]">Plans</a>
              </li>
              <li>
                <a className="font-semibold leading-[120%]">Reviews</a>
              </li>
              <li>
                <a className="font-semibold leading-[120%]">Help</a>
              </li>
            </ul>
          </div>
          {/* Logo text */}
          <a className="btn btn-ghost text-2xl hidden min-[460px]:flex">
            <span className="bg-primary-gradient bg-clip-text text-transparent font-black">
              AI Tools
            </span>
          </a>
        </div>
        {/* nav link for bar */}
        <div className="navbar-center hidden min-[830px]:flex">
          <ul className="menu menu-horizontal px-1 *:text-base">
            <li>
              <a className="font-semibold leading-[120%]">Solutions</a>
            </li>
            <li>
              <a className="font-semibold leading-[120%]">Capabilities</a>
            </li>
            <li>
              <a className="font-semibold leading-[120%]">Plans</a>
            </li>
            <li>
              <a className="font-semibold leading-[120%]">Reviews</a>
            </li>
            <li>
              <a className="font-semibold leading-[120%]">Help</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4 ml-8">
          <div className="indicator">
            {selectProduct.length !== 0 && (
              <span className="indicator-item badge badge-secondary font-bold size-6 text-xs rounded-full">
                {selectProduct.length}
              </span>
            )}
            <button className="p-1">
              <FiShoppingCart size="1.4em" />
            </button>
          </div>
          <a className="flex items-center gap-4">Login</a>
          <GradientButton text="Start Now" />
        </div>
      </div>
    </div>
  );
}
