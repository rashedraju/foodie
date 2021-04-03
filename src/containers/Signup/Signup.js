import { signup } from 'adapters/firebase';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SignupForm from '../../components/Form/SignupForm/SignupForm';
import * as actions from '../../store/actions';
import styles from './Signup.module.scss';

const Signup = (props) => {
    const { redirectPath, onToggleCartUI, user } = props;

    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        onToggleCartUI();
        if (user.isAuthenticated) history.replace(redirectPath);
    }, [history, onToggleCartUI, redirectPath, user.isAuthenticated]);

    const handleSignup = ({ firstName, lastName, email, password }) => {
        setLoading(true);
        signup(firstName, lastName, email, password)
            .then(() => {
                setError(null);
            })
            .catch((err) => setError(err));
        setLoading(false);
    };

    return (
        <div className={styles.signup}>
            <div className={`${styles.container} row`}>
                <div className="signup__left col-md-6">
                    <SignupForm
                        submit={handleSignup}
                        disabled={loading}
                        loading={loading}
                        error={error}
                        errMsg={error?.message}
                    />
                </div>
                <div className={`${styles.right} col-md-6`} />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    cartShow: state.cart.cartShow,
    user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
    onToggleCartUI: (bool) => dispatch(actions.toggleCartUI(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
