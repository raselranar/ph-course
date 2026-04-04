import { use } from "react";
import PricingCard from "./PricingCard";

const fetchPricingData = fetch("/premium-tools-data.json").then((res) =>
  res.json(),
);

export default function ProductsSection({ onSelectProduct, selectProduct }) {
  const PricingData = use(fetchPricingData);
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch place-items-center gap-4 w-fit mx-auto">
      {PricingData.map((data) => (
        <PricingCard data={data} key={data.id} />
      ))}
    </div>
  );
}
