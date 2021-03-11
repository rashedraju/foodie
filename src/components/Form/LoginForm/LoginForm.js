import { Formik } from 'formik';
import React, { useEffect } from 'react';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as Yup from 'yup';
import * as actions from '../../../store/actions';
import styles from './LoginForm.module.scss';

const LoginForm = (props) => {
    const { isAuthenticated, onLogin, isLoading, error, errMsg, closeLoginModal } = props;

    useEffect(() => {
        if (isAuthenticated) closeLoginModal();
    }, [isAuthenticated, closeLoginModal]);

    return (
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
                <Form className="form" onSubmit={formik.handleSubmit}>
                    <h1 className="text-dark display-3 text-center"> Hello </h1>
                    <h5 className="text-dark text-center mb-5">Sign in to your account</h5>

                    {/** show error */}
                    {error && (
                        <Alert variant="danger" style={{ marginBottom: '2rem' }}>
                            {errMsg}
                        </Alert>
                    )}

                    <Form.Control
                        id="email"
                        placeholder="Email Address"
                        className={`${styles.field} w-md-75 mx-auto`}
                        {...formik.getFieldProps('email')}
                    />
                    <Form.Label className={styles.loginLabel}> Email Address </Form.Label>

                    <Form.Control
                        id="password"
                        type="password"
                        placeholder="Password"
                        className={`${styles.field} w-md-75 mx-auto`}
                        {...formik.getFieldProps('password')}
                    />
                    <Form.Label className={styles.loginLabel}> Password </Form.Label>

                    <Button
                        type="submit"
                        variant="primary"
                        className="w-75 d-block mx-auto mb-2 shadow-none"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <Spinner as="span" role="status" animation="border" size="sm" />
                        ) : (
                            'Login'
                        )}
                    </Button>
                    <p className="text-muted text-center">
                        Don&apos;t have an account?
                        <NavLink to="/signup" className="text-primary" onClick={closeLoginModal}>
                            Sign Up here
                        </NavLink>
                    </p>
                </Form>
            )}
        </Formik>
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.authStatus.isAuthenticated,
    isLoading: state.auth.authStatus.loading,
    error: state.auth.authStatus.error,
    errMsg: state.auth.authStatus.msg,
});

const mapDispatchToProps = (dispatch) => ({
    onLogin: (values) => dispatch(actions.login(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
