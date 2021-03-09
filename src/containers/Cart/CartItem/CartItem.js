import React from 'react';
import styles from './CartItem.module.scss';

const CartItem = (props) => {
    const { items } = props;
    if (items.length) {
        return items.map((el) => (
            <div className="row p-2 mx-0 border" key={el.id}>
                <div
                    className={`${styles.header} col-sm-6 d-flex justify-content-start align-items-center`}
                >
                    <button
                        type="button"
                        className={`${styles.delete} btn btn-light bg-white align-self-center`}
                        title="remove"
                    >
                        &times;
                    </button>
                    <img src={el.recipe.image} alt={el.alt} className="img-fluid m-1 w-25" />
                    <h4 className={`${styles.title} ml-2`}>{el.recipe.label}</h4>
                </div>
                <div className="col-sm-6 d-flex justify-content-around align-items-center">
                    <div>
                        <button type="button" className="btn btn-light btn-sm" title="less">
                            {' '}
                            -{' '}
                        </button>
                        <strong className="mx-2">1</strong>
                        <button type="button" className="btn btn-light btn-sm" title="more">
                            {' '}
                            +{' '}
                        </button>
                    </div>
                    <h2 className="text-primary ml-auto">${el.newPrice}</h2>
                </div>
            </div>
        ));
    }
    return <p className="text-center my-2"> Start adding items to your cart </p>;
};

export default CartItem;
