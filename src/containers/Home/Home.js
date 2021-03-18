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
        onAuthRedirectPath,
        foods,
        onGetInitialFoods,
        cartItems,
        onToggleToCart,
        query,
        onQueryChange,
        onSearchFood,
    } = props;

    const handleToggleCartItem = (isAddedToCart, item) => {
        onToggleToCart(isAddedToCart, item);
    };
    useEffect(() => {
        // set auth redirect path
        onAuthRedirectPath('/');

        // fetch foods
        if (!foods.length > 0) {
            onGetInitialFoods(cartItems);
        }
    }, [onAuthRedirectPath, cartItems, foods, onGetInitialFoods]);

    return (
        <Aux>
            <Hero query={query} queryChange={onQueryChange} searchFood={onSearchFood} />
            <Foods foods={foods} toggleToCart={handleToggleCartItem} />
            <Feature />
            <OurApp />
            <Partner />
            <SocialMedia />
        </Aux>
    );
};
const mapStateToProps = (state) => ({
    query: state.search.query,
    redirect: state.search.redirect,
    foods: state.home.foods,
    cartItems: state.cart.foods,
});

const mapDispatchToProps = (dispatch) => ({
    onGetInitialFoods: () => dispatch(actions.getInitailFood()),
    onAuthRedirectPath: (path) => dispatch(actions.autRedirectPath(path)),
    onToggleToCart: (isAdded, item) => dispatch(actions.toggleToCart(isAdded, item)),
    onQueryChange: (value) => dispatch(actions.queryChange(value)),
    onSearchFood: (query) => dispatch(actions.searchFood(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
