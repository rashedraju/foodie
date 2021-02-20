import React from 'react';

import { Form, Button } from 'react-bootstrap';
import styles from './SignupForm.module.scss';

const signupForm = (props) => {
    return (
        <Form>
            <h1 className="text-primary mb-5"> Sign Up</h1>

            <Form.Control placeholder="First Name" className={`${styles.field} w-md-75`} />
            <Form.Label className={styles.label}> First Name</Form.Label>

            <Form.Control placeholder="Last Name" className={`${styles.field} w-md-75`} />
            <Form.Label className={styles.label}> Last Name</Form.Label>

            <Form.Control placeholder="Email Address" className={`${styles.field} w-md-75`} />
            <Form.Label className={styles.label}> Email Address </Form.Label>

            <Form.Control type="password" placeholder="Password" className={`${styles.field} w-md-75`} />
            <Form.Label className={styles.label}> Password </Form.Label>

            <Form.Check type="checkbox" id="customControlInline" label="I've read and agree with Terms of Service and our Privacy Policy" className={`${styles.checkbox} ml-1 mb-4 text-white w-md-75`} custom />

            <Button type="submit" variant="primary" className="w-mx-md-100">Signup</Button>
        </Form>
        // <div className="card">
        //     <div className="card-header text-uppercase text-center">
        //         <h5 className="card-title text-uppercase text-success">
        //             SignUp
        //             </h5>
        //     </div>
        //     <div className="card-body w-100 w-sm-50 mx-auto">
        //         {[props.inputElement.map((el, i) => <Input config={el.config} key={i} value={el.value} changed={(e) => props.changed(e, el.key)} />)]}
        //     </div>
        //     <div className="card-footer text-center">
        //         <Button
        //             type="submit"
        //             title='SignUp'
        //             cls="btn btn-primary w-sm-50 w-100 text-white text-center"
        //         />
        //     </div>
        // </div>
    )
}

export default signupForm;