import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Recipes from '../Recipes/Recipes';
import Spinner from '../UI/Loader/Loader';

const searchList = props => {
    let displayResults = null;
    if (props.results.length > 0) displayResults = <Recipes recipes={props.results} />;
    if (props.loader) displayResults = <Spinner />;
    if (props.error) displayResults = <p style={{textAlign: 'center'}}>!Recipes not found</p>
    return (
        <Aux>
            {displayResults}
        </Aux>
    )
}

export default searchList;