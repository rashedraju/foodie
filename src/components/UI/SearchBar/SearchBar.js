import React from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../../store/actions';
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
            props.onFatchSearchFood(props.query, props.cartItems);
        }}
    >
        <InputGroup>
            <FormControl
                type="text"
                placeholder="Search over million foods"
                className="text-muted outline-none shadow-none p-sm-4"
                onChange={(e) => props.onQueryChange(e.target.value)}
                value={props.query}
            />
            <InputGroup.Append>
                <Button
                    type="submit"
                    variant="primary"
                    className="text-white shadow-none d-flex align-items-center font-weight-bold"
                >
                    SEARCH
                    {/* <FontAwesomeIcon icon={['fas', 'search']} size="lg" /> */}
                </Button>
            </InputGroup.Append>
        </InputGroup>
    </Form>
);

const mapStateToProps = (state) => ({
    query: state.search.query,
    cartItems: state.cart.foods,
});

const mapDispatchToProps = (dispatch) => ({
    onQueryChange: (value) => dispatch(actions.searchQuery(value)),
    onFatchSearchFood: (value, cartItems) => dispatch(actions.searchFood(value, cartItems)),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(searchBar));
