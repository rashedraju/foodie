import React from 'react';
import { Col } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import { Box } from 'styled/custom/components';
import Button from '../UI/Button/Button';
import {
    AddCartBtnWrapper,
    AddCartLayer,
    FoodPrice,
    FoodSkeleton,
    FoodTitle,
    Fugure,
    Image,
    Picture,
    StyledCartIcon,
    FoodsWrapper,
} from './styled';

const Foods = (props) => {
    const { foods, toggleToCart } = props;

    const foodElelments = foods.map((item, index) => (
        <Col lg="3" md="4" sm="6" key={item.id || `skeleton${index}`} style={{ padding: '0.5rem' }}>
            <Fugure>
                <Picture>
                    {item.image ? (
                        <>
                            <Image image={item.image} />
                            <AddCartLayer>
                                <AddCartBtnWrapper>
                                    <Button onClick={() => toggleToCart(!item.isAddedToCart, item)}>
                                        {' '}
                                        {item.isAddedToCart
                                            ? 'REMOVE FROM CART'
                                            : 'ADD TO CART'}{' '}
                                    </Button>
                                </AddCartBtnWrapper>
                            </AddCartLayer>
                        </>
                    ) : (
                        <FoodSkeleton />
                    )}
                </Picture>
                <figcaption>
                    {item.title ? <FoodTitle>{item.title} </FoodTitle> : <Skeleton width={100} />}
                </figcaption>
                <Box justify="space-between">
                    {item.price ? (
                        <>
                            <FoodPrice>${item.price}</FoodPrice>

                            <StyledCartIcon
                                icon={['fas', 'cart-plus']}
                                isadded={item.isAddedToCart.toString()}
                                onClick={() => toggleToCart(!item.isAddedToCart, item)}
                            />
                        </>
                    ) : (
                        <>
                            <Skeleton width={30} />
                            <Skeleton width={30} />
                        </>
                    )}
                </Box>
            </Fugure>
        </Col>
    ));
    return <FoodsWrapper>{foodElelments}</FoodsWrapper>;
};

export default Foods;
