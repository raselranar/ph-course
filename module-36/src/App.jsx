import { createContext, useContext, useState } from "react";
import HeaderSection from "./Components/ Header/HeaderSection";
import PremiumDigitalTools from "./Components/PremiumDigitalTools/PremiumDigitalTools";
import StatsSection from "./Components/StatsSection";
import { ToastContainer } from "react-toastify";
import StepSection from "./Components/StepSection";
import PriceSection from "./Components/PriceSection/PriceSection";
import ReadySection from "./Components/ReadySection";
import Footer from "./Components/Footer.jsx";

export const ProductsContext = createContext([]);
function App() {
  const [selectProduct, setSelectProduct] = useState([]);

  return (
    <>
      <HeaderSection selectProduct={selectProduct} />
      <StatsSection />
      <main>
        <ProductsContext value={[selectProduct, setSelectProduct]}>
          <PremiumDigitalTools
            selectProduct={selectProduct}
            setSelectProduct={setSelectProduct}
          />
        </ProductsContext>
        <StepSection />
        <PriceSection />
        <ReadySection />
      </main>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
