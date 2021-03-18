import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './Foods.module.scss';

const Foods = (props) => {
    const { foods, toggleToCart } = props;
    const foodElelments = foods.map((item) => (
        <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
            <figure className={styles.figure}>
                <picture className={styles.imageWrapper}>
                    <div
                        className={styles.image}
                        style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <div className={styles.addCart}>
                        <button
                            type="button"
                            className={styles.addCartTitle}
                            onClick={() => toggleToCart(!item.isAddedToCart, item)}
                        >
                            {' '}
                            {item.isAddedToCart ? 'remove from cart' : 'add to cart'}{' '}
                        </button>
                    </div>
                </picture>
                <figcaption>
                    <div className={styles.headline}>{item.title} </div>
                </figcaption>
                <div className="d-flex justify-content-between align-items-center px-2">
                    <strong className="text-primary">${item.newPrice}</strong>

                    <FontAwesomeIcon
                        icon={['fas', 'cart-plus']}
                        className={styles.cartIcon}
                        style={{
                            color: item.isAddedToCart ? '#d60e64' : '#495057',
                            fontSize: '1.2rem',
                        }}
                        onClick={() => toggleToCart(!item.isAddedToCart, item)}
                    />
                </div>
            </figure>
        </div>
    ));
    return (
        <section className="container">
            <div className="row">{foodElelments}</div>
        </section>
    );
};

export default Foods;
