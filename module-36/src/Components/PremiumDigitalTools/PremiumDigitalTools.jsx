import { Suspense, useState } from "react";
import ProductsSection from "./ProductsSection/ProductsSection";
import Loading from "../UI/Loading";
import CartSection from "./ProductsSection/CartSection/CartSection";

export default function PremiumDigitalTools({ selectProduct }) {
  const [activeTab, setActiveTab] = useState("products");
  return (
    <section className="container mx-auto mt-4 sm:mt-8 md:mt-18 px-4">
      <div className="">
        <h2 className="font-extrabold text-3xl  sm:text-4xl md:text-5xl leading-17 text-center">
          Explore Our Elite Collection
        </h2>
        <p className="text-gray-500 text-center text-xl font-semibold max-w-md mx-auto">
          Handpicked resources for modern creators
        </p>
      </div>
      {/* tab buttons */}
      <div
        className="mt-5 border border-gray-200/80 bg-base-200 w-fit mx-auto
        py-1 px-1 rounded-full grid grid-cols-2">
        <button
          onClick={() => setActiveTab("products")}
          className={`btn py-5  text-[16px] rounded-full border-none  ${activeTab === "products" && "text-white bg-primary-gradient"}`}>
          Products
        </button>
        <button
          onClick={() => setActiveTab("cart")}
          className={`btn py-5  text-[16px] rounded-full border-none ${activeTab === "cart" && "text-white bg-primary-gradient"}`}>
          Cart ({selectProduct.length})
        </button>
      </div>
      {/* cards */}
      <section className="mt-10">
        {activeTab === "cart" ? (
          <CartSection />
        ) : (
          <Suspense fallback={<Loading />}>
            <ProductsSection />
          </Suspense>
        )}
      </section>
    </section>
  );
}
