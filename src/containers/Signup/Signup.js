import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import SignupForm from '../../components/Form/SignupForm/SignupForm';
import styles from './Signup.module.scss';
import mobileBg from "../../assets/img/signup-bg-mobile.png";
import * as actions from '../../store/actions';

const Signup = (props) => {
    const { isAuthenticated, redirectPath, isLoading, error, errMsg, onSignup, history } = props;

    useEffect(() => {
        if (isAuthenticated) history.replace(redirectPath)
    }, [isAuthenticated, history, redirectPath]);

    return (
        <div className={styles.signup}>
            <img src={mobileBg} className={styles.BgSm} alt="signup background" />
            <div className={`${styles.container} row`}>
                <div className="signup__left col-md-6">
                    <SignupForm
                        submit={(values) => onSignup(values)}
                        {...(isLoading && { disabled: true, loading: true })}
                        {...(error && { error, errMsg })} />
                </div>
                <div className={`${styles.right} col-md-6`}></div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.authStatus.isAuthenticated,
    redirectPath: state.landingPage.authRedirectPath,
    isLoading: state.auth.authStatus.loading,
    error: state.auth.authStatus.error,
    errMsg: state.auth.authStatus.msg
})

const mapDispatchToProps = dispatch => ({
    onSignup: (values) => dispatch(actions.signup(values)),
})

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(Signup));
