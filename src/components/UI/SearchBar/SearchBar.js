import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

const searchBar = (props) => {
    return (
        <div className="input-group w-100 p-2 w-min-md mx-auto px-sm-4">
            <input
                type="text"
                placeholder="Search over million recipes"
                className="form-control text-muted search__field"
                onChange={(e) => props.onQueryChange(e.target.value)}
                value={props.query}
            ></input>

            <button
                type="button"
                className="btn btn-primary input-group-append text-white"
                onClick={() => props.onFatchSearchFood(props.query)}
            >
                Search
            </button>
        </div>
    );
};


const mapStateToProps = state => {
    return {
        query: state.search.query
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onQueryChange: (value) => dispatch(actions.searchQuery(value)),
        onFatchSearchFood: (value) => dispatch(actions.searchFood(value))
    };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(searchBar));
