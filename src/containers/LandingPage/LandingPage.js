import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Hero from '../../components/Hero/Hero';
import Home from '../../components/Home/Home';
import Recipes from '../../components/Recipes/Recipes';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import * as actions from '../../store/actions';

const Goodie = (props) => {
    const { onAuthRedirectPath, foods, onGetInitialFoods, cartItems } = props;
    useEffect(() => {
        // set auth redirect path
        onAuthRedirectPath('/');

        // fetch foods
        // if (!foods.length > 0) {
        //     onGetInitialFoods(cartItems);
        // }
    }, [cartItems, foods.length, onAuthRedirectPath, onGetInitialFoods]);

    return (
        <Aux>
            <Hero />
            <Recipes recipes={foods} />
            <Home />
        </Aux>
    );
};
const mapStateToProps = (state) => ({
    redirect: state.search.redirect,
    foods: state.landingPage.foods,
    cartItems: state.cart.foods,
});

const mapDispatchToProps = (dispatch) => ({
    onGetInitialFoods: (cartItems) => dispatch(actions.getInitailFood(cartItems)),
    onAuthRedirectPath: (path) => dispatch(actions.autRedirectPath(path)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Goodie);
