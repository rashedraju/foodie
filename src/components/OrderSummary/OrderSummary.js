import CartItem from 'components/Cart/CartItem/CartItem';
import Button, { ButtonGroup } from 'components/UI/Button/Button';
import React from 'react';
import { Box, H4, Text } from 'styled/custom/components';
import { StyledCheckoutStep } from 'styled/custom/typography';
import AmountSummary from '../AmountSummary/AmountSummary';

const OrderSummary = ({ cartItems, price, toggleToCart, updateCount, buttonBack, buttonNext }) =>
    cartItems.length > 0 ? (
        <StyledCheckoutStep>
            <H4 className="text-center"> Order Summary </H4>
            <Text>Review items in your basket.</Text>
            {cartItems.map((item) => (
                <CartItem
                    key={item.id}
                    item={item}
                    toggleToCart={() => toggleToCart(false, item)}
                    updateCount={updateCount}
                />
            ))}
            <AmountSummary price={price} />
            <ButtonGroup justify="space-between">
                <Button variant="outline-primary" onClick={buttonBack}>
                    {' '}
                    Continue shopping{' '}
                </Button>
                <Button variant="primary" onClick={buttonNext}>
                    {' '}
                    continue to shipping{' '}
                </Button>
            </ButtonGroup>
        </StyledCheckoutStep>
    ) : (
        <Box column>
            <H4 className="text-center"> Your cart is empty! </H4>
            <Text> Start adding items to your cart </Text>
            <Button onClick={buttonBack}>CONTINUE SHOPPING</Button>
        </Box>
    );

export default OrderSummary;
