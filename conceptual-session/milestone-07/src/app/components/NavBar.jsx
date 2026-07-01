"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logoImage from "@/assets/image.png";

const NavBar = () => {
  const path = usePathname();
  const activeNavClass = "text-purple-500 border-b border-b-purple-500";
  console.log(path);
  const links = (
    <>
      <li className={path === "/" ? activeNavClass : ""}>
        <Link href="/">Home</Link>
      </li>
      <li className={path === "/apps" ? activeNavClass : ""}>
        <Link href="/apps">Apps</Link>
      </li>
      <li className={path === "/installation" ? activeNavClass : ""}>
        <Link href="/installation">Installation</Link>
      </li>
      <li className={path === "/dashboard" ? activeNavClass : ""}>
        <Link href="dashboard">DashBoard</Link>
      </li>
    </>
  );
  return (
    <div className=" shadow-sm">
      <div className="navbar bg-base-100 container mx-auto">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow *:font-extrabold *:text-base">
              {links}
            </ul>
          </div>
          <a className="">
            <Image src={logoImage} alt="logo" width={50} height="auto"></Image>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 *:font-extrabold *:text-base">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-purple-500 text-white">Contribute</a>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
