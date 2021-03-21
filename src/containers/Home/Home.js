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
    const {
        foods,
        onAuthRedirectPath,
        onToggleToCart,
        query,
        onQueryChange,
        cartItems,
        onGetInitialFoods,
    } = props;

    useEffect(() => {
        // set auth redirect path
        onAuthRedirectPath('/');

        // fetch initial foods
        if (!foods.length > 0) {
            onGetInitialFoods(cartItems);
        }
    }, [cartItems, foods.length, onAuthRedirectPath, onGetInitialFoods]);

    return (
        <Aux>
            <Hero query={query} queryChange={onQueryChange} />
            <Foods
                foods={foods.length > 0 ? foods : new Array(6).fill({})}
                toggleToCart={onToggleToCart}
            />
            <Feature />
            <OurApp />
            <Partner />
            <SocialMedia />
        </Aux>
    );
};
const mapStateToProps = (state) => ({
    foods: state.home.foods,
    query: state.search.query,
    redirect: state.search.redirect,
    cartItems: state.cart.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
    onAuthRedirectPath: (path) => dispatch(actions.autRedirectPath(path)),
    onToggleToCart: (isAdded, item) => dispatch(actions.toggleToCart(isAdded, item)),
    onQueryChange: (value) => dispatch(actions.queryChange(value)),
    onGetInitialFoods: (cartItems) => dispatch(actions.getInitailFood(cartItems)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
