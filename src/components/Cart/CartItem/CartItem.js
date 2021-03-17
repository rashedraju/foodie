import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import styles from './CartItem.module.scss';

const CartItem = (props) => {
    const { items, onRemoveFromCart } = props;
    if (items.length) {
        return items.map((item) => (
            <div className="row p-2 mx-0 border" key={item.id}>
                <div
                    className={`${styles.header} col-sm-6 d-flex justify-content-start align-items-center`}
                >
                    <button
                        type="button"
                        className={`${styles.ditemete} btn btn-light bg-white align-sitemf-center`}
                        title="remove"
                        onClick={() => onRemoveFromCart(false, item)}
                    >
                        &times;
                    </button>
                    <img src={item.image} alt={item.alt} className="img-fluid m-1 w-25" />
                    <h4 className={`${styles.title} ml-2`}>{item.title}</h4>
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
                    <h2 className="text-primary ml-auto">${item.newPrice}</h2>
                </div>
            </div>
        ));
    }
    return <p className="text-center my-2"> Start adding items to your cart </p>;
};

const mapDispatchToProps = (dispatch) => ({
    onRemoveFromCart: (add, item) => dispatch(actions.toggleToCart(add, item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
