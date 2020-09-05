import React from 'react';

import Recipe from './Recipe/Recipe';

const recipes = props => {
    const cardHandler = (id) => {
        const recipeIndex = props.recipes.findIndex((el) => el.id === id);
        props.recipes[recipeIndex].addToCart = true;
    }
    let recipe = props.recipes ? <Recipe recipes={props.recipes} cardHandler={cardHandler} /> : null;
    return (
        <section className="recipes p-1 p-md-4">
            <div className="container">
                <div className="row">
                    {recipe}
                </div>
            </div>
        </section>
    )
}

export default recipes;