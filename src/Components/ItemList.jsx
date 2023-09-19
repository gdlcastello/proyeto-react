import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import './ItemListCard.css';


const ItemList = ({ items, isLoading }) => {
    if (isLoading) {
        return <h2>Loading...</h2>
    }
    return (
        <div>
            <h1>Productos</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}> 
                {items.map((item) => (
                    <div key={item.Id} style={cardStyle}>
                        <Link to={`/item/${item.Id}`} style={linkStyle}>
                            <img src={`/${item.imageId}`} alt={item.title} style={imageStyle} />
                            <h3 style={titleStyle}>{item.title}</h3>
                            <p style={priceStyle}>${item.price}</p>
                            <p style={categoryStyle}>{item.categoryId}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

const cardStyle = {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    margin: '10px',
    width: '250px',
};

const linkStyle = {
    textDecoration: 'none',
    color: 'black',
};

const imageStyle = {
    width: '100%',
    borderRadius: '10px',
};

const titleStyle = {
    margin: '10px 0',
};

const priceStyle = {
    fontWeight: 'bold',
};

const categoryStyle = {
    color: '#888',
};

ItemList.propTypes = {
    items: PropTypes.array.isRequired,
    isLoading: PropTypes.bool,
};

export default ItemList;