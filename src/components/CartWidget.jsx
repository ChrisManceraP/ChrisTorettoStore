import React, { useState } from "react";

const CartWidget = ({ itemsSale, setItemsSale }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleConfirmSale = () => {
    alert("Venta confirmada!");
  };

  const handleRemoveItem = (id) => {
    setItemsSale((prevItems) => {
      const updatedItems = prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);
      return updatedItems;
    });
  };

  const itemCount = itemsSale.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-widget">
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={toggleDropdown}
      >
        🛒 Cart ({itemCount})
      </button>

      {isDropdownOpen && (
        <div className="dropdown-menu show" style={{ right: 0, left: "auto" }}>
          <div className="d-flex justify-content-end p-2">
            <button className="btn btn-sm btn-light" onClick={toggleDropdown}>
              ❌
            </button>
          </div>
          {itemCount === 0 ? (
            <div className="text-center p-3">
              <img
                src="https://m.media-amazon.com/images/G/33/cart/empty/kettle-desaturated._CB424694233_.svg"
                alt="Empty Cart"
                style={{ width: "100px", marginBottom: "10px" }}
              />
              <p className="dropdown-item-text">Tu carrito está vacío</p>
            </div>
          ) : (
            <>
              {itemsSale.map((item) => (
                <div
                  key={item.id}
                  className="dropdown-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    <strong>{item.title}</strong> <span>x{item.quantity}</span>
                    <p>{item.description}</p>
                  </div>
                  <button
                    className="btn btn-sm btn-light"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="45"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#9575CD"
                        d="M34,12l-6-6h-8l-6,6h-3v28c0,2.2,1.8,4,4,4h18c2.2,0,4-1.8,4-4V12H34z"
                      ></path>
                      <path
                        fill="#7454B3"
                        d="M24.5 39h-1c-.8 0-1.5-.7-1.5-1.5v-19c0-.8.7-1.5 1.5-1.5h1c.8 0 1.5.7 1.5 1.5v19C26 38.3 25.3 39 24.5 39zM31.5 39L31.5 39c-.8 0-1.5-.7-1.5-1.5v-19c0-.8.7-1.5 1.5-1.5l0 0c.8 0 1.5.7 1.5 1.5v19C33 38.3 32.3 39 31.5 39zM16.5 39L16.5 39c-.8 0-1.5-.7-1.5-1.5v-19c0-.8.7-1.5 1.5-1.5l0 0c.8 0 1.5.7 1.5 1.5v19C18 38.3 17.3 39 16.5 39z"
                      ></path>
                      <path
                        fill="#B39DDB"
                        d="M11,8h26c1.1,0,2,0.9,2,2v2H9v-2C9,8.9,9.9,8,11,8z"
                      ></path>
                    </svg>
                  </button>
                </div>
              ))}
              <div className="dropdown-divider"></div>
              <button
                className="btn btn-primary dropdown-item"
                onClick={handleConfirmSale}
              >
                Confirmar Venta
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CartWidget;
