import { login, logout } from 'adapters/firebase';
import Cart from 'components/Cart/Cart';
import LoginForm from 'components/Form/LoginForm/LoginForm';
import LogoutConfirmDialog from 'components/LogoutConfirmDialog/LogoutConfirmDialog';
import Logo from 'components/UI/Logo/Logo';
import Modal from 'components/UI/Modal/Modal';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as actions from 'store/actions';
import HeaderNav from './HeaderNav/HeaderNav';

const Header = (props) => {
    const {
        cartShow,
        onToggleCartUI,
        cartItems,
        onToggleToCart,
        onUpdateItemCount,
        price,
        user,
    } = props;

    const [showModal, setShowModal] = useState(false);
    const [scroll, setScroll] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    // Handle modal visibility
    const handleModalShow = () => setShowModal(true);
    const handleModalClose = () => setShowModal(false);

    useEffect(() => {
        // Set scroll when scrolling
        window.addEventListener('scroll', () => setScroll(window.scrollY > 1));
    }, []);

    // Handle user login
    const loginHandler = ({ email, password }) => {
        setLoading(true);
        login(email, password)
            .then(() => {
                setLoading(false);
                setError(null);
                handleModalClose();
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    };

    // Handle user logout
    const logoutHandler = () => {
        setLoading(true);
        logout()
            .then(() => {
                setLoading(false);
                setError(null);
                handleModalClose();
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    };

    /**
     * Modal content = loginform if user not authenticated
     * Modal content = logutfrom if user authenticated
     */

    let modalContent = null;
    if (!user.isAuthenticated && showModal)
        modalContent = (
            <LoginForm
                isAuthenticated={user.isAuthenticated}
                onLogin={loginHandler}
                closeLoginModal={handleModalClose}
                isLoading={loading}
                error={error}
            />
        );

    if (user.isAuthenticated && showModal)
        modalContent = (
            <LogoutConfirmDialog
                error={error}
                loading={loading}
                modalClose={handleModalClose}
                logout={logoutHandler}
            />
        );

    return (
        <header
            className={`sticky-top py-2 px-4 bg-white d-flex justify-content-between ${
                scroll && 'shadow-md'
            }`}
        >
            <div className="flex-md-grow-1 order-2">
                <Logo />
            </div>

            <HeaderNav
                cartShow={cartShow}
                cartItemCount={cartItems.length}
                isAuthenticated={user.isAuthenticated}
                userDisplayName={user.displayName}
                onToggleCartUI={onToggleCartUI}
                showModal={() => setShowModal((show) => !show)}
            />

            <Cart
                isAuthenticated={user.isAuthenticated}
                cartShow={cartShow}
                cartItems={cartItems}
                toggleCartUI={() => onToggleCartUI(!cartShow)}
                toggleToCart={onToggleToCart}
                updateCount={onUpdateItemCount}
                price={price}
                showLoginModal={() => setShowModal(true)}
            />

            {/** SHOW USER LOGIN/LOGOUT MODAL */}
            <Modal show={showModal} setShow={handleModalShow} setClose={handleModalClose}>
                {modalContent}
            </Modal>
        </header>
    );
};

const mapStateToProps = (state) => ({
    cartShow: state.cart.cartShow,
    price: state.cart.price,
    cartItems: state.cart.cartItems,
    user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
    onAuthRedirectPath: (path) => dispatch(actions.authRedirectPath(path)),
    onToggleCartUI: (bool) => dispatch(actions.toggleCartUI(bool)),
    onToggleToCart: (add, item) => dispatch(actions.toggleToCart(add, item)),
    onUpdateItemCount: (id, identifier) => dispatch(actions.updateItemCount(id, identifier)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
