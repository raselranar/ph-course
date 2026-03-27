import { useState } from "react";
import Banner from "./components/homepage/Banner";
import Navbar from "./components/homepage/NavBar";
import PlayerSection from "./components/PlayerSection";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Drawer from "./components/Drawer";

function App() {
  const [coins, setCoins] = useState(5000);

  const handleBuyPlayer = (price) => {
    let success = false;
    setCoins((prevBalance) => {
      if (prevBalance >= price) {
        success = true;
        return prevBalance - price;
      }
      return prevBalance;
    });
    return success;
  };
  return (
    <>
      <header className="container mx-auto px-4">
        <Navbar coins={coins}></Navbar>
        <Banner></Banner>
      </header>
      <main className="container mx-auto px-4">
        <PlayerSection setCoins={setCoins} handleBuyPlayer={handleBuyPlayer} />
      </main>
      <Footer />
      <Drawer />
      <ToastContainer />
    </>
  );
}

export default App;
