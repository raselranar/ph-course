import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Root from "./layout/Root";
import Home from "./Component/Home";
import Users from "./Component/Users";
import { Suspense } from "react";
import UserDetails from "./Component/UserDetails";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json(),
);

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "users",
        element: (
          <Suspense fallback={<p>loading......</p>}>
            <Users fetchUsers={fetchUsers} />
          </Suspense>
        ),
      },
      {
        path: "users/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
