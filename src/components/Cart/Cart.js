import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ReactComponent as DeliveryIcon } from '../../assets/svg/bicycle-outline.svg';
import { ReactComponent as CartIcon } from '../../assets/svg/cart-outline.svg';
import * as actions from '../../store/actions';
import styles from './Cart.module.scss';
import CartItem from './CartItem/CartItem';

const Cart = (props) => {
    const { cartItems, onAuthRedirectPath, history, cartShow, onToggleCart } = props;
    useEffect(() => {
        onAuthRedirectPath(history.location.pathname);
    }, [cartItems, onAuthRedirectPath, history]);

    const cartStyle = [styles.cart];
    if (cartShow) cartStyle.push(styles.show);

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
                    onClick={onToggleCart}
                >
                    Close
                </Button>
            </div>
            <div className="bg-primary text-white px-3 py-2">
                Shop $30 more and get 20% cashback
            </div>
            <div className="card-body">
                <div className="bg-light px-3 py-2">
                    <DeliveryIcon width="32" height="32" /> <span>Regular Delivery</span>
                </div>
                <CartItem items={cartItems} />

                <div className="card-footer d-flex justify-content-between">
                    <Button
                        className="btn btn-success mr-4 text-white p-1"
                        onClick={() => history.goBack()}
                    >
                        Add More
                    </Button>
                    <Button className="btn btn-primary mr-4 text-white p-1"> Checkout </Button>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    cartShow: state.cart.cartShow,
    cartItems: state.cart.cartItems,
});
const mapDispatchToProps = (dispatch) => ({
    onAuthRedirectPath: (path) => dispatch(actions.autRedirectPath(path)),
    onToggleCart: () => dispatch(actions.toggleCart()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));
