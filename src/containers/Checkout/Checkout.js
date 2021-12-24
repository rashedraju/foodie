import { submitOrder } from 'adapters/firebase';
import OrderConfirm from 'components/OrderConfirm/OrderConfirm';
import OrderSummary from 'components/OrderSummary/OrderSummary';
import Payment from 'components/Payment/Payment';
import ShippingDetails from 'components/ShippingDetails/ShippingDetails';
import Steps from 'components/Steps/Steps';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as actions from 'store/actions';
import { Container, Section } from 'styled/custom/components';

const Checkout = (props) => {
    const {
        onToggleCartUI,
        cartItems,
        price,
        onToggleToCart,
        onUpdateItemCount,
        history,
        authRedirectPath,
        user,
        onClearCart,
    } = props;

    const [stepNo, setStepNo] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [orderData, setOrderData] = useState({
        orderItems: [...cartItems],
        orderPrice: { ...price },
    });

    useEffect(() => {
        if (!user.isAuthenticated) history.replace(authRedirectPath);

        onToggleCartUI(false);
    }, [authRedirectPath, history, onToggleCartUI, user.isAuthenticated]);

    const submitOrderHandler = (data) => {
        setLoading(true);
        submitOrder(data)
            .then(() => {
                setStepNo((count) => count + 1);
                setLoading(false);
                setError(false);
                onClearCart();
            })
            .catch((e) => {
                console.log(e);
                setLoading(false);
                setError(true);
            });
    };

    const shippingDetailsHandler = (values) => {
        setOrderData((prevState) => ({ ...prevState, shippingInfo: { ...values } }));
        setStepNo((count) => count + 1);
    };

    const paymentHandler = (values) => {
        const updatedOderData = {
            ...orderData,
            paymentInfo: { ...values },
        };
        setOrderData((prevState) => ({ ...prevState, ...updatedOderData }));
        submitOrderHandler(updatedOderData);
    };

    const confirmOrderButtonHander = () => {
        if (!error) {
            history.replace('./');
        } else {
            setStepNo(3);
        }
    };

    const buttonBackHandler = () => {
        setStepNo((count) => count - 1);
    };

    let stepView;
    if (stepNo === 1)
        stepView = (
            <OrderSummary
                cartItems={cartItems}
                price={price}
                toggleToCart={onToggleToCart}
                updateCount={onUpdateItemCount}
                buttonBack={() => history.push(authRedirectPath)}
                buttonNext={() => setStepNo((count) => count + 1)}
            />
        );
    if (stepNo === 2)
        stepView = (
            <ShippingDetails
                fullName={user.displayName}
                email={user.email}
                buttonBack={buttonBackHandler}
                submitSippingInfo={(values) => shippingDetailsHandler(values)}
            />
        );
    if (stepNo === 3)
        stepView = (
            <Payment
                loading={loading}
                buttonBack={buttonBackHandler}
                submitCardInfo={(values) => paymentHandler(values)}
            />
        );
    if (stepNo === 4) {
        stepView = <OrderConfirm error={error} clicked={confirmOrderButtonHander} />;
    }

    return (
        <Section>
            <Container>
                {stepNo < 4 && <Steps activeStep={stepNo} />}
                {stepView}
            </Container>
        </Section>
    );
};

const mapStateToProps = (state) => ({
    cartItems: state.cart.cartItems,
    price: state.cart.price,
    authRedirectPath: state.home.authRedirectPath,
    user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
    onToggleToCart: (add, item) => dispatch(actions.toggleToCart(add, item)),
    onUpdateItemCount: (id, identifier) => dispatch(actions.updateItemCount(id, identifier)),
    onToggleCartUI: (bool) => dispatch(actions.toggleCartUI(bool)),
    onClearCart: () => dispatch(actions.onClearCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
