import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Header from '../../components/Header/Header';
import Recipes from '../../components/Recipes/Recipes';
import Home from '../../components/Home/Home';

class Goodie extends Component {
    // FETCH RECIPES 
    componentDidMount() {
        if (!this.props.foods.length > 0) {
            this.props.onGetInitialFoods(this.props.cartItems);
        }
        
    }
    state = {
        
    }
    render() {
        return (
            <Aux>
                <Header />
                <Recipes
                    recipes={this.props.foods} />
                <Home />
            </Aux>
        );
    }
}
const mapStateToProps = state => {
    return {
        redirect: state.search.redirect,
        foods: state.landingPage.foods,
        cartItems: state.cart.foods
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetInitialFoods: (cartItems) => dispatch(actions.getInitailFood(cartItems)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Goodie);