import React from "react";

export default function NavBar({ menus, navMenu }) {
  console.log(menus);
  return (
    <nav
      className={`${menus ? "block bg-accent absolute  duration-100 top-15" : " hidden sm:block"}`}
    >
      <ul className={`flex gap-4 ${menus ? "flex-col" : ""}`}>
        {navMenu.map(({ name, path }, i) => (
          <li key={i}>
            <a className="btn btn-primary" href={path}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
