import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';
import { GiCheckMark } from 'react-icons/gi';
import styles from './OrderConfirm.module.scss';

const OrderConfirm = ({ error, clicked }) => (
    <Card className="w-md-75 my-3 checkout__step">
        <Card.Body>
            <div
                className={` checkout__step ${styles.orderConfirm} ${
                    error ? styles.failed : styles.success
                }`}
            >
                {error ? (
                    <FaTimes className={styles.icon} />
                ) : (
                    <GiCheckMark className={styles.icon} />
                )}

                <div className={styles.title}> {error ? 'Failed' : 'Awesome'} </div>
                <p className={styles.subtitle}>
                    {' '}
                    {error
                        ? 'Oops! Something went terribly wrong here'
                        : 'Congratulatins. your order is accepted!'}
                </p>

                <div className={styles.bottom}>
                    <Button className={styles.button} onClick={clicked}>
                        {error ? 'Please try again' : 'More hungry. Lets do again'}
                    </Button>
                </div>
            </div>
        </Card.Body>
    </Card>
);

export default OrderConfirm;
