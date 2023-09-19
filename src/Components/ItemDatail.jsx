import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import CartContext from "../context/CartContext";
import './ItemDetail.css';

const ItemDetail = ({ item, isLoading }) => {
    const [itemCount, setItemCount] = useState(1);
    const { addItem } = useContext(CartContext);

    const handleAddToCart = () => {
        addItem(item, itemCount);
    };

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    if (!item) {
        return <h2>Producto no encontrado</h2>;
    }


    return (
        <div className="item-detail-container">
            <h1 className="item-title">{item.title}</h1>
            <p className="item-price">${item.price}</p>
            <p className="item-category">{item.categoryId}</p>

            <div className="item-actions">
                <input
                    type="number"
                    value={itemCount}
                    onChange={(e) => setItemCount(parseInt(e.target.value))}
                    className="item-quantity-input"
                />
                <button onClick={handleAddToCart} className="add-to-cart-button">
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

ItemDetail.propTypes = {
    item: PropTypes.object,
    isLoading: PropTypes.bool,
    addItem: PropTypes.func,
};

export default ItemDetail;
