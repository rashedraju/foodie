import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import axios from 'axios';
import SearchList from './SearchList/SearchList';
import Aux from '../../hoc/Auxiliary/Auxiliary';

const API_ID = 'da74e8ed';
const API_KEY = 'ed17032dee115bf17bfeb5bb5aea6381';

class Search extends Component {
    state = {
        searchResults: null,
        query: '',
        loader: false,
        error: false,
    }

    /** HANDLE SEARCH
     *      *GET SEARCH QUERY
     *      *REQUEST DATA
     *      *UPDATE STATE
     *      *AFTER UPDATE COMPONENT WILL RERENDER
     *      *IF FAILED TO SEARCH SHOW ERROR
     */

    seachControls = e => {
        e.preventDefault();
        const query = this.state.query.toLowerCase();
        if (query !== '') {
            this.setState({ loader: true })

            axios.get(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=30`).then(response => {
                const data = response.data.hits;
                const updatedRecipes = data.map((recipe, i) => {
                    return {
                        ...recipe,
                        price: Math.floor(Math.random() * (20 - 10)) + 10,
                        addToCart: false
                    }
                })
                this.setState({ searchResults: updatedRecipes, loader: false });
            }).catch(err => {
                this.setState({ error: true, loader: false });
            })
        }
    }

    render() {

        return (
            <Aux>
                <div className="row mx-0 py-2" style={{ "width": "100%", "height": "2rem" }}>
                    <div className="col-md-6 m-auto">
                        <form onSubmit={this.seachControls}>
                            <div className="input-group" style={{ "marginTop": "-7.5rem" }}>
                                <input type="text" placeholder="Search over million recipes" className="form-control text-muted search__field" onChange={(e) => this.setState({ query: e.target.value })}></input>
                                
                                <button type="submit" className="btn btn-primary input-group-append text-white">Search</button>
                            </div>
                        </form>
                        
                    </div>
                </div>
                <SearchList isLoading={this.state.loader} recipes={this.state.searchResults} error={this.state.error} />
            </Aux>
        );
    }
}
export default withRouter(Search);
