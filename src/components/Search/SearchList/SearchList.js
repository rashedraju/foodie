import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import SearchRecipes from '../../Recipes/Recipes';

const searchList = props => (
    <Aux>
        <div>{props.searchBar}</div>
        <SearchRecipes
            recipes={props.recipes}
            controlCart={props.controlCart} />
    </Aux>
);

export default searchList;