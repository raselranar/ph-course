import logo from "../../assets/logo.png";
import DoubleDollar from "../../assets/DoubleDollar.png";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 mb-2">
      <div className="flex-1">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 items-center">
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
          <li>
            <button className="btn">
              0 Coins <img src={DoubleDollar} alt="dollar icon" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
