import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as actions from '../../../store/actions';

const searchBar = (props) => (
    <form
        className="m-2"
        onSubmit={(e) => {
            e.preventDefault();
            props.history.push({
                pathname: '/search',
                search: `?q=${props.query}`,
            });
            props.onFatchSearchFood(props.query, props.cartItems);
        }}
    >
        <div className={`input-group w-100 my-3 w-md-75 w-xl-50 ${props.center && 'mx-auto'}`}>
            <input
                type="text"
                placeholder="Search over million foods"
                className="form-control text-muted outline-none shadow-none"
                onChange={(e) => props.onQueryChange(e.target.value)}
                value={props.query}
            />
            <button
                type="submit"
                className="btn btn-primary input-group-append text-white shadow-none d-flex align-items-center"
            >
                <FontAwesomeIcon icon={['fas', 'search']} size="lg" />
            </button>
        </div>
    </form>
);

const mapStateToProps = (state) => ({
    query: state.search.query,
    cartItems: state.cart.foods,
});

const mapDispatchToProps = (dispatch) => ({
    onQueryChange: (value) => dispatch(actions.searchQuery(value)),
    onFatchSearchFood: (value, cartItems) => dispatch(actions.searchFood(value, cartItems)),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(searchBar));
