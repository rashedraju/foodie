import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../UI/Logo/Logo';
import NavigationItem from './NavigationItem/NavigationItem';
import Modal from '../UI/Modal/Modal';

const navigation = () => (
    <nav className="navbar navbar-light py-2 px-4">
        <NavLink exact to="/" className="navbar-brand">
            <Logo /> <span className="text-primary font-weight-bold">Goodie</span>
        </NavLink>
        {/** SHOW USER LOGIN MODAL */}
        <ul className="navbar-nav flex-row ml-auto">
            <Modal
                title="Login"
                type="login"
                id={'loginModal'} />
            <NavigationItem />
        </ul>
    </nav>
);

export default navigation;
