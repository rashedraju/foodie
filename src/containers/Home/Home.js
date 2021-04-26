import Foods from 'components/Foods/Foods';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from 'store/actions';
import Feature from 'views/Feature/Feature';
import Hero from 'views/Hero/Hero';
import OurApp from 'views/OurApp/OurApp';
import Partner from 'views/Partner/Partner';
import SocialMedia from 'views/SocialMedia/SocialMedia';

const Home = (props) => {
    const {
        foods,
        onAuthRedirectPath,
        onToggleToCart,
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
        <>
            <Hero queryChange={onQueryChange} />
            <Foods
                foods={foods.length > 0 ? foods : new Array(6).fill({})}
                toggleToCart={onToggleToCart}
            />
            <Feature />
            <OurApp />
            <Partner />
            <SocialMedia />
        </>
    );
};
const mapStateToProps = (state) => ({
    foods: state.home.foods,
    query: state.search.query,
    cartItems: state.cart.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
    onAuthRedirectPath: (path) => dispatch(actions.authRedirectPath(path)),
    onToggleToCart: (isAdded, item) => dispatch(actions.toggleToCart(isAdded, item)),
    onQueryChange: (value) => dispatch(actions.queryChange(value)),
    onGetInitialFoods: (cartItems) => dispatch(actions.getInitailFood(cartItems)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
