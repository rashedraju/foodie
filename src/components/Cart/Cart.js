import React from 'react';
import { Button } from 'react-bootstrap';
import { ReactComponent as DeliveryIcon } from '../../assets/svg/bicycle-outline.svg';
import { ReactComponent as CartIcon } from '../../assets/svg/cart-outline.svg';
import styles from './Cart.module.scss';
import CartItem from './CartItem/CartItem';

const Cart = (props) => {
    const { cartItems, cartShow, toggleCartUI, toggleToCart, updateCount, price } = props;

    // Add style conditionaly
    const cartStyle = [styles.cart];
    if (cartShow) cartStyle.push(styles.show);

    const itemElements = cartItems.length ? (
        cartItems.map((item) => (
            <CartItem
                key={item.id}
                item={item}
                toggleToCart={() => toggleToCart(false, item)}
                updateCount={updateCount}
            />
        ))
    ) : (
        <p className="text-center my-2"> Start adding items to your cart </p>
    );

    const amountSummary = [
        [1, 'Subtotal', price.subTotal],
        [2, 'Delivery fee', price.deliveryFee],
        [3, 'VAT', price.vat],
        [4, 'Total(incl. VAT)', price.total],
    ].map((el, idx, arr) => (
        <dl className="d-flex justify-content-between mb-0" key={el[0]}>
            <dt className={`mb-0 font-weight-${idx !== arr.length - 1 ? 'light' : 'bold'}`}>
                {' '}
                {el[1]}{' '}
            </dt>
            <dd className={idx === arr.length - 1 ? 'font-weight-bold' : ''}>
                {' '}
                {el[2].toFixed(2)}{' '}
            </dd>
        </dl>
    ));

    return (
        <div className={cartStyle.join(' ')}>
            <div className="card-header d-flex justify-content-between bg-white">
                <div>
                    <CartIcon />{' '}
                    <span className="text-primary">
                        {cartItems.length} {cartItems.length > 1 ? 'ITEMS' : 'ITEM'}
                    </span>
                </div>
                <Button
                    className="p-1 btn btn-light bg-white px-3 shadow-none border border-secondary"
                    onClick={toggleCartUI}
                >
                    Close
                </Button>
            </div>
            <div className="bg-primary text-white p-2 my-2">Shop $30 more and get 20% cashback</div>
            <div className={styles.cartSummary}>
                <div className="bg-white px-3 py-2">
                    <DeliveryIcon width="32" height="32" /> <span>Regular Delivery</span>
                </div>
                {/* render all cart items */}
                <div className={styles.orderItems}>{itemElements}</div>

                {cartItems.length > 0 && (
                    <div className={styles.orderAmount}>
                        {amountSummary}
                        <button
                            type="button"
                            className="btn btn-primary text-uppercase p-2 y-2 w-100 d-block"
                        >
                            go to checkout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
