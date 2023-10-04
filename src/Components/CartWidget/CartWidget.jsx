import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./CartWidget.css"; 

const CartWidget = () => {
    const { cartCount } = useContext(CartContext);

    return (
        <div className="cart-widget-container">
            <Link to="/checkout">
                <button className="btn btn-outline-primary btn-cart position-relative">
                    <i className="bi bi-cart3"></i>
                    <div className="badge-container">
                        {cartCount > 0 &&
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                <span className="visually-hidden">Productos cargados</span>
                                <span className="badge">{cartCount}</span>
                            </span>
                        }
                    </div>
                </button>
            </Link>
        </div>
    );
};

export default CartWidget;
