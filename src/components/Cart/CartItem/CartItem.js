import React from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import styles from './CartItem.module.scss';

const CartItem = (props) => {
    const { item, toggleToCart, updateCount } = props;
    return (
        <div className={styles.item}>
            <div className={styles.count}>
                <button type="button" title="more" onClick={() => updateCount(item.id, 'inc')}>
                    <FiChevronUp />
                </button>
                <span> {item.count} </span>
                <button
                    type="button"
                    title="less"
                    onClick={() => updateCount(item.id, 'dec')}
                    disabled={item.count === 1}
                >
                    <FiChevronDown />
                </button>
            </div>
            <img src={item.image} alt={item.alt} className={styles.image} />
            <div className={`${styles.title}`}>{item.title}</div>
            <div className={styles.price}>${item.price}</div>
            {/* Remove item from cart. onToggleToCart takes two arguments: 1. isAddedToCart
                yet 2. item itself */}
            <button type="button" className={styles.delete} title="remove" onClick={toggleToCart}>
                &times;
            </button>
        </div>
    );
};

export default CartItem;
