import Product from "./Product";
import Modal from "./Modal";

function ProductList({ desserts, isPending }) {
  return (
    <div className="desserts">
      <h1 className="desserts-title">Desserts</h1>
      {isPending && <h2>Loading...</h2>}
      <div className="product-list">
        {desserts &&
          desserts.map((d) => {
            return <Product key={d.id} d={d} />;
          })}
      </div>
    </div>
  );
}

export default ProductList;
