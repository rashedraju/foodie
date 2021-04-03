import React from 'react';
import { connect } from 'react-redux';
import styles from './Layout.module.scss';

const Layout = (props) => {
    const { cartShow, children } = props;

    const layoutStyle = [styles.contentWrapper];
    if (cartShow) {
        layoutStyle.push(styles.moveLeft);
        document.body.classList.add(styles.bodyOverflow);
    } else {
        document.body.classList.remove(styles.bodyOverflow);
    }

    return <main className={layoutStyle.join(' ')}>{children}</main>;
};

const mapStateToProps = (state) => ({
    cartShow: state.cart.cartShow,
});

export default connect(mapStateToProps)(Layout);
