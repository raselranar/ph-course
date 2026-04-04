import { useState } from "react";

export default function ProductForm({ setProducts }) {
  const [error, setError] = useState("");
  const handleAddProduct = (e) => {
    e.preventDefault();
    const ele = e.target;
    const name = ele.name.value;
    const price = ele.price.value;
    const quantity = ele.quantity.value;

    // validation
    if (name.length === 0) return setError("Please Enter Product name");
    if (price.length === 0) return setError("Please Enter Product price");
    if (quantity.length === 0) return setError("Please Enter Product quantity");

    const newProduct = { name, price, quantity };

    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };
  return (
    <form
      onSubmit={handleAddProduct}
      style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <input type="text" name="name" />
      <input type="number" name="price" />
      <input type="number" name="quantity" />
      <input
        style={{ alignSelf: "center" }}
        type="submit"
        value="Add To Table"
      />
      <p>
        <small style={{ color: "red" }}>{error}</small>
      </p>
    </form>
  );
}
