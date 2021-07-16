import Button from 'components/UI/Button/Button';
import { Formik } from 'formik';
import React from 'react';
import { Alert, Form, Spinner } from 'react-bootstrap';
import { DangerText, H1, Label } from 'styled/custom/components';
import * as Yup from 'yup';
import { Checkbox, StyledValidation } from './styled';

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
                    <Form.Control {...formData[key].config} {...formik.getFieldProps(key)} />

                    {formik.touched[key] && formik.errors[key] ? (
                        <StyledValidation>
                            <DangerText>* {formik.errors[key]}</DangerText>
                        </StyledValidation>
                    ) : (
                        <span>&nbsp;</span>
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
                    <H1> Sign Up </H1>

                    {/** show error */}
                    {props.error && (
                        <Alert variant="danger" style={{ marginBottom: '2rem' }}>
                            {props.errMsg}
                        </Alert>
                    )}

                    {/* render all form innput */}
                    {formInput(formik)}

                    <Form.Group>
                        <Checkbox {...formik.getFieldProps('acceptedTerms')} />
                        <Label>
                            I&apos;ve read and agree with Terms of Service and our Privacy Policy
                        </Label>
                        {formik.touched.acceptedTerms && formik.errors.acceptedTerms ? (
                            <StyledValidation style={{ marginTop: '0rem' }}>
                                <DangerText>* {formik.errors.acceptedTerms}</DangerText>
                            </StyledValidation>
                        ) : (
                            <span>&nbsp;</span>
                        )}
                    </Form.Group>
                    <Button type="submit" width="100" disabled={props.disabled}>
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
