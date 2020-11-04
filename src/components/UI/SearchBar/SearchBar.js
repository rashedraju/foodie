import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

const searchBar = (props) => {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                props.history.push({
                    pathname: '/search',
                    search: '?q=' + props.query,
                })
                props.onFatchSearchFood(props.query, props.cartItems);
            }}
        >
            <div className="input-group w-100 p-2 w-min-md mx-auto px-sm-4">
                <input
                    type="text"
                    placeholder="Search over million foods"
                    className="form-control text-muted search__field outline-none"
                    onChange={(e) => props.onQueryChange(e.target.value)}
                    value={props.query}
                ></input>
                <button
                    type="submit"
                    className="btn btn-primary input-group-append text-white"
                >
                    Search
                </button>
            </div>
        </form>
    );
};

const mapStateToProps = (state) => {
    return {
        query: state.search.query,
        cartItems: state.cart.foods,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onQueryChange: (value) => dispatch(actions.searchQuery(value)),
        onFatchSearchFood: (value, cartItems) =>
            dispatch(actions.searchFood(value, cartItems)),
    };
};
export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(searchBar)
);
