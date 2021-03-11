import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Foods from '../../components/Foods/Foods';
import Loader from '../../components/UI/Loader/Loader';
import SearchBar from '../../components/UI/SearchBar/SearchBar';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import * as actions from '../../store/actions';

class Search extends PureComponent {
    componentDidMount() {
        const { location, history, onSearchQuery, onSearchFood, cartItems } = this.props;
        const urlParams = new URLSearchParams(location.search);
        if (urlParams.has('q') && urlParams.get('q') !== '') {
            const query = urlParams.get('q');
            onSearchQuery(query);
            onSearchFood(query, cartItems);
        } else {
            history.replace('./');
        }
    }

    render() {
        const { loading, foods, error } = this.props;

        let searchResult;
        if (foods.length > 0) {
            searchResult = <Foods foods={foods} />;
        } else if (loading) {
            searchResult = <Loader />;
        } else if (error) {
            searchResult = <p style={{ textAlign: 'center' }}>!Recipes not found</p>;
        }
        return (
            <Aux>
                <SearchBar center />
                {searchResult}
            </Aux>
        );
    }
}

const mapStateToProps = (state) => ({
    foods: state.search.foods,
    loading: state.search.loader,
    error: state.search.error,
    cartItems: state.cart.foods,
});

const mapDispatchToProps = (dispatch) => ({
    onSearchQuery: (query) => dispatch(actions.searchQuery(query)),
    onSearchFood: (query, cartItems) => dispatch(actions.searchFood(query, cartItems)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
