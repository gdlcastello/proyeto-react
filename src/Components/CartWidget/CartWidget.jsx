import { useContext } from "react";
import CartContext from "../../context/CartContext";

const CartWidget = () => {
    const { cartCount } = useContext(CartContext);
    return <div>
        <button className="btn btn-outline-primary position-relative">
            <i className="bi bi-cart3"></i>
            {cartCount > 0 &&
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    <span className="visually-hidden">Productos cargados</span>
                    <span>{cartCount}</span>
                </span>
            }
        </button>
    </div>
};

export default CartWidget;
