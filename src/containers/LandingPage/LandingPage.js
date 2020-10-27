import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Header from '../../components/Header/Header';
import Recipes from '../../components/Recipes/Recipes';
import Home from '../../components/Home/Home';

class Goodie extends Component {
    state = {
        auth: true,
        recipes: [],
        error: false
    }

    // FATCH RECIPES 
    componentDidMount() {
        axios.get('https://goodie4foods.firebaseio.com/recipes.json').then(response => {
            const data = response.data;

            // ADD RECIPE INFO
            const updatedRecipes = data.map((recipe, i) => {
                return {
                    ...recipe,
                    price: Math.floor(Math.random() * (20 - 10)) + 10,
                    addToCart: false
                }
            })

            // UPDATE STATE
            this.setState({ recipes: updatedRecipes });
        }).catch(error => {
            this.setState({ error: true });
        })
    }

    render() {
        let redirect = this.props.redirect ? <Redirect to='/search' /> : null;
        return (
            <Aux>
                {redirect}
                <Header />
                <Recipes
                    recipes={this.state.recipes} />
                <Home />
            </Aux>
        );
    }
}
const mapStateToProps = state => {
    return {
        redirect: state.search.redirect
    }
}

export default connect(mapStateToProps)(Goodie);