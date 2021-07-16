import React from 'react';
import Button from 'components/UI/Button/Button';
import { H5 } from 'styled/custom/components';

const LoginBeforeCheckout = ({ modalClose, loginModalShow }) => (
    <div className="px-2 py-5">
        <H5>You must sign in to continue checking out</H5>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Button variant="outline-primary" onClick={modalClose}>
                Continue shoping
            </Button>
            <Button onClick={loginModalShow}>Signin to checkout</Button>
        </div>
    </div>
);

export default LoginBeforeCheckout;
