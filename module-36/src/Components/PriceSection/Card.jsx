import FeatureList from "../UI/FeatureList";

export default function Card({
  pricingPlan: {
    name,
    description,
    price,
    billingCycle,
    buttonText,
    isPopular,
    features,
  },
}) {
  const textColor = isPopular ? "text-white" : "text-gray-500";

  return (
    <div
      className={`card max-w-sm w-full hover:bg-base-200 transition-all duration-200  hover:-translate-y-1  mx-auto bg-base-100 shadow-sm border border-gray-300 ${isPopular ? "bg-primary-gradient text-white" : ""}`}>
      <div className="card-body relative">
        <div className="absolute -top-3 mx-auto left-0 flex justify-center w-full">
          <div className="badge rounded-full bg-yellow-100 text-yellow-700 ">
            Most Popular
          </div>
        </div>
        <div className="flex flex-col space-y-4 flex-1">
          {/* heading part */}
          <div className="">
            <h2 className="text-2xl/relaxed font-bold">{name}</h2>
            <p className={textColor}>{description}</p>
          </div>
          <p className="text-xl">
            ${price}/{billingCycle}
          </p>
          <div className={textColor}>
            {features.length > 0 && <FeatureList features={features} />}
          </div>
        </div>
        <div className="mt-6">
          <button
            className={`btn  font-extrabold btn-block border-0 rounded-full ${isPopular ? "bg-white text-[#9514FA]" : "text-white bg-primary-gradient"}`}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
