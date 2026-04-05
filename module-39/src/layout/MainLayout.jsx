import { Outlet } from "react-router";
import NavBar from "../component/UI/NavBar";

export default function MainLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
