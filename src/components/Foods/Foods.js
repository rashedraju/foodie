import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import Skeleton from 'react-loading-skeleton';
import styles from './Foods.module.scss';

const Foods = (props) => {
    const { foods, toggleToCart } = props;
    const foodElelments = foods.map((item, index) => (
        <div className="col-lg-3 col-md-4 col-sm-6" key={item.id || `skeleton${index}`}>
            <figure className={styles.figure}>
                <picture className={styles.imageWrapper}>
                    {item.image ? (
                        <>
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
                        </>
                    ) : (
                        <Skeleton className={styles.image} />
                    )}
                </picture>
                <figcaption>
                    {item.title ? (
                        <div className={styles.headline}>{item.title} </div>
                    ) : (
                        <Skeleton width={100} />
                    )}
                </figcaption>
                <div className="d-flex justify-content-between align-items-center px-2">
                    {item.price ? (
                        <>
                            <strong className="text-primary">${item.price}</strong>

                            <FiShoppingCart
                                icon={['fas', 'cart-plus']}
                                className={styles.cartIcon}
                                style={{
                                    color: item.isAddedToCart ? '#d60e64' : '#495057',
                                    fontSize: '1.2rem',
                                }}
                                onClick={() => toggleToCart(!item.isAddedToCart, item)}
                            />
                        </>
                    ) : (
                        <>
                            <Skeleton width={30} />
                            <Skeleton width={30} />
                        </>
                    )}
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
