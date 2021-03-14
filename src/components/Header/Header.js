import React, { useCallback, useEffect, useState } from 'react';
import { Alert, Button, Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import LoginForm from '../Form/LoginForm/LoginForm';
import Logo from '../UI/Logo/Logo';
import Modal from '../UI/Modal/Modal';
import HeaderNav from './HeaderNav/HeaderNav';

const Header = (props) => {
    const { error, errMsg, isLoading, onLogout, isAuthenticated, userDisplayName } = props;

    const [showModal, setShowModal] = useState(false);
    const [scroll, setScroll] = useState(false);

    const handleModalShow = () => setShowModal(true);

    const handleModalClose = useCallback(() => {
        setShowModal(false);
    }, []);

    useEffect(() => {
        handleModalClose();

        // navbar shadow on scroll
        window.addEventListener('scroll', () => setScroll(window.scrollY > 1));
    }, [isAuthenticated, handleModalClose]);

    const logoutConfirmDialog = (
        <>
            <h2 className="mb-3">Logging out?</h2>
            <p className="text-black-50">Thanks for stopping by. See you again soon!</p>

            {/** show error */}
            {error && (
                <Alert variant="danger" style={{ marginBottom: '2rem' }}>
                    {errMsg}
                </Alert>
            )}

            <div className="d-flex">
                <Button
                    className="border border-primary btn-white w-100 mr-2 shadow-none"
                    onClick={handleModalClose}
                >
                    Cancel
                </Button>
                <Button
                    variant="primary"
                    className="w-100 ml-2 shadow-none"
                    disabled={isLoading}
                    onClick={onLogout}
                >
                    {isLoading ? (
                        <Spinner as="span" role="status" animation="border" size="sm" />
                    ) : (
                        'LOG OUT'
                    )}
                </Button>
            </div>
        </>
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
                isAuthenticated={isAuthenticated}
                userDisplayName={userDisplayName}
                showModal={() => setShowModal((show) => !show)}
            />

            {/** SHOW USER LOGIN MODAL */}
            <Modal
                title="Login"
                show={showModal}
                setShow={handleModalShow}
                setClose={handleModalClose}
            >
                {isAuthenticated ? (
                    logoutConfirmDialog
                ) : (
                    <LoginForm closeLoginModal={handleModalClose} />
                )}
            </Modal>
        </header>
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.authStatus.isAuthenticated,
    isLoading: state.auth.authStatus.loading,
    error: state.auth.authStatus.error,
    errMsg: state.auth.authStatus.msg,
    userDisplayName: state.auth.logedUser.displayName,
});

const mapDispatchToProps = (dispatch) => ({
    onLogout: () => dispatch(actions.logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
