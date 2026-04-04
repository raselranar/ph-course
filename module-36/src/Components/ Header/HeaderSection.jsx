import Banner from "./Banner";
import NavBar from "./NavBar";

export default function HeaderSection({ selectProduct }) {
  return (
    <header>
      <NavBar selectProduct={selectProduct} />
      <Banner />
    </header>
  );
}
