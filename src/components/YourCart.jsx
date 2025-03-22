import React, { useState } from "react";
import Modal from "./Modal";

function YourCart() {
  const [isModalOpen, setModalIsOpen] = useState(false);

  return (
    <div className="your-name">
      <h1 className="your-text">Your Cart (7)</h1>
      <div className="your-title">
        <div>
          <h3 className="your-texts">Classic Tiramisu</h3>
          <p className="your-p">
            <span style={{ color: "red" }}>1x </span> @ $5.50 $5.50
          </p>
        </div>
        <div className="image-remove">
          <img src="/images/icon-remove-item.svg" alt="remove-icon" />
        </div>
      </div>
      <div className="your-title">
        <div>
          <h3 className="your-texts">Vanilla Bean Crème Brûlée</h3>
          <p className="your-p">
            <span style={{ color: "red" }}>4x </span>@ $7.00 $28.00
          </p>
        </div>
        <div className="image-remove">
          <img src="/images/icon-remove-item.svg" alt="remove-icon" />
        </div>
      </div>
      <div className="your-title">
        <div>
          <h3 className="your-texts">Vanilla Panna Cotta</h3>
          <p className="your-p">
            <span style={{ color: "red" }}>4x </span>@ $6.50 $13.00
          </p>
        </div>
        <div className="image-remove">
          <img src="/images/icon-remove-item.svg" alt="remove-icon" />
        </div>
      </div>
      <div className="your-total">
        <h3 className="your-order">Order Total</h3>
        <p className="your-price">$46.50</p>
      </div>
      <div className="neutral">
        <img
          className="neutral-img"
          src="/images/icon-carbon-neutral.svg"
          alt=""
        />
        <p className="neutral-text">
          This is a <b>carbon-neutral</b> delivery
        </p>
      </div>
      <button className="confirm" onClick={() => setModalIsOpen(true)}>
        Confirm Order
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setModalIsOpen(false)} />
    </div>
  );
}

export default YourCart;
