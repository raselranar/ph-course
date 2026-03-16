import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countires/Countires";

const fetchCountries = fetch(
  "https://openapi.programming-hero.com/api/all",
).then((res) => res.json());

function App() {
  return (
    <div className="h-screen">
      <Suspense fallback={<p className="text-center pt-5">Loading....</p>}>
        <Countries fetchCountries={fetchCountries}></Countries>
      </Suspense>
    </div>
  );
}

export default App;
