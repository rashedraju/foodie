import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { FaCcMastercard } from 'react-icons/fa';
import { RiVisaFill } from 'react-icons/ri';
import { H4, InputRadio, Text } from 'styled/custom/components';
import { StyledCheckoutStep } from 'styled/custom/typography';
import PaymentForm from '../Form/PaymentForm/PaymentForm';
import Button, { ButtonGroup } from '../UI/Button/Button';
import { MethodToggler, PaymentDetails } from './styled';

const Payment = ({ buttonBack, submitCardInfo, loading }) => {
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [executeSubmit, setExecuteSubmit] = useState(0);
    const [paymentInfo, setPaymentInfo] = useState({});

    const buttonNextHandler = () => {
        if (paymentMethod === 'card') {
            if (paymentInfo.cardInfo) {
                submitCardInfo({
                    ...paymentInfo,
                });
            }
            setExecuteSubmit((count) => count + 1);
        } else if (paymentMethod === 'cash') {
            submitCardInfo({
                paymentMethod,
            });
        }
    };

    return (
        <StyledCheckoutStep>
            <Card>
                <Card.Body>
                    <MethodToggler>
                        <InputRadio
                            active={paymentMethod === 'card'}
                            onClick={() => setPaymentMethod('card')}
                        />
                        Credit / Debit Card
                    </MethodToggler>
                    <PaymentDetails active={paymentMethod === 'card'}>
                        <H4>
                            Accepted cards <br />
                            <RiVisaFill /> <FaCcMastercard />
                        </H4>
                        <PaymentForm
                            executeSubmit={executeSubmit}
                            submitCardInfo={(data) =>
                                setPaymentInfo({ cardInfo: { ...data }, paymentMethod })
                            }
                        />
                    </PaymentDetails>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <MethodToggler>
                        <InputRadio
                            active={paymentMethod === 'cash'}
                            onClick={() => setPaymentMethod('cash')}
                        />
                        Cash
                    </MethodToggler>
                    <PaymentDetails active={paymentMethod === 'cash'}>
                        <H4>Pay by cash</H4>
                        <Text>
                            Consider payment upon ordering for contactless delivery. You can&apos;t
                            pay by a card to the rider upon delivery.
                        </Text>
                    </PaymentDetails>
                </Card.Body>
            </Card>
            <ButtonGroup justify="space-between">
                <Button variant="outline-primary" onClick={buttonBack}>
                    go back
                </Button>
                <Button
                    type="submit"
                    variant="primary"
                    loading={loading}
                    onClick={buttonNextHandler}
                >
                    place order
                </Button>
            </ButtonGroup>
        </StyledCheckoutStep>
    );
};

export default Payment;
