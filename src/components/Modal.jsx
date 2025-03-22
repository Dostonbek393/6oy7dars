function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="modal">
      <div className="modal-open">
        <img
          src="/images/icon-order-confirmed.svg"
          alt="confirmed-icon"
          className="confirmed-image"
        />
        <h1 className="confirmed-text">Order Confirmed</h1>
        <p className="confirmed-p">We hope you enjoy your food!</p>

        <div className="modal-title">
          <div className="modal-bar">
            <div className="modal-d">
              <img
                src="/images/image-tiramisu-thumbnail.jpg"
                alt="tiramisu"
                className="modal-images"
              />
              <div>
                <h3 className="your-texts">Classic Tiramisu</h3>
                <p className="your-p">
                  <span style={{ color: "red" }}>1x </span> @ $5.50
                </p>
              </div>
            </div>
            <p className="modall-p">$5.50</p>
          </div>

          <div className="modal-bar">
            <div className="modal-d">
              <img
                src="/images/image-creme-brulee-thumbnail.jpg"
                alt="tiramisu"
                className="modal-images"
              />
              <div>
                <h3 className="your-texts">Vanilla Bean Crème Brûlée</h3>
                <p className="your-p">
                  <span style={{ color: "red" }}>4x </span> @ $7.00
                </p>
              </div>
            </div>
            <p className="modall-p">$28.00</p>
          </div>

          <div className="modal-bar">
            <div className="modal-d">
              <img
                src="/images/image-panna-cotta-thumbnail.jpg"
                alt="tiramisu"
                className="modal-images"
              />
              <div>
                <h3 className="your-texts">Vanilla Panna Cotta</h3>
                <p className="your-p">
                  <span style={{ color: "red" }}>2x </span> @ $6.50
                </p>
              </div>
            </div>
            <p className="modall-p">$13.00</p>
          </div>

          <div className="your-total">
            <h3 className="your-order">Order Total</h3>
            <p className="your-price">$46.50</p>
          </div>
        </div>

        <button onClick={onClose} className="confirm">
          Start New Order
        </button>
      </div>
    </div>
  );
}

export default Modal;
