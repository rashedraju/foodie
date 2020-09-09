import React from 'react';

import './Recipe.scss';
import Button from '../../../components/UI/Button/Button';

const recipe = props => {
    let recipeItem = props.recipes.map((el, i) => {
        const recipe = el.recipe;
        return (
            <div className="col-sm-6 col-md-4 mb-2" key={i}>
                <div className="card">
                    <img className="card-img img-fluid" src={recipe.image} alt={recipe.label} />
                    <div className="card-body p-0 p-1">
                        <h5 className="card-title text-dark mb-0">{recipe.label}</h5>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <Button cls="btn btn-primary btn-sm"
                            title='Add to cart' />
                        <div>
                            <strong className="text-primary">${el.price - 5}</strong>
                            <strike className="text-muted ml-1"><small>{el.price}</small></strike>
                        </div>
                    </div>
                </div>
            </div>
        );
    });
    return (recipeItem);
}

export default recipe;