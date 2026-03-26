import React, { use } from "react";
import PricingCard from "./PricingCard";

export default function PricingOption({ fetchPricing }) {
  const { pricing_tiers } = use(fetchPricing);
  console.log(pricing_tiers);
  return (
    <>
      <h2 className="text-center text-4xl mb-3">Get Out Membership</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 container mx-auto gap-4">
        {pricing_tiers.map((plan) => (
          <PricingCard key={plan.plan_id} plan={plan}></PricingCard>
        ))}
      </div>
    </>
  );
}
