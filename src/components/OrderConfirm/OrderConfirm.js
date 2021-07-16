import React from 'react';
import { Card } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';
import { GiCheckMark } from 'react-icons/gi';
import { StyledCheckoutStep } from 'styled/custom/typography';
import { StyledOrderConfirm, StyledTitle, ButtonWrapper, IconWrapper } from './styled';
import Button from '../UI/Button/Button';

const OrderConfirm = ({ error, clicked }) => (
    <StyledCheckoutStep>
        <Card>
            <Card.Body>
                <StyledOrderConfirm>
                    <IconWrapper>{error ? <FaTimes /> : <GiCheckMark />}</IconWrapper>
                    <StyledTitle error={error}> {error ? 'Failed' : 'Awesome'} </StyledTitle>
                    <p>
                        {error
                            ? 'Oops! Something went terribly wrong here'
                            : 'Congratulatins. your order is accepted!'}
                    </p>

                    <ButtonWrapper>
                        <Button
                            width="100"
                            variant={error ? 'outline-danger' : 'primary'}
                            onClick={clicked}
                        >
                            {error ? 'Please try again' : 'More hungry. Lets do again'}
                        </Button>
                    </ButtonWrapper>
                </StyledOrderConfirm>
            </Card.Body>
        </Card>
    </StyledCheckoutStep>
);

export default OrderConfirm;
