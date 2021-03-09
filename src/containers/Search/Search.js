import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import SearchList from '../../components/SearchList/SearchList';
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
        const { loader, results, error } = this.props;
        return (
            <Aux>
                <SearchBar center />
                <SearchList loader={loader} results={results} error={error} />
            </Aux>
        );
    }
}

const mapStateToProps = (state) => ({
    results: state.search.foods,
    loader: state.search.loader,
    error: state.search.error,
    cartItems: state.cart.foods,
});

const mapDispatchToProps = (dispatch) => ({
    onSearchQuery: (query) => dispatch(actions.searchQuery(query)),
    onSearchFood: (query, cartItems) => dispatch(actions.searchFood(query, cartItems)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
