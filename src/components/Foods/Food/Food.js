import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import styles from './Food.module.scss';

const Food = (props) => {
    const { item } = props;

    return (
        <div className="col-sm-6 col-md-4 mb-2">
            <div className="card overflow-hidden">
                <img
                    className={`${styles.image} card-img img-fluid`}
                    src={item.image}
                    alt={item.title}
                />
                <div className="card-body p-0 p-1">
                    <h5 className="card-title text-dark mb-0">{item.title}</h5>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <Button
                        className="btn btn-primary btn-sm"
                        // onClick={() => props.onAddToCart(el)}
                    >
                        {/* {el.addedToCart ? 'Added' : 'Add to cart'} */}
                        Add to cart
                    </Button>
                    <div>
                        <strong className="text-primary">${item.newPrice}</strong>
                        <strike className="text-muted ml-1">
                            <small>{item.oldPrice}</small>
                        </strike>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    onAddToCart: (food) => dispatch(actions.addToCart(food)),
});

export default connect(null, mapDispatchToProps)(Food);
