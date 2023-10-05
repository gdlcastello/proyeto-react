import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './ItemList.module.css';

const ItemList = ({ items, isLoading }) => {
    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <h1>Productos</h1>
            <div className={`${styles.cardContainer} ${styles.flexContainer}`}>
                {items.map((item) => (
                    <div key={item.Id} className={styles.card}>
                        <Link to={`/item/${item.Id}`} className={styles.link}>
                            <img src={`/${item.imageId}`} alt={item.title} className={styles.image} />
                            <h3 className={styles.title}>{item.title}</h3>
                            <p className={styles.price}>${item.price}</p>
                            <p className={styles.category}>{item.categoryId}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

ItemList.propTypes = {
    items: PropTypes.array.isRequired,
    isLoading: PropTypes.bool,
};

export default ItemList;
