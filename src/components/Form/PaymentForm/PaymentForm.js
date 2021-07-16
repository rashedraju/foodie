import valid from 'card-validator';
import { Formik, useFormikContext } from 'formik';
import React, { useEffect } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { DangerText } from 'styled/custom/components';
import * as Yup from 'yup';

const AutoFormSubmit = ({ executeSubmit }) => {
    const { submitForm, errors, values } = useFormikContext();
    const isSubmitAble =
        values.name !== '' &&
        values.cardnumber !== '' &&
        values.expiry !== '' &&
        values.cvv !== '' &&
        !errors.name &&
        !errors.cardnumber &&
        !errors.expiry &&
        !errors.cvv;

    useEffect(() => {
        if (executeSubmit || isSubmitAble) submitForm();
    }, [executeSubmit, isSubmitAble, submitForm]);
    return null;
};

const PaymentForm = ({ submitCardInfo, executeSubmit }) => (
    <Formik
        initialValues={{
            name: '',
            cardnumber: '',
            expiry: '',
            cvv: '',
        }}
        // Form validation
        validationSchema={Yup.object({
            name: Yup.string()
                .required('Name is required')
                .test(
                    'test-name',
                    'Card name is invalid',
                    (value) => valid.cardholderName(value).isValid
                ),

            cardnumber: Yup.string()
                .max(19)
                .required('Please Enter your card number')
                .test(
                    'test-number',
                    'Card number is invalid',
                    (value) => valid.number(value).isValid
                ),
            expiry: Yup.string()
                .required('Please enter your card expiry date')
                .test(
                    'test-expiry',
                    'Card expiry date is invalid',
                    (value) => valid.expirationDate(value).isValid
                ),
            cvv: Yup.string()
                .max(4)
                .required('Please enter at least 3 digits')
                .test('test-cvv', 'Card cvv is invalid', (value) => valid.cvv(value).isValid),
        })}
        onSubmit={(values, actions) => {
            submitCardInfo(values);
            actions.setSubmitting(false);
        }}
    >
        {(formik) => (
            <Form className="form">
                <Row>
                    <Col sm={6}>
                        <Form.Control
                            id="name"
                            type="text"
                            placeholder="Name on card"
                            {...formik.getFieldProps('name')}
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <DangerText>{formik.errors.name}</DangerText>
                        ) : (
                            <div>&nbsp;</div>
                        )}
                    </Col>
                    <Col sm={6}>
                        <Form.Control
                            id="cardnumber"
                            type="text"
                            placeholder="Card number"
                            {...formik.getFieldProps('cardnumber')}
                        />
                        {formik.touched.cardnumber && formik.errors.cardnumber ? (
                            <DangerText>{formik.errors.cardnumber}</DangerText>
                        ) : (
                            <div>&nbsp;</div>
                        )}
                    </Col>
                    <Col sm={6}>
                        <Form.Control
                            id="expiry"
                            type="text"
                            placeholder="Expiry date"
                            {...formik.getFieldProps('expiry')}
                        />
                        {formik.touched.expiry && formik.errors.expiry ? (
                            <DangerText>{formik.errors.expiry}</DangerText>
                        ) : (
                            <div>&nbsp;</div>
                        )}
                    </Col>
                    <Col sm={6}>
                        <Form.Control
                            id="cvv"
                            type="text"
                            placeholder="CVV"
                            maxLength={4}
                            {...formik.getFieldProps('cvv')}
                        />
                        {formik.touched.cvv && formik.errors.cvv ? (
                            <DangerText>{formik.errors.cvv}</DangerText>
                        ) : (
                            <div>&nbsp;</div>
                        )}
                    </Col>
                </Row>
                <AutoFormSubmit executeSubmit={executeSubmit} />
            </Form>
        )}
    </Formik>
);

export default PaymentForm;
