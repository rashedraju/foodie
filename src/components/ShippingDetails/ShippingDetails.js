import { Formik } from 'formik';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import * as Yup from 'yup';
import CheckoutStepButtons from '../UI/CheckoutStepButtons/CheckoutStepButtons';

const ShippingDetails = ({ fullName, email, buttonBack, submitSippingInfo }) => {
    const phoneNumberRegex = /^(\+8801)[1-9]\d{8}/g;
    return (
        <div className="p-2 w-md-75 checkout__step">
            <h4 className="text-center"> Shipping Details </h4>
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
                            <Col sm={6} className="my-3">
                                <Form.Control
                                    id="fullname"
                                    placeholder="Full Name"
                                    {...formik.getFieldProps('fullname')}
                                />
                                {formik.touched.fullname && formik.errors.fullname ? (
                                    <p className="pl-2 text-danger mb-0">
                                        {formik.errors.fullname}
                                    </p>
                                ) : (
                                    <div> &nbsp;</div>
                                )}
                            </Col>
                            <Col sm={6} className="my-3">
                                <Form.Control
                                    id="email"
                                    type="email"
                                    placeholder="Email Address"
                                    {...formik.getFieldProps('email')}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <p className="pl-2 text-danger mb-0">{formik.errors.email}</p>
                                ) : (
                                    <div> &nbsp;</div>
                                )}
                            </Col>
                            <Col sm={6} className="my-3">
                                <Form.Control
                                    id="address"
                                    placeholder="Enter full shipping address"
                                    {...formik.getFieldProps('address')}
                                />
                                {formik.touched.address && formik.errors.address ? (
                                    <p className="pl-2 text-danger mb-0">{formik.errors.address}</p>
                                ) : (
                                    <div> &nbsp;</div>
                                )}
                            </Col>
                            <Col sm={6} className="my-3">
                                <Form.Control
                                    id="phone"
                                    type="phone"
                                    placeholder="Mobile Number"
                                    {...formik.getFieldProps('phone')}
                                />
                                {formik.touched.phone && formik.errors.phone ? (
                                    <p className="pl-2 text-danger mb-0">{formik.errors.phone}</p>
                                ) : (
                                    <div> &nbsp;</div>
                                )}
                            </Col>
                        </Row>
                        <CheckoutStepButtons
                            backTitle="go back"
                            nextTitle="continue to payment"
                            buttonBack={buttonBack}
                        />
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ShippingDetails;
