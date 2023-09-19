import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import './Checkout.css';

const Checkout = () => {
  const { cart, addItem, removeItem } = useContext(CartContext);

  const handleIncrease = (item) => {
    addItem(item, 1);
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      addItem(item, -1);
    }
  };

  const handleRemove = (item) => {
    removeItem(item.Id);
  };

  
  return (
    <div className="checkout-container">
      <h2>Carrito de Compras</h2>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item) => (
            <li key={item.Id} className="product-item">
              <div className="product-info">
                <span>{item.title}</span>
                <span className="price">${item.price}</span>
                <span>Cantidad: {item.quantity}</span>
              </div>
              <div className="product-buttons">
                <button onClick={() => handleIncrease(item)}>+</button>
                <button onClick={() => handleDecrease(item)}>-</button>
                <button onClick={() => handleRemove(item)}>Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay productos en el carrito.</p>
      )}
    </div>
  );
};



export default Checkout;
