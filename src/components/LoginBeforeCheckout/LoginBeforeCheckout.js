import React from 'react';
import { Button } from 'react-bootstrap';

const LoginBeforeCheckout = ({ modalClose, loginModalShow }) => (
    <div className="px-2 py-5">
        <h5 className="mb-3 text-center">You must sign in to continue checking out</h5>
        <div className="d-flex">
            <Button
                variant="light"
                className="border border-primary w-100 mr-2 shadow-none"
                onClick={modalClose}
            >
                Continue shoping
            </Button>
            <Button variant="primary" className="w-100 ml-2 shadow-none" onClick={loginModalShow}>
                Signin to checkout
            </Button>
        </div>
    </div>
);

export default LoginBeforeCheckout;
