import { Suspense } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import PricingOption from "./components/PricingOption";
import Chart from "./components/Chart";
import axios from "axios";

const fetchPricing = fetch("/pricing_data.json").then((res) => res.json());
const watchHistory = axios.get("/watch_history.json");

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Suspense
          fallback={<span className="loading loading-ring loading-xl"></span>}
        >
          <PricingOption fetchPricing={fetchPricing}></PricingOption>
        </Suspense>
        {/* chart */}
        <Suspense>
          <Chart watchHistory={watchHistory}></Chart>
        </Suspense>
      </main>
    </>
  );
}

export default App;
