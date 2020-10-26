import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../../store/actions';

const search = (props) => {
    return (
        <div className="input-group w-100 px-2 w-min-md mx-auto px-sm-4">
            <input
                type="text"
                placeholder="Search over million recipes"
                className="form-control text-muted search__field"
                onChange={(e) => this.props.onQueryChange(e.target.value)}
            ></input>

            <button
                type="button"
                className="btn btn-primary input-group-append text-white"
                onClick={props.clicked}
            >
                Search
            </button>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        onQueryChange: (value) => dispatch(actions.searchQuery(value))
    }
}
export default connect(null, mapDispatchToProps)(search);
