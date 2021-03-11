import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../../store/actions';

const searchBar = (props) => (
    <Row>
        <Col xl={6} sm={8} className={props.center && 'mx-auto'}>
            <Form
                className="m-2"
                onSubmit={(e) => {
                    e.preventDefault();
                    props.history.push({
                        pathname: '/search',
                        search: `?q=${props.query}`,
                    });
                    props.onFatchSearchFood(props.query, props.cartItems);
                }}
            >
                <InputGroup className="mb-3">
                    <FormControl
                        type="text"
                        placeholder="Search over million foods"
                        className="text-muted outline-none shadow-none"
                        onChange={(e) => props.onQueryChange(e.target.value)}
                        value={props.query}
                    />
                    <InputGroup.Append>
                        <Button
                            type="submit"
                            variant="primary"
                            className="text-white shadow-none d-flex align-items-center"
                        >
                            <FontAwesomeIcon icon={['fas', 'search']} size="lg" />
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>
        </Col>
    </Row>
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
