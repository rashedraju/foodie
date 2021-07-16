import Button from 'components/UI/Button/Button';
import { Formik } from 'formik';
import React, { useEffect } from 'react';
import { Alert, Form, Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { H1, H5, MutedText } from 'styled/custom/components';
import * as Yup from 'yup';

const LoginForm = (props) => {
    const { isAuthenticated, onLogin, isLoading, error, closeLoginModal } = props;

    useEffect(() => {
        if (isAuthenticated) closeLoginModal();
    }, [isAuthenticated, closeLoginModal]);

    return (
        <>
            <H1> Hello </H1>
            <H5>Sign in to your account</H5>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                // Form validation
                validationSchema={Yup.object({
                    email: Yup.string().email().required(),
                    password: Yup.string().required(),
                })}
                onSubmit={(values) => onLogin(values)}
            >
                {(formik) => (
                    <Form onSubmit={formik.handleSubmit}>
                        {/** show error */}
                        {error && (
                            <Alert variant="danger" style={{ marginBottom: '2rem' }}>
                                {error.message}
                            </Alert>
                        )}

                        <Form.Control
                            id="email"
                            placeholder="Email Address"
                            {...formik.getFieldProps('email')}
                        />

                        <Form.Control
                            id="password"
                            type="password"
                            placeholder="Password"
                            {...formik.getFieldProps('password')}
                        />

                        <Button width="100" disabled={isLoading}>
                            {isLoading ? (
                                <Spinner as="span" role="status" animation="border" size="sm" />
                            ) : (
                                'Login'
                            )}
                        </Button>
                        <MutedText>
                            Don&apos;t have an account?
                            <NavLink to="/signup" onClick={closeLoginModal}>
                                Sign Up here
                            </NavLink>
                        </MutedText>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default LoginForm;
