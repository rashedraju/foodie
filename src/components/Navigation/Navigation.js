import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button, Spinner, Alert, Navbar } from 'react-bootstrap'
import Logo from '../UI/Logo/Logo';
import NavigationItem from './NavigationItem/NavigationItem';
import LoginForm from '../Form/LoginForm/LoginForm';
import Modal from '../UI/Modal/Modal';
import * as actions from '../../store/actions';

const Navigation = props => {
    const { error, errMsg, isLoading, onLogout, isAuthenticated, userDisplayName } = props;

    const [showModal, setShowModal] = useState(false);
    const [scroll, setScroll] = useState(false);

    // const handleModalClose = () => setShowModal(false);
    const handleModalShow = () => setShowModal(true);

    const handleModalClose = useCallback(() => {
        setShowModal(false)
    }, [])

    useEffect(() => {
        handleModalClose();

        // navbar shadow on scroll
        window.addEventListener('scroll', () => setScroll(window.scrollY > 1))

    }, [isAuthenticated, handleModalClose])

    const logoutConfirmDialog = (
        <React.Fragment>
            <h2 className="mb-3">Logging out?</h2>
            <p className="text-black-50">Thanks for stopping by. See you again soon!</p>

            {/** show error */}
            {error && (
                <Alert variant="danger" style={{ marginBottom: "2rem" }}>
                    {errMsg}
                </Alert>
            )}

            <div className="d-flex">
                <Button
                    className="border border-primary btn-white w-100 mr-2 shadow-none"
                    onClick={handleModalClose}>Cancel</Button>
                <Button
                    variant="primary"
                    className="w-100 ml-2 shadow-none"
                    {...(isLoading) && { disabled: true }}
                    onClick={onLogout}>
                    {isLoading ? (
                        <Spinner
                            as="span"
                            role="status"
                            animation="border"
                            size="sm" />
                    ) : 'LOG OUT'}</Button>
            </div>
        </React.Fragment>
    );
    return (
        <Navbar
            bg="light"
            sticky="top"
            className={`py-2 px-4 bg-white justify-content-between ${scroll && 'shadow-md'}`} >
            <div className="flex-md-grow-1 order-2">
                <NavLink exact to="/" className="navbar-brand">
                    <Logo /> <span className="text-primary font-weight-bold">Foodie</span>
                </NavLink>
            </div>

            {/** SHOW USER LOGIN MODAL */}
            <Modal
                title="Login"
                show={showModal}
                setShow={handleModalShow}
                setClose={handleModalClose} >
                {isAuthenticated ? logoutConfirmDialog : <LoginForm closeLoginModal={handleModalClose} />}
            </Modal>
            <NavigationItem
                isAuthenticated={isAuthenticated}
                userDisplayName={userDisplayName}
                showModal={() => setShowModal((showModal) => !showModal)} />
        </Navbar>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.authStatus.isAuthenticated,
    isLoading: state.auth.authStatus.loading,
    error: state.auth.authStatus.error,
    errMsg: state.auth.authStatus.msg,
    userDisplayName: state.auth.logedUser.displayName,
});

const mapDispatchToProps = dispatch => ({
    onLogout: () => dispatch(actions.logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
