export default function ProductTable({ products }) {
  return (
    <div>
      <h2>Products: {products.length}</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.map(({ name, price, quantity }, i) => (
            <tr key={i}>
              <td>{name}</td>
              <td>{price}</td>
              <td>{quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
