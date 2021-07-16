import { signup } from 'adapters/firebase';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { StyledSignup } from 'styled/custom/typography';
import SignupForm from '../../components/Form/SignupForm/SignupForm';
import * as actions from '../../store/actions';
import { StyledSignupBg, SignupWrapper } from './styled';

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
        <StyledSignup>
            <SignupWrapper>
                <SignupForm
                    submit={handleSignup}
                    disabled={loading}
                    loading={loading}
                    error={error}
                    errMsg={error?.message}
                    style={{ flex: 1 }}
                />
            </SignupWrapper>
            <StyledSignupBg />
        </StyledSignup>
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
