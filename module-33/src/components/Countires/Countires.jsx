import { use, useState } from "react";
import Country from "./Country";

const Countries = ({ fetchCountries }) => {
  const { countries } = use(fetchCountries);
  const [visitedCountries, setVisitedCountries] = useState([]);
  console.log(visitedCountries.length);
  const handleVisitedCountries = (country, status) => {
    if (status) {
      const filtered = visitedCountries.filter(
        (item) => country.common !== item.common,
      );
      setVisitedCountries(filtered);
      return;
    }
    setVisitedCountries([...visitedCountries, country]);
  };

  // console.log(countries);
  return (
    <div className="p-4 container mx-auto">
      <h1 className="text-2xl">Total counties: {countries.length} </h1>
      <h2>Total Visited Countries: {visitedCountries.length}</h2>
      {/* cards */}
      <div className="mt-4 grid gap-4 sm:grid-cols-4">
        {countries.map((country, index) => (
          <Country
            visitedCount={setVisitedCountries}
            key={index}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
