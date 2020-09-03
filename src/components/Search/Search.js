import React, { Component } from 'react';

import axios from 'axios';
import SearchBar from '../UI/SearchBar/SearchBar';
import Recipes from '../../components/Recipes/Recipes';
import Spinner from '../UI/Loader/Loader';
import Feature from '../Home/Feature/Feature';
import Aux from '../../hoc/Auxiliary/Auxiliary';

const API_ID = 'da74e8ed';
const API_KEY = 'ed17032dee115bf17bfeb5bb5aea6381';

class Search extends Component {
    state = {
        recipes: null,
        query: '',
        loader: false,
        redirect: false,
        error: false,
    }

    /** HANDLE SEARCH
     *      *GET SEARCH QUERY
     *      *REQUEST DATA
     *      *UPDATE STATE
     *      *AFTER UPDATE COMPONENT WILL RERENDER
     *      *IF FAILED TO SEARCH SHOW ERROR
     */

    searchHandler = (val) => {
        this.setState({ query: val })
        const query = val.toLowerCase();
        if (query !== '') {
            this.setState({ loader: true });
            axios.get(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=30`).then(response => {
                const data = response.data.hits;
                const updatedRecipes = data.map((recipe, i) => {
                    return {
                        ...recipe,
                        price: Math.floor(Math.random() * (20 - 10)) + 10,
                        addToCart: false
                    }
                })
                this.setState({ recipes: updatedRecipes, loader: false })
            }).catch(err => {
                this.setState({ error: true, loader: false });
            })
        }
    }

    render() {
        let searchRecipes = null;

        // DISPLAY SPINNER WHILE SEARCH ENDED 
        let loader = this.state.loader ? <Spinner /> : null;

        // RENDER RECIPES 
        if (this.state.recipes) searchRecipes = <Recipes recipes={this.state.recipes} />;

        // SHOW ERROR IF FAILED TO SEARCH
        if (this.state.error) searchRecipes = <p className="text-center">!Recipes Not Found</p>;

        return (
            <Aux>
                <div className="d-block mb-3">
                    <SearchBar clicked={this.searchHandler} />
                    {loader}
                    {searchRecipes}
                </div>
                <Feature />
            </Aux>

        );
    }
}
export default Search;