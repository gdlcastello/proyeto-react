
import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const ItemList = ({ items, isLoading }) => {
    if (isLoading) {
        return <h2>Loading...</h2>
    }
    return <div>
        <h1>ItemList</h1>

        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    <Link to={`/item/${item.id}`} >
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                    <p>{item.category}</p>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
};


ItemList.propTypes = {
    items: PropTypes.array.isRequired,
    isLoading: PropTypes.bool,
  };

export default ItemList;
