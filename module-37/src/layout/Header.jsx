import { NavLink } from "react-router";

export default function Header() {
  return (
    <div className="mb-4">
      <h2>Header</h2>
      <nav>
        <ul className="flex gap-4 justify-center">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>Mobile</li>
          <li>Laptop</li>
          <li>
            <NavLink to="users">User</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
