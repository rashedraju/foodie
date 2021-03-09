import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import styles from './Recipe.module.scss';

const Recipe = (props) => {
    const recipeItem = props.recipes.map((el) => {
        const { recipe } = el;
        return (
            <div className="col-sm-6 col-md-4 mb-2" key={recipe.id}>
                <div className="card overflow-hidden">
                    <img
                        className={`${styles.image} card-img img-fluid`}
                        src={recipe.image}
                        alt={recipe.label}
                    />
                    <div className="card-body p-0 p-1">
                        <h5 className="card-title text-dark mb-0">{recipe.label}</h5>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <Button
                            className="btn btn-primary btn-sm"
                            onClick={() => props.onAddToCart(el)}
                        >
                            {el.addedToCart ? 'Added' : 'Add to cart'}
                        </Button>
                        <div>
                            <strong className="text-primary">${el.newPrice}</strong>
                            <strike className="text-muted ml-1">
                                <small>{el.oldPrice}</small>
                            </strike>
                        </div>
                    </div>
                </div>
            </div>
        );
    });
    return recipeItem;
};

const mapDispatchToProps = (dispatch) => ({
    onAddToCart: (food) => dispatch(actions.addToCart(food)),
});

export default connect(null, mapDispatchToProps)(Recipe);
