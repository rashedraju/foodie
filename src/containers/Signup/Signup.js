import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SignupForm from '../../components/Form/SignupForm/SignupForm';
import * as actions from '../../store/actions';
import styles from './Signup.module.scss';

const Signup = (props) => {
    const {
        isAuthenticated,
        redirectPath,
        isLoading,
        error,
        errMsg,
        onSignup,
        history,
        onToggleCartUI,
    } = props;

    useEffect(() => {
        console.log('signup.js [component did mount]');
        onToggleCartUI();
        if (isAuthenticated) history.replace(redirectPath);
    }, [history, isAuthenticated, onToggleCartUI, redirectPath]);

    return (
        <div className={styles.signup}>
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
    redirectPath: state.home.authRedirectPath,
    isLoading: state.auth.authStatus.loading,
    error: state.auth.authStatus.error,
    errMsg: state.auth.authStatus.msg,
    cartShow: state.cart.cartShow,
});

const mapDispatchToProps = (dispatch) => ({
    onSignup: (values) => dispatch(actions.signup(values)),
    onToggleCartUI: (bool) => dispatch(actions.toggleCartUI(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
