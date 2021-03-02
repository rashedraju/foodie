import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import { ReactComponent as CartIcon } from '../../assets/svg/cart-outline.svg';
import { ReactComponent as DeliveryIcon } from '../../assets/svg/bicycle-outline.svg';
import Button from '../../components/UI/Button/Button';
import CartItem from './CartItem/CartItem';

const Cart = (props) => {
    const { cart, onAuthRedirectPath, history } = props;
    useEffect(() => {
        onAuthRedirectPath(history.location.pathname)
    }, [onAuthRedirectPath, history])
    return (
        <div className="card">
            <div className="card-header d-flex justify-content-between">
                <div>
                    <CartIcon /> <span className="text-primary">{cart.foods.length} {cart.foods.length > 1 ? 'ITEMS' : 'ITEM'}</span>
                </div>
                <Button cls="btn border border-secondary text-secondary p-1"
                    title="Close" clicked={() => history.goBack()} />
            </div>
            <div className="bg-primary text-white px-3 py-2">Shop $30 more and get 20% cashback</div>
            <div className="card-body">
                <div className="bg-light px-3 py-2"> <DeliveryIcon width="32" height="32" /> <span>Regular Delivery</span></div>
                <CartItem
                    items={cart.foods} />

                <div className="card-footer d-flex justify-content-between">
                    <Button cls="btn btn-success mr-4 text-white p-1"
                        title="Add More" clicked={() => history.goBack()} />
                    <Button cls="btn btn-primary mr-4 text-white p-1"
                        title="Checkout" />
                </div>
            </div>

        </div>
    );
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = dispatch => ({
    onAuthRedirectPath: path => dispatch(actions.autRedirectPath(path))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);