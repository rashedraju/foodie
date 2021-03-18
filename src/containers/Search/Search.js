import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Foods from '../../components/Foods/Foods';
import Loader from '../../components/UI/Loader/Loader';
import SearchBar from '../../components/UI/SearchBar/SearchBar';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import * as actions from '../../store/actions';

class Search extends PureComponent {
    constructor(props) {
        super(props);
        this.onToggleToCart = props.onToggleToCart;
    }

    componentDidMount() {
        const { location, history, onQueryChange, onSearchFood, cartItems } = this.props;
        const urlParams = new URLSearchParams(location.search);
        if (urlParams.has('q') && urlParams.get('q') !== '') {
            const query = urlParams.get('q');
            onQueryChange(query);
            onSearchFood(query, cartItems);
        } else {
            history.replace('./');
        }
    }

    handleToggleCartItem = (isAddedToCart, item) => {
        this.onToggleToCart(isAddedToCart, item);
    };

    render() {
        const { loading, foods, error, query, onQueryChange, onSearchFood } = this.props;

        let searchResult;
        if (foods.length > 0) {
            searchResult = <Foods foods={foods} toggleToCart={this.handleToggleCartItem} />;
        } else if (loading) {
            searchResult = <Loader />;
        } else if (error) {
            searchResult = <p style={{ textAlign: 'center' }}>!Recipes not found</p>;
        }
        return (
            <Aux>
                <SearchBar
                    center
                    query={query}
                    queryChange={onQueryChange}
                    searchFood={onSearchFood}
                />
                {searchResult}
            </Aux>
        );
    }
}

const mapStateToProps = (state) => ({
    query: state.search.query,
    foods: state.search.foods,
    loading: state.search.loader,
    error: state.search.error,
    cartItems: state.cart.foods,
});

const mapDispatchToProps = (dispatch) => ({
    onQueryChange: (value) => dispatch(actions.queryChange(value)),
    onSearchFood: (query) => dispatch(actions.searchFood(query)),
    onToggleToCart: (isAdded, item) => dispatch(actions.toggleToCart(isAdded, item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
