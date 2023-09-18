import { useContext, useState } from "react";
import PropTypes from "prop-types";
import CartContext from "../context/CartContext";


const ItemDetail = ({ item, isLoading }) => {
    const [itemCount, setItemCount] = useState(1);
    const { addItem } = useContext(CartContext);

    if (isLoading) {
        return <h2>Loading...</h2>;
    }
    if (!item) {
        return <h2>Producto no encontrado</h2>;
    }
    return <div>
        <h1>{item.title}</h1>
        <p>${item.price}</p>
        <p>{item.categoryId}</p>


        <input type="number" value={itemCount} onChange={(e) => setItemCount(parseInt(e.target.value))} />

        <button onClick={() => addItem(item, itemCount)}>Agregar al carrito</button>
    </div>;
};

ItemDetail.propTypes = {
    item: PropTypes.object,
    isLoading: PropTypes.bool,
    addItem: PropTypes.func,
};

export default ItemDetail;