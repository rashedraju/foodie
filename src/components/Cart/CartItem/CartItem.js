import Button from 'components/UI/Button/Button';
import React from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { CartItemWrapper, ItemCount, ItemImg, ItemPrice, ItemTitle } from './styled';

const CartItem = (props) => {
    const { item, toggleToCart, updateCount } = props;
    return (
        <CartItemWrapper>
            <ItemCount>
                <Button variant="light" onClick={() => updateCount(item.id, 'inc')}>
                    <FiChevronUp />
                </Button>
                <span> {item.count} </span>
                <Button
                    variant="light"
                    onClick={() => updateCount(item.id, 'dec')}
                    disabled={item.count === 1}
                >
                    <FiChevronDown />
                </Button>
            </ItemCount>

            <ItemImg src={item.image} alt={item.alt} />
            <ItemTitle>{item.title}</ItemTitle>
            <ItemPrice>${item.price}</ItemPrice>

            <Button variant="light" onClick={toggleToCart}>
                &times;
            </Button>
        </CartItemWrapper>
    );
};

export default CartItem;
