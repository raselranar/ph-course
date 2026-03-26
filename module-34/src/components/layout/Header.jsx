import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import NavBar from "./NavBar";
import { IoCloseSharp } from "react-icons/io5";
const navMenu = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "#contact" },
];

export default function Header() {
  const [menus, setMenus] = useState(false);

  return (
    <header className="flex justify-between p-4 items-center">
      <div className="flex gap-4 items-center">
        <span
          onClick={() => setMenus(!menus)}
          className="cursor-pointer sm:hidden"
        >
          {menus ? <IoCloseSharp></IoCloseSharp> : <CiMenuBurger />}
        </span>

        <img className="w-6" src="./src/assets/react.svg" alt="logo" />
      </div>
      <NavBar menus={menus} navMenu={navMenu}></NavBar>
      <button className="btn">Sign In</button>
    </header>
  );
}
