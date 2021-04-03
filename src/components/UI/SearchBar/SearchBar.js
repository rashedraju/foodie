import React, { useRef } from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import styles from './SearchBar.module.scss';

const SearchBar = (props) => {
    const { queryChange, center } = props;
    const searchQueryRef = useRef();
    const history = useHistory();

    const searchHandler = (e) => {
        e.preventDefault();
        const query = searchQueryRef.current.value;
        queryChange(query);
        history.push({
            pathname: '/search',
            search: `?q=${query}`,
        });
    };

    return (
        <Form className={`${styles.SearchBar} ${center && styles.center}`} onSubmit={searchHandler}>
            <InputGroup>
                <FormControl
                    type="text"
                    placeholder="Search over million foods"
                    className="text-muted outline-none shadow-none p-sm-4"
                    ref={searchQueryRef}
                />
                <InputGroup.Append>
                    <Button
                        type="submit"
                        variant="primary"
                        className="text-white shadow-none d-flex align-items-center font-weight-bold"
                    >
                        SEARCH
                    </Button>
                </InputGroup.Append>
            </InputGroup>
        </Form>
    );
};

export default SearchBar;
