import { RouterProvider } from "react-router";
import { router } from "./routes/Routes";
import "./App.css";

export default function App() {
  return <RouterProvider router={router} />;
}
