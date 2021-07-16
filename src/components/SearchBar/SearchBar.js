import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { StyledSearchBar, InputBox } from './styled';
import Button from '../UI/Button/Button';

const SearchBar = (props) => {
    const { center } = props;
    const searchQueryRef = useRef();
    const history = useHistory();

    const searchHandler = (e) => {
        e.preventDefault();
        const query = searchQueryRef.current.value;
        if (query !== '') {
            // queryChange(query);
            history.push({
                pathname: '/search',
                search: `?q=${query}`,
            });
        }
    };

    return (
        <StyledSearchBar iscenter={center ? 'true' : 'false'} onSubmit={searchHandler}>
            <InputBox placeholder="Search over million foods" ref={searchQueryRef} />
            <Button onClick={searchHandler}>SEARCH</Button>
        </StyledSearchBar>
    );
};

export default SearchBar;
