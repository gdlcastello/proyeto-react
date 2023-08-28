
import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import './ItemListCard.css';


const ItemList = ({ items, isLoading }) => {
    if (isLoading) {
        return <h2>Loading...</h2>
    }
    return <div>
        <h1>Productos</h1>

        <div className="card-container"> {/* Utiliza un contenedor para las tarjetas */}
            {items.map((item) => (
                <div key={item.id} className="card">
                    <Link to={`/item/${item.id}`} >
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                        <p>{item.category}</p>
                    </Link>
                </div>
            ))}
        </div>
    </div>
};


ItemList.propTypes = {
    items: PropTypes.array.isRequired,
    isLoading: PropTypes.bool,
  };

export default ItemList;
