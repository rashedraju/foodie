import CartItem from 'components/Cart/CartItem/CartItem';
import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import CheckoutStepButtons from '../../components/UI/CheckoutStepButtons/CheckoutStepButtons';
import AmountSummary from '../AmountSummary/AmountSummary';

const OrderSummary = ({ cartItems, price, toggleToCart, updateCount, buttonBack, buttonNext }) => (
    <div className="p-2 w-md-75 checkout__step">
        {cartItems.length > 0 ? (
            <>
                <h4 className="text-center"> Order Summary </h4>
                <p className="text-center">Review items in your basket.</p>
                {cartItems.map((item) => (
                    <CartItem
                        key={item.id}
                        item={item}
                        toggleToCart={() => toggleToCart(false, item)}
                        updateCount={updateCount}
                    />
                ))}
                <AmountSummary price={price} />
                <CheckoutStepButtons
                    backTitle="continue shopping"
                    nextTitle="continue to shipping"
                    buttonBack={buttonBack}
                    buttonNext={buttonNext}
                />{' '}
            </>
        ) : (
            <Card>
                <Card.Body>
                    <h4 className="text-center"> Your cart is empty! </h4>
                    <p className="text-center"> Start adding items to your cart </p>
                    <NavLink
                        to="./"
                        className="btn btn-primary d-block mx-auto shadow-none text-uppercase"
                        style={{ maxWidth: '20rem' }}
                    >
                        Continue shopping
                    </NavLink>
                </Card.Body>
            </Card>
        )}
    </div>
);

export default OrderSummary;
