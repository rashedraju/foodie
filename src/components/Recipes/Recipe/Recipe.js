import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../../../store/actions';

import './Recipe.scss';
import Button from '../../../components/UI/Button/Button';

const recipe = props => {
    let recipeItem = props.recipes.map((el, index) => {
        const recipe = el.recipe;
        return (
            <div className="col-sm-6 col-md-4 mb-2" key={index}>
                <div className="card">
                    <img className="card-img img-fluid" src={recipe.image} alt={recipe.label} />
                    <div className="card-body p-0 p-1">
                        <h5 className="card-title text-dark mb-0">{recipe.label}</h5>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <Button cls="btn btn-primary btn-sm"
                            title={el.addedToCart ? 'Added' : 'Add to cart'}
                            clicked={() => props.onAddToCart(el)} />
                        <div>
                            <strong className="text-primary">${el.newPrice}</strong>
                            <strike className="text-muted ml-1"><small>{el.oldPrice}</small></strike>
                        </div>
                    </div>
                </div>
            </div>
        );
    });
    return (recipeItem);
}

const mapDispatchToProps = dispatch => {
    return {
        onAddToCart: (food) => dispatch(actions.addToCart(food)) 
    }
}

export default connect(null, mapDispatchToProps)(recipe);