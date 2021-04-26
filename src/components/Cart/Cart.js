import { ReactComponent as DeliveryIcon } from 'assets/svg/bicycle-outline.svg';
import { ReactComponent as CartIcon } from 'assets/svg/cart-outline.svg';
import Modal from 'components/UI/Modal/Modal';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import AmountSummary from 'views/AmountSummary/AmountSummary';
import LoginBeforeCheckout from 'views/LoginBeforeCheckout/LoginBeforeCheckout';
import styles from './Cart.module.scss';
import CartItem from './CartItem/CartItem';

const Cart = (props) => {
    const {
        cartItems,
        cartShow,
        toggleCartUI,
        toggleToCart,
        updateCount,
        price,
        showLoginModal,
        isAuthenticated,
    } = props;
    const history = useHistory();
    const [showModal, setShowModal] = useState(false);
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
                        <AmountSummary price={price} />
                        <button
                            type="button"
                            className="btn btn-primary text-uppercase p-2 y-2 w-100 d-block"
                            onClick={() =>
                                isAuthenticated ? history.replace('./checkout') : setShowModal(true)
                            }
                        >
                            go to checkout
                        </button>
                    </div>
                )}
            </div>
            <Modal
                show={showModal}
                setShow={() => setShowModal(true)}
                setClose={() => setShowModal(false)}
            >
                <LoginBeforeCheckout
                    loginModalShow={() => {
                        setShowModal(false);
                        showLoginModal();
                    }}
                    modalClose={() => setShowModal(false)}
                />
            </Modal>
        </div>
    );
};

export default Cart;
