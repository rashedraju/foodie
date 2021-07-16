import { ReactComponent as CartIcon } from 'assets/svg/cart-outline.svg';
import Modal from 'components/UI/Modal/Modal';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Box } from 'styled/custom/components';
import LoginBeforeCheckout from 'components/LoginBeforeCheckout/LoginBeforeCheckout';
import AmountSummary from '../AmountSummary/AmountSummary';
import Button from '../UI/Button/Button';
import CartItem from './CartItem/CartItem';
import { CartAmount, CartItemsStyled, CartWrapper } from './styled';

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
        <p style={{ margin: '0 2rem', textAlign: 'center' }}> Start adding items to your cart </p>
    );

    return (
        <CartWrapper show={cartShow}>
            <Box justify="space-between">
                <div>
                    <CartIcon />
                    <span>
                        {cartItems.length} {cartItems.length > 1 ? 'ITEMS' : 'ITEM'}
                    </span>
                </div>
                <Button variant="outline-light" onClick={toggleCartUI}>
                    Close
                </Button>
            </Box>

            {/* render all cart items */}
            <CartItemsStyled>{itemElements}</CartItemsStyled>

            {cartItems.length > 0 && (
                <CartAmount>
                    <AmountSummary price={price} />
                    <Button
                        variant="primary"
                        width="100"
                        onClick={() =>
                            isAuthenticated ? history.replace('./checkout') : setShowModal(true)
                        }
                    >
                        GO TO CHECKOUT
                    </Button>
                </CartAmount>
            )}
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
        </CartWrapper>
    );
};

export default Cart;
