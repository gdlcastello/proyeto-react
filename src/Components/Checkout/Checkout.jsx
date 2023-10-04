import React, { useState, useContext } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import CartContext from "../../context/CartContext";
import './Checkout.css';

const Checkout = () => {
  const { cart, addItem, removeItem } = useContext(CartContext);

  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

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

  const createOrder = () => {
    const order = {
      buyer: userData,
      items: cart.map(item => ({
        Id: item.Id,
        title: item.title,
        price: item.price
      })),
      total: cart.reduce((total, item) => total + item.price * item.quantity, 0)
    };

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order)
      .then((docRef) => {
        console.log("Orden creada con ID:", docRef.id);
      })
      .catch((error) => {
        console.log("Error al crear la orden:", error);
      });
  };

  return (
    <div className="checkout-container">
      <h2>Carrito de Compras</h2>
      <form>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={userData.name}
          onChange={handleInputChange}
        />
        <label htmlFor="phone">Teléfono:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={userData.phone}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
        />
      </form>

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

      <button onClick={createOrder}>Crear Orden</button>
    </div>
  );
};

export default Checkout;
