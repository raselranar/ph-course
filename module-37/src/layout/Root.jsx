import { Outlet } from "react-router";
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";

export default function Root() {
  return (
    <>
      <Header />
      <main className="flex gap-4 px-4">
        <SideBar />
        {/* This is where Home or Users will render */}

        <section className="flex-1">
          <Outlet />
        </section>
      </main>
      <Footer />
    </>
  );
}
