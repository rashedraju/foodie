import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Feature from '../../components/Feature/Feature';
import Foods from '../../components/Foods/Foods';
import Hero from '../../components/Hero/Hero';
import OurApp from '../../components/OurApp/OurApp';
import Partner from '../../components/Partner/Partner';
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import * as actions from '../../store/actions';

const Home = (props) => {
    const { onAuthRedirectPath, foods, onGetInitialFoods, cartItems } = props;
    useEffect(() => {
        // set auth redirect path
        onAuthRedirectPath('/');

        // fetch foods
        if (!foods.length > 0) {
            onGetInitialFoods(cartItems);
        }
    }, [cartItems, foods.length, onAuthRedirectPath, onGetInitialFoods]);

    return (
        <Aux>
            <Hero />
            <Foods foods={foods} />
            <Feature />
            <OurApp />
            <Partner />
            <SocialMedia />
        </Aux>
    );
};
const mapStateToProps = (state) => ({
    redirect: state.search.redirect,
    foods: state.home.foods,
    cartItems: state.cart.foods,
});

const mapDispatchToProps = (dispatch) => ({
    onGetInitialFoods: () => dispatch(actions.getInitailFood()),
    onAuthRedirectPath: (path) => dispatch(actions.autRedirectPath(path)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
