function Product({ d }) {
  return (
    <div>
      <picture>
        <source srcSet={d.image.mobile} media="(max-width: 500px)" />
        <source srcSet={d.image.tablet} media="(max-width: 850px)" />
        <source srcSet={d.image.desktop} media="(min-width: 851px)" />

        <button className="card" onClick={() => console.log("Button clicked!")}>
          <img
            src="/images/icon-add-to-cart.svg"
            alt="add to cart"
            className="cart-image"
          />
          <p className="cart-text">Add to Cart</p>
        </button>
        <img src={d.image.desktop} alt={d.name} className="product-image" />
      </picture>
      <h3 className="categorys">{d.category}</h3>
      <h2 className="names">{d.name}</h2>
      <p className="prices">${d.price}</p>
    </div>
  );
}

export default Product;
