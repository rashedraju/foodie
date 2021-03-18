import React from 'react';
import { Button } from 'react-bootstrap';
import { ReactComponent as DeliveryIcon } from '../../assets/svg/bicycle-outline.svg';
import { ReactComponent as CartIcon } from '../../assets/svg/cart-outline.svg';
import styles from './Cart.module.scss';
import CartItem from './CartItem/CartItem';

const Cart = (props) => {
    const { cartItems, cartShow, toggleCartUI, toggleToCart } = props;

    // Add style conditionaly
    const cartStyle = [styles.cart];
    if (cartShow) cartStyle.push(styles.show);

    const itemElements = cartItems.length ? (
        cartItems.map((item) => (
            <CartItem item={item} toggleToCart={() => toggleToCart(false, item)} key={item.id} />
        ))
    ) : (
        <p className="text-center my-2"> Start adding items to your cart </p>
    );

    return (
        <div className={cartStyle.join(' ')}>
            <div className="card-header d-flex justify-content-between">
                <div>
                    <CartIcon />{' '}
                    <span className="text-primary">
                        {cartItems.length} {cartItems.length > 1 ? 'ITEMS' : 'ITEM'}
                    </span>
                </div>
                <Button
                    className="p-1 btn btn-light px-3 shadow-none border border-secondary radius-0"
                    onClick={toggleCartUI}
                >
                    Close
                </Button>
            </div>
            <div className="bg-primary text-white px-3 py-2">
                Shop $30 more and get 20% cashback
            </div>
            <div className="px-2">
                <div className="bg-light px-3 py-2">
                    <DeliveryIcon width="32" height="32" /> <span>Regular Delivery</span>
                </div>
                {/* render all cart items */}
                {itemElements}

                <div className="card-footer d-flex justify-content-between">
                    <Button className="btn btn-success mr-4 text-white p-1">Add More</Button>
                    <Button className="btn btn-primary mr-4 text-white p-1"> Checkout </Button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
