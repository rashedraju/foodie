import Foods from 'components/Foods/Foods';
import SearchBar from 'components/SearchBar/SearchBar';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from 'store/actions';
import { Section } from 'styled/custom/components';

const Search = (props) => {
    const {
        searchQuery,
        location,
        history,
        onQueryChange,
        onSearchFood,
        cartItems,
        loading,
        foods,
        error,
        onToggleToCart,
    } = props;

    useEffect(() => {
        // redirect if no search query
        if (searchQuery === '') {
            history.replace('./');
        }

        const urlParams = new URLSearchParams(location.search);
        if (urlParams.has('q')) {
            const searchQueryParams = urlParams.get('q');
            if (
                searchQueryParams !== '' &&
                (searchQuery !== searchQueryParams || foods.length === 0)
            ) {
                onQueryChange(searchQueryParams);
                onSearchFood(searchQueryParams, cartItems);
            }
        }
    }, [
        cartItems,
        foods.length,
        history,
        location.search,
        onQueryChange,
        onSearchFood,
        searchQuery,
    ]);

    let searchResult;
    if (foods.length > 0) searchResult = <Foods foods={foods} toggleToCart={onToggleToCart} />;
    if (error) searchResult = <p style={{ textAlign: 'center' }}>Foods not found!</p>;
    if (loading) searchResult = <Foods foods={new Array(10).fill({})} />;

    return (
        <Section>
            <SearchBar center />
            {searchResult}
        </Section>
    );
};

const mapStateToProps = (state) => ({
    searchQuery: state.search.query,
    foods: state.search.foods,
    cartItems: state.cart.cartItems,
    loading: state.search.loader,
    error: state.search.error,
});

const mapDispatchToProps = (dispatch) => ({
    onQueryChange: (value) => dispatch(actions.queryChange(value)),
    onSearchFood: (query, cartItems) => dispatch(actions.searchFood(query, cartItems)),
    onToggleToCart: (isAdded, item) => dispatch(actions.toggleToCart(isAdded, item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
