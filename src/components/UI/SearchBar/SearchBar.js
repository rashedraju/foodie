import React from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import styles from './SearchBar.module.scss';

const searchBar = (props) => (
    <Form
        className={`${styles.SearchBar} ${props.center && styles.center}`}
        onSubmit={(e) => {
            e.preventDefault();
            props.history.push({
                pathname: '/search',
                search: `?q=${props.query}`,
            });
        }}
    >
        <InputGroup>
            <FormControl
                type="text"
                placeholder="Search over million foods"
                className="text-muted outline-none shadow-none p-sm-4"
                onChange={(e) => props.queryChange(e.target.value)}
                value={props.query}
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

export default withRouter(searchBar);
