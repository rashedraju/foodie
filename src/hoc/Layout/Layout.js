import React from 'react';
import { connect } from 'react-redux';
import Cart from '../../components/Cart/Cart';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import * as actions from '../../store/actions';
import Aux from '../Auxiliary/Auxiliary';
import styles from './Layout.module.scss';

const Layout = (props) => {
    const {
        cartShow,
        children,
        onToggleCartUI,
        cartItems,
        onToggleToCart,
        isAuthenticated,
        onLogin,
        onLogout,
        isLoading,
        error,
        errMsg,
        userDisplayName,
        onUpdateItemCount,
        price,
    } = props;

    const layoutStyle = [styles.contentWrapper];
    if (cartShow) {
        layoutStyle.push(styles.moveLeft);
        document.body.classList.add(styles.bodyOverflow);
    } else {
        document.body.classList.remove(styles.bodyOverflow);
    }

    return (
        <Aux>
            <Header
                isAuthenticated={isAuthenticated}
                onLogin={onLogin}
                onLogout={onLogout}
                isLoading={isLoading}
                error={error}
                errMsg={errMsg}
                userDisplayName={userDisplayName}
                cartShow={cartShow}
                cartItemCount={cartItems.length}
                onToggleCartUI={onToggleCartUI}
            />
            <Cart
                cartShow={cartShow}
                cartItems={cartItems}
                toggleCartUI={() => onToggleCartUI(!cartShow)}
                toggleToCart={onToggleToCart}
                updateCount={onUpdateItemCount}
                price={price}
            />
            <main className={layoutStyle.join(' ')}>{children}</main>
            <Footer />
        </Aux>
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.authStatus.isAuthenticated,
    isLoading: state.auth.authStatus.loading,
    error: state.auth.authStatus.error,
    errMsg: state.auth.authStatus.msg,
    cartShow: state.cart.cartShow,
    price: state.cart.price,
    cartItems: state.cart.cartItems,
    userDisplayName: state.auth.logedUser.displayName,
});

const mapDispatchToProps = (dispatch) => ({
    onToggleCartUI: (bool) => dispatch(actions.toggleCartUI(bool)),
    onToggleToCart: (add, item) => dispatch(actions.toggleToCart(add, item)),
    onLogin: (values) => dispatch(actions.login(values)),
    onLogout: () => dispatch(actions.logout()),
    onUpdateItemCount: (id, identifier) => dispatch(actions.updateItemCount(id, identifier)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
