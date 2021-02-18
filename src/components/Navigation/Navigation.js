import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../UI/Logo/Logo';
import NavigationItem from './NavigationItem/NavigationItem';
import LoginForm from '../Form/LoginForm/LoginForm';
import Modal from '../UI/Modal/Modal';

const Navigation = () => {
    const [showModal, setShowModal] = useState(false);

    const handleModalClose = () => setShowModal(false);
    const handleModalShow = () => setShowModal(true);

    return (
        <nav className="navbar navbar-light py-2 px-4">
            <NavLink exact to="/" className="navbar-brand">
                <Logo /> <span className="text-primary font-weight-bold">Foodie</span>
            </NavLink>

            {/** SHOW USER LOGIN MODAL */}
            <ul className="navbar-nav flex-row ml-auto">
                <Modal
                    title="Login"
                    show={showModal}
                    setShow={handleModalShow}
                    setClose={handleModalClose} >
                    <LoginForm closeLoginModal={handleModalClose} />
                </Modal>
                <NavigationItem showLoginModal={() => setShowModal(!showModal)} />
            </ul>
        </nav >
    )
}

export default Navigation;
