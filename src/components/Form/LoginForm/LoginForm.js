import React from 'react';
import { NavLink } from 'react-router-dom';

import { Form, Button } from 'react-bootstrap';
import './LoginForm.scss';

const loginForm = props => (
    <Form className="form">
        <h1 className="form__header text-dark display-3 text-center"> Hello </h1>
        <h5 className="form__header-sub text-dark text-center mb-5">Sign in to your account</h5>

        <Form.Control placeholder="Email Address" className="form__field w-md-75 mx-auto" />
        <Form.Label className="form__label"> Email Address </Form.Label>


        <Form.Control type="password" placeholder="Password" className="form__field w-md-75 mx-auto" />
        <Form.Label className="form__label"> Password </Form.Label>

        <Button type="submit" variant="primary" className="w-75 d-block mx-auto mb-2">Signup</Button>
        <p className="text-muted text-center">
            Don't have an account?{' '}
            <NavLink to="/signup" className="text-primary" onClick={props.closeLoginModal}>
                Sign Up here
                </NavLink>
        </p>
    </Form>
);

export default loginForm;