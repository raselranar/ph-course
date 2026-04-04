import { useState } from "react";
import "./App.css";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

function App() {
  const [products, setProducts] = useState([]);
  return (
    <>
      <section id="center">
        <h2>Add a Product</h2>
        <ProductForm setProducts={setProducts} />
        <ProductTable products={products} />
      </section>
    </>
  );
}

export default App;
