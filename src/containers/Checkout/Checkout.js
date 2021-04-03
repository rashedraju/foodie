import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { submitOrder } from '../../adapters/firebase';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import Payment from '../../components/Payment/Payment';
import ShippingDetails from '../../components/ShippingDetails/ShippingDetails';
import OrderConfirm from '../../components/UI/OrderConfirm/OrderConfirm';
import selector from '../../shared/selector';
import * as actions from '../../store/actions';
import styles from './Checkout.module.scss';

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
        selector('id', 'cartToggler').style.pointerEvents = 'none';
        return () => {
            selector('id', 'cartToggler').style.pointerEvents = 'auto';
        };
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

    const steps = [
        {
            id: 1,
            title: 'Order Summary',
        },
        {
            id: 2,
            title: 'Shipping Details',
        },
        {
            id: 3,
            title: 'Payment',
        },
    ];

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
                buttonBack={() => setStepNo((count) => count - 1)}
                submitSippingInfo={(values) => shippingDetailsHandler(values)}
            />
        );
    if (stepNo === 3)
        stepView = (
            <Payment
                loading={loading}
                buttonBack={() => setStepNo((count) => count - 1)}
                submitCardInfo={(values) => paymentHandler(values)}
            />
        );
    if (stepNo === 4) {
        stepView = <OrderConfirm error={error} clicked={confirmOrderButtonHander} />;
    }

    return (
        <section className={`container py-5 ${styles.checkout}`}>
            {stepNo < 4 && (
                <div className={styles.steps}>
                    {steps.map((el) => (
                        <div className={styles.stepsItem} key={el.id}>
                            <div
                                className={[
                                    styles.stepsNo,
                                    el.id === stepNo && styles.activeStepNo,
                                ].join(' ')}
                            >
                                {' '}
                                {el.id}{' '}
                            </div>
                            <div className={styles.stepsTitle}> {el.title} </div>
                        </div>
                    ))}
                </div>
            )}
            {stepView}
        </section>
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
