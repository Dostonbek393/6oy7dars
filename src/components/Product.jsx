import { useState } from "react";

function Product({ d }) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCartClick = () => {
    setIsAdded(true);
  };

  return (
    <div>
      <picture>
        <source srcSet={d.image.mobile} media="(max-width: 500px)" />
        <source srcSet={d.image.tablet} media="(max-width: 850px)" />
        <source srcSet={d.image.desktop} media="(min-width: 851px)" />

        <button
          className={`card ${isAdded ? "added" : ""}`}
          onClick={handleAddToCartClick}
        >
          {isAdded ? (
            <>
              <div className="card-button">
                <div className="card-imagess">
                  <img
                    src="/images/icon-decrement-quantity.svg"
                    alt="icon-decrement"
                    className="cart-images"
                  />
                </div>
                <p className="card-texts">1</p>
                <div className="card-imagesss">
                  <img
                    src="/images/icon-increment-quantity.svg"
                    alt="icon-increment"
                    className="cart-images"
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <img
                src="/images/icon-add-to-cart.svg"
                alt="add to cart"
                className="cart-image"
              />
              <p className="cart-text">Add to Cart</p>
            </>
          )}
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
