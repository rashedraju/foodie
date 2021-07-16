import { Formik } from 'formik';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { DangerText, H4 } from 'styled/custom/components';
import { StyledCheckoutStep } from 'styled/custom/typography';
import * as Yup from 'yup';
import Button, { ButtonGroup } from '../UI/Button/Button';

const ShippingDetails = ({ fullName, email, buttonBack, submitSippingInfo }) => {
    const phoneNumberRegex = /^(\+8801)[1-9]\d{8}/g;
    return (
        <StyledCheckoutStep>
            <H4> Shipping Details </H4>
            <Formik
                initialValues={{
                    fullname: fullName,
                    email,
                    address: '',
                    phone: '+8801',
                }}
                // Form validation
                validationSchema={Yup.object({
                    fullname: Yup.string().required('Name required!'),
                    email: Yup.string().email().required('Please enter your email address.'),
                    address: Yup.string().required('Please enter delivery address.'),
                    phone: Yup.string()
                        .matches(phoneNumberRegex)
                        .required('Phone number required.'),
                })}
                onSubmit={(values) => {
                    submitSippingInfo(values);
                }}
            >
                {(formik) => (
                    <Form className="form" onSubmit={formik.handleSubmit}>
                        <Row>
                            <Col sm={6}>
                                <Form.Control
                                    id="fullname"
                                    placeholder="Full Name"
                                    {...formik.getFieldProps('fullname')}
                                />
                                {formik.touched.fullname && formik.errors.fullname ? (
                                    <DangerText>{formik.errors.fullname}</DangerText>
                                ) : (
                                    <div> &nbsp;</div>
                                )}
                            </Col>
                            <Col sm={6}>
                                <Form.Control
                                    id="email"
                                    type="email"
                                    placeholder="Email Address"
                                    {...formik.getFieldProps('email')}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <DangerText>{formik.errors.email}</DangerText>
                                ) : (
                                    <div> &nbsp;</div>
                                )}
                            </Col>
                            <Col sm={6}>
                                <Form.Control
                                    id="address"
                                    placeholder="Enter full shipping address"
                                    {...formik.getFieldProps('address')}
                                />
                                {formik.touched.address && formik.errors.address ? (
                                    <DangerText>{formik.errors.address}</DangerText>
                                ) : (
                                    <div> &nbsp;</div>
                                )}
                            </Col>
                            <Col sm={6}>
                                <Form.Control
                                    id="phone"
                                    type="phone"
                                    placeholder="Mobile Number"
                                    {...formik.getFieldProps('phone')}
                                />
                                {formik.touched.phone && formik.errors.phone ? (
                                    <DangerText>{formik.errors.phone}</DangerText>
                                ) : (
                                    <div> &nbsp;</div>
                                )}
                            </Col>
                        </Row>
                        <ButtonGroup justify="space-between">
                            <Button variant="outline-primary" onClick={buttonBack}>
                                go back
                            </Button>
                            <Button type="submit" variant="primary">
                                continue to payment
                            </Button>
                        </ButtonGroup>
                    </Form>
                )}
            </Formik>
        </StyledCheckoutStep>
    );
};

export default ShippingDetails;
