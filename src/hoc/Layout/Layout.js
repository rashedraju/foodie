import React from 'react';
import { connect } from 'react-redux';
import Cart from '../../components/Cart/Cart';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Aux from '../Auxiliary/Auxiliary';
import styles from './Layout.module.scss';

const layout = (props) => {
    const { cartShow, children } = props;

    const layoutStyle = [styles.contentWrapper];
    if (cartShow) layoutStyle.push(styles.moveLeft);

    return (
        <Aux>
            <Header />
            <Cart />
            <main className={layoutStyle.join(' ')}>{children}</main>
            <Footer />
        </Aux>
    );
};

const mapStateToProps = (state) => ({
    cartShow: state.cart.cartShow,
});

export default connect(mapStateToProps)(layout);
