import { FiShoppingCart } from "react-icons/fi";

export default function EmptyCart() {
  return (
    <div className="h-62 flex flex-col items-center justify-center">
      <FiShoppingCart color="gray" size="4rem" />
      <p className="text-gray-400 mt-4 text-3xl">Your Cart is Empty</p>
    </div>
  );
}
