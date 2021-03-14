import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Icon } from '../../../assets/svg/logo.svg';
import styles from './Logo.module.scss';

const logo = () => (
    <NavLink exact to="/" className="d-inline-flex align-items-center text-decoration-none">
        <div className={styles.logo}>
            <Icon width="24px" height="24px" />
        </div>
        <span className="text-primary font-weight-bold ml-1">Foodie</span>
    </NavLink>
);

export default logo;
