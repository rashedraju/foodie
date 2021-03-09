import { Formik } from 'formik';
import React from 'react';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import * as Yup from 'yup';
import styles from './SignupForm.module.scss';

const signupForm = (props) => {
    const formData = {
        firstName: {
            config: {
                type: 'text',
                name: 'firstName',
                placeholder: 'First Name',
            },
            label: 'First Name',
        },
        lastName: {
            config: {
                type: 'text',
                name: 'lastName',
                placeholder: 'Last Name',
            },
            label: 'Last Name',
        },
        email: {
            config: {
                type: 'email',
                name: 'email',
                placeholder: 'Email Address',
            },
            label: 'Email Address',
        },
        password: {
            config: {
                type: 'password',
                name: 'password',
                placeholder: 'Password',
            },
            label: 'Password',
        },
    };

    const formInput = (formik) => {
        const inputFields = [];
        Object.keys(formData).forEach((key) => {
            const item = (
                <Form.Group key={key}>
                    <Form.Control
                        {...formData[key].config}
                        className={`${styles.field} w-md-75`}
                        {...formik.getFieldProps(key)}
                    />
                    <Form.Label className={styles.signupLabel}> {formData[key].label} </Form.Label>

                    {formik.touched[key] && formik.errors[key] ? (
                        <small className={`${styles.validation} text-muted`}>
                            <span className="text-danger">* </span>
                            {formik.errors[key]}
                        </small>
                    ) : (
                        <span className="mb-3">&nbsp;</span>
                    )}
                </Form.Group>
            );
            inputFields.push(item);
        });
        return inputFields;
    };

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                acceptedTerms: false,
            }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(25, 'Must be 25 characters or less.')
                    .required('First Name required.'),
                lastName: Yup.string()
                    .max(25, 'Must be 25 characters or less.')
                    .required('Last Name required.'),
                email: Yup.string().email('Invalid email address!').required('Email required.'),
                password: Yup.string()
                    .min(8, 'Password is too short - should be 8 chars minimum.')
                    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
                    .required('Password required.'),
                acceptedTerms: Yup.boolean()
                    .required('You must accept the terms and conditions.')
                    .oneOf([true], 'You must accept the terms and conditions.'),
            })}
            onSubmit={(values) => props.submit(values)}
        >
            {(formik) => (
                <Form onSubmit={formik.handleSubmit}>
                    <h1 className="text-primary mb-5"> Sign Up</h1>

                    {/** show error */}
                    {props.error && (
                        <Alert variant="danger" style={{ marginBottom: '2rem' }}>
                            {props.errMsg}
                        </Alert>
                    )}

                    {/* render all form innput */}
                    {formInput(formik)}

                    <Form.Group>
                        <Form.Check
                            type="checkbox"
                            name="acceptedTerms"
                            id="customControlInline"
                            label="I've read and agree with Terms of Service and our Privacy Policy"
                            className={`${styles.checkbox} ml-1 mb-4 text-white w-md-75`}
                            {...formik.getFieldProps('acceptedTerms')}
                            custom
                        />

                        {formik.touched.acceptedTerms && formik.errors.acceptedTerms ? (
                            <small
                                className={`${styles.validation} text-muted`}
                                style={{ marginTop: '-.5rem' }}
                            >
                                <span className="text-danger">* </span>
                                {formik.errors.acceptedTerms}
                            </small>
                        ) : (
                            <span>&nbsp;</span>
                        )}
                    </Form.Group>

                    <Button
                        type="submit"
                        variant="primary"
                        className="w-75 shadow-none"
                        disabled={props.disabled}
                    >
                        {props.loading ? (
                            <Spinner as="span" role="status" animation="border" size="sm" />
                        ) : (
                            'Signup'
                        )}
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default signupForm;
