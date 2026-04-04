import { FaCheck } from "react-icons/fa";
import FeatureList from "../../UI/FeatureList";
import { toast } from "react-toastify";
import { use } from "react";
import { ProductsContext } from "../../../App";

export default function PricingCard({
  data: { name, description, price, tag, period, icon, tagType, features },
}) {
  const [selectProduct, setSelectProduct] = use(ProductsContext);

  const badgeStyles = {
    "best-seller": "text-yellow-700 bg-yellow-100",
    popular: "text-[#4F39F6] bg-[#E1E7FF]",
    new: "text-[#0A883E] bg-[#DBFCE7]",
  };
  //  do something when buy button clicked
  const handleAddToCart = () => {
    if (!isSelected) {
      setSelectProduct((prevData) => [...prevData, data]);
      toast.success(`Nice! ${name} is now in your cart`, {
        theme: "colored",
      });
    }
  };

  // checking is this product selected and return boolean
  const isSelected = selectProduct.some(({ id }) => data.id === id);

  return (
    <div className="card hover:bg-base-200 transition-all duration-200  hover:-translate-y-1 max-w-95 bg-base-100 shadow-sm border border-gray-300">
      <div className="card-body">
        <div
          className={`rounded-full self-end font-medium px-3 py-0.5 ${badgeStyles[tagType]}`}>
          {tag}
        </div>
        <img src={icon} alt={name} className="size-10 mb-3" />

        <div className="flex flex-col space-y-4 flex-1">
          <h2 className="text-2xl/[33px] font-bold">{name}</h2>
          <p className="text-gray-500 mt">{description}</p>
          <p className="text-xl">
            ${price}/{period}
          </p>
          {features.length > 0 && <FeatureList features={features} />}
        </div>
        <div className="mt-6">
          <button
            onClick={handleAddToCart}
            className={`btn text-white font-extrabold btn-block border-0 rounded-full ${isSelected ? "bg-[#00a640]" : "bg-primary-gradient"}`}>
            {isSelected ? (
              <span className="flex items-center gap-2">
                <FaCheck /> Added to cart
              </span>
            ) : (
              "Buy Now"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
