import React from "react";
import { MdOutlineDone } from "react-icons/md";

export default function PricingCard({ plan }) {
  return (
    <div className="bg-base-200 border p-4 border-gray-200/10 rounded-xl">
      <div className="">
        <h3 className="text-center text-xl sm:text-3xl">{plan.tier_name}</h3>
        <h4 className="mt-2">
          {plan.price_monthly
            ? `$${plan.price_monthly}/month`
            : "Custom Pricing"}
        </h4>
      </div>
      <div className="mt-3">
        {plan.features.map((item) => (
          <p className="flex items-center gap-1 mb-0.5">
            <MdOutlineDone></MdOutlineDone>
            {item}
          </p>
        ))}
      </div>
      <div className="mt-3">
        <button className="btn btn-primary w-full">Start</button>
      </div>
    </div>
  );
}
