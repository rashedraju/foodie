import Foods from 'components/Foods/Foods';
import Hero from 'components/UI/Hero/Hero';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from 'store/actions';

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
        onAuthRedirectPath('/');
    }, [onAuthRedirectPath]);

    useEffect(() => {
        // fetch initial foods
        if (foods.length <= 0) {
            onGetInitialFoods(cartItems);
        }
    }, [cartItems, foods.length, onGetInitialFoods]);

    return (
        <>
            <Hero queryChange={onQueryChange} />
            <Foods
                foods={foods.length > 0 ? foods : new Array(8).fill({})}
                toggleToCart={onToggleToCart}
            />
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
