import { use } from "react";
import { ProductsContext } from "../../../../App";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { toast } from "react-toastify";

export default function CartSection() {
  const [selectProduct, setSelectProduct] = use(ProductsContext);
  const totalPrice = selectProduct.reduce(
    (total, product) => total + product.price,
    0,
  );

  const handleProceedCheckout = () => {
    setSelectProduct([]);
    toast.info("Almost there! Finalizing your cart", { theme: "colored" });
  };
  return (
    <div className="space-y-6">
      <h2 className="font-bold text-2xl/[33px]">Your Cart</h2>
      {/* Cart List */}
      {selectProduct.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="">
          <ul className="list bg-base-100 rounded-box shadow-md mt-6 gap-4">
            {selectProduct.map((product) => (
              <CartItem
                setSelectProduct={setSelectProduct}
                key={product.id}
                product={product}
              />
            ))}
          </ul>
          <div className="flex items-center justify-between my-4">
            <p className="text-gray-400">Total:</p>
            <p className="font-bold text-2xl">${totalPrice.toFixed(0)}</p>
          </div>
          <button
            onClick={handleProceedCheckout}
            className="btn bg-primary-gradient btn-block text-white rounded-full py-3 font-bold">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
