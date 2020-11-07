import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import SearchBar from '../../components/UI/SearchBar/SearchBar';
import SearchList from '../../components/SearchList/SearchList';

class Search extends Component {
    render () {
        return (
            <Aux>
                <SearchBar />
                <SearchList loader={this.props.loader} results={this.props.results} error={this.props.error} />
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        query: state.search.query,
        results: state.search.foods,
        loader: state.search.loader,
        error: state.search.error
    }
}

export default connect(mapStateToProps) (Search);