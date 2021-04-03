import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { FaCcMastercard } from 'react-icons/fa';
import { RiVisaFill } from 'react-icons/ri';
import PaymentForm from '../Form/PaymentForm/PaymentForm';
import CheckoutStepButtons from '../UI/CheckoutStepButtons/CheckoutStepButtons';
import styles from './Payment.module.scss';

const Payment = ({ buttonBack, submitCardInfo, loading }) => {
    const [method, setMethod] = useState('card');
    const [executeSubmit, setExecuteSubmit] = useState(0);
    const [paymentInfo, setPaymentInfo] = useState({});

    const [methodOneStyle, methodTwoStyle, methodOneRadioStyle, methodTwoRadioStyle] = [
        [],
        [],
        [],
        [],
    ];

    if (method === 'card') {
        methodOneStyle.push(styles.activeMethod);
        methodOneRadioStyle.push(styles.activeMethodRadio);
        methodTwoStyle.pop();
        methodTwoRadioStyle.pop();
    }
    if (method === 'cash') {
        methodTwoStyle.push(styles.activeMethod);
        methodTwoRadioStyle.push(styles.activeMethodRadio);
        methodOneStyle.pop();
        methodOneRadioStyle.pop();
    }

    const buttonNextHandler = () => {
        if (method === 'card') {
            if (paymentInfo.cardInfo) {
                submitCardInfo({
                    ...paymentInfo,
                });
            }
            setExecuteSubmit((count) => count + 1);
        } else if (method === 'cash') {
            submitCardInfo({
                method,
            });
        }
    };

    return (
        <div className="w-md-75 my-3 checkout__step">
            <Card className="my-3">
                <Card.Body>
                    <div className={styles.methodToggler}>
                        <span
                            className={`${styles.methodRadio} ${methodOneRadioStyle.join(' ')}`}
                            role="button"
                            tabIndex={-1}
                            onClick={() => setMethod('card')}
                        />{' '}
                        Credit / Debit Card
                        <div style={{ marginLeft: 'auto', fontSize: '2rem' }}>
                            {' '}
                            <RiVisaFill /> <FaCcMastercard />{' '}
                        </div>
                    </div>
                    <div className={`${styles.paymentDetails} ${methodOneStyle.join(' ')}`}>
                        <h4 className="text-center"> Accepted cards </h4>
                        <div style={{ textAlign: 'center', fontSize: '2rem' }}>
                            <RiVisaFill /> <FaCcMastercard />{' '}
                        </div>
                        <PaymentForm
                            executeSubmit={executeSubmit}
                            submitCardInfo={(data) =>
                                setPaymentInfo({ cardInfo: { ...data }, method })
                            }
                        />
                    </div>
                </Card.Body>
            </Card>
            <Card className="my-3">
                <Card.Body>
                    <div className={`${styles.methodToggler} my-3`}>
                        <span
                            className={`${styles.methodRadio} ${methodTwoRadioStyle.join(' ')}`}
                            role="button"
                            tabIndex={-2}
                            onClick={() => setMethod('cash')}
                        />{' '}
                        Cash
                    </div>
                    <div className={`${styles.paymentDetails} ${methodTwoStyle.join(' ')}`}>
                        <h4>Pay by cash</h4>
                        <p>
                            Consider payment upon ordering for contactless delivery. You can&apos;t
                            pay by a card to the rider upon delivery.
                        </p>
                    </div>
                </Card.Body>
            </Card>
            <CheckoutStepButtons
                backTitle="go back"
                nextTitle="place order"
                loading={loading}
                buttonBack={buttonBack}
                buttonNext={buttonNextHandler}
            />
        </div>
    );
};

export default Payment;
