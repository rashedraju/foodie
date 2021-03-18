import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './CartItem.module.scss';

const CartItem = (props) => {
    const { item, toggleToCart } = props;
    return (
        <div className={styles.item}>
            <div className={styles.count}>
                <button type="button" title="more">
                    <FontAwesomeIcon icon={['fas', 'angle-up']} />
                </button>
                <span>1</span>
                <button type="button" title="less">
                    <FontAwesomeIcon icon={['fas', 'angle-down']} />
                </button>
            </div>
            <img src={item.image} alt={item.alt} className={styles.image} />
            <div className={`${styles.title}`}>{item.title}</div>
            <div className={styles.price}>${item.newPrice}</div>
            {/* Remove item from cart. onToggleToCart takes two arguments: 1. isAddedToCart
                yet 2. item itself */}
            <button type="button" className={styles.delete} title="remove" onClick={toggleToCart}>
                &times;
            </button>
        </div>
    );
};

export default CartItem;
