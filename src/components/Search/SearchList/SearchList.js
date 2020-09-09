import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Recipes from '../../Recipes/Recipes';
import Spinner from '../../UI/Loader/Loader';

const searchList = props => {
    let displayResults = null
    if (props.isLoading) displayResults = <Spinner />;
    if (props.recipes) displayResults = <Recipes recipes={props.recipes} />;
    if (props.error) displayResults = <p>!Recipes not found</p>
    return (
        <Aux>
            {displayResults}
        </Aux>
    )
}

export default searchList;