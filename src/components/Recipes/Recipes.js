import React from 'react';
import Recipe from './Recipe/Recipe';

const recipes = (props) => {
    const recipe = props.recipes && <Recipe recipes={props.recipes} />;
    return (
        <section className="recipes p-1 p-md-4">
            <div className="container">
                <div className="row">{recipe}</div>
            </div>
        </section>
    );
};

export default recipes;
