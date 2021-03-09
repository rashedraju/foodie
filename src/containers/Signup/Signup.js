import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import mobileBg from '../../assets/img/signup-bg-mobile.png';
import SignupForm from '../../components/Form/SignupForm/SignupForm';
import * as actions from '../../store/actions';
import styles from './Signup.module.scss';

const Signup = (props) => {
    const { isAuthenticated, redirectPath, isLoading, error, errMsg, onSignup, history } = props;

    useEffect(() => {
        if (isAuthenticated) history.replace(redirectPath);
    }, [isAuthenticated, history, redirectPath]);

    return (
        <div className={styles.signup}>
            <img src={mobileBg} className={styles.BgSm} alt="signup background" />
            <div className={`${styles.container} row`}>
                <div className="signup__left col-md-6">
                    <SignupForm
                        submit={(values) => onSignup(values)}
                        disabled={isLoading}
                        loading={isLoading}
                        error={error}
                        errMsg={errMsg}
                    />
                </div>
                <div className={`${styles.right} col-md-6`} />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.authStatus.isAuthenticated,
    redirectPath: state.landingPage.authRedirectPath,
    isLoading: state.auth.authStatus.loading,
    error: state.auth.authStatus.error,
    errMsg: state.auth.authStatus.msg,
});

const mapDispatchToProps = (dispatch) => ({
    onSignup: (values) => dispatch(actions.signup(values)),
});

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(Signup));
