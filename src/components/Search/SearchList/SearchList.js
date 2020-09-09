import React from 'react';
import Spinner from '../../UI/Loader/Loader';
import Recipes from '../../Recipes/Recipes';

const searchList = props => {
    let displayResult = null;
    if (props.isLoading) displayResult = <Spinner />;

    // SHOW ERROR IF FAILED TO SEARCH
    if (props.error) displayResult = <p className="text-center">!Recipes Not Found</p>;
    if (!props.isLoading && props.recipes && !props.error) displayResult = <Recipes recipes={props.recipes} />
    return (
        <div>
            {displayResult}
        </div>
    );
}

export default searchList;