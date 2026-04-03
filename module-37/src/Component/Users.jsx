import { use } from "react";
import { Link } from "react-router";

export default function Users({ fetchUsers }) {
  const users = use(fetchUsers);
  const classes = "p-4 border border-gray-400 mb-4 flex justify-between";
  return (
    <div>
      {users.map((item, i) => (
        <div className={classes} key={i}>
          {item.name}{" "}
          <Link to={`/users/${item.id}`} className="text-2xl">
            {">"}
          </Link>
        </div>
      ))}
    </div>
  );
}
