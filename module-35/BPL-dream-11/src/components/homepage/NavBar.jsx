import logo from "../../assets/logo.png";
import DoubleDollar from "../../assets/DoubleDollar.png";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar({ coins }) {
  return (
    <div className="navbar bg-base-100 mb-2">
      <div className="sm:hidden">
        <label htmlFor="my-drawer-1" className="cursor-pointer">
          <GiHamburgerMenu />
        </label>
      </div>
      <div className="hidden sm:block">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex-none grow flex items-center justify-end">
        <ul className="menu menu-horizontal px-1 items-center hidden sm:flex">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Fixture</a>
          </li>
          <li>
            <a>Teams</a>
          </li>
          <li>
            <a>Schedules</a>
          </li>
        </ul>
        <button className="btn">
          {coins} Coins <img src={DoubleDollar} alt="dollar icon" />
        </button>
      </div>
    </div>
  );
}
