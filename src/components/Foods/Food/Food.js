import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import styles from './Food.module.scss';

const Food = (props) => {
    const { item } = props;

    return (
        <div className="col-lg-3 col-md-4 col-sm-6">
            <figure className={styles.figure}>
                <picture className={styles.imageWrapper}>
                    <div
                        className={styles.image}
                        style={{ backgroundImage: `url(${item.image})` }}
                    />
                </picture>
                <figcaption>
                    <div className={styles.headline}>{item.title} </div>
                </figcaption>
                <div className="d-flex justify-content-between align-items-center px-2">
                    <strong className="text-primary">${item.newPrice}</strong>

                    <FontAwesomeIcon
                        icon={['fas', 'cart-plus']}
                        className={styles.cartIcon}
                        style={{
                            color: item.isAddedToCart ? '#d60e64' : '#495057',
                            fontSize: '1.2rem',
                        }}
                        onClick={() => props.onToggleToCart(!item.isAddedToCart, item)}
                    />
                </div>
            </figure>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    onToggleToCart: (add, item) => dispatch(actions.toggleToCart(add, item)),
});

export default connect(null, mapDispatchToProps)(Food);
