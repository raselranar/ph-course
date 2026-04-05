import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/homepage/HomePage";
import ErrorPage from "../pages/ErrorPage";
import Books from "../pages/Books/Books";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      { path: "books", Component: Books },
    ],
    errorElement: <ErrorPage />,
  },
]);
