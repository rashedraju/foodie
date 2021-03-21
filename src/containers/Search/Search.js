import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Foods from '../../components/Foods/Foods';
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
        const { loading, foods, error, query, onQueryChange } = this.props;

        let searchResult;
        if (foods.length > 0) {
            searchResult = <Foods foods={foods} toggleToCart={this.handleToggleCartItem} />;
        } else if (loading) {
            searchResult = <Foods foods={new Array(10).fill({})} />;
        } else if (error) {
            searchResult = <p style={{ textAlign: 'center' }}>Foods not found!</p>;
        }
        return (
            <Aux>
                <SearchBar center query={query} queryChange={onQueryChange} />
                {searchResult}
            </Aux>
        );
    }
}

const mapStateToProps = (state) => ({
    query: state.search.query,
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
