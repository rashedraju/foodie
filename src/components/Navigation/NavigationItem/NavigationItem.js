import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { ReactComponent as PersonIcon } from '../../../assets/svg/person-circle-outline.svg';
import { ReactComponent as CartIcon } from '../../../assets/svg/cart-outline.svg';
import styles from './NavigationItem.module.scss';

const NavigationItem = props => {
    const navUser = (
        <div className={styles.navUser}>
            <div className={styles.navUser__toggle}> {props.userDisplayName} </div>
            <ul className={styles.navUser__menu} ref={navUserMenuRef}>
                <NavLink to="./cart" className="dropdown-item">My Order</NavLink>
                <Dropdown.Item className="dropdown-item pointer" onClick={props.showModal}>Logout</Dropdown.Item>
            </ul>
        </div>
    );

    const navItem = [
        {
            icon: <PersonIcon fill="#D60E64" width="32" height="32" />,
            title: props.isAuthenticated ? navUser : "Login",
            classes: "order-1 order-md-2",
            clicked: !props.isAuthenticated ? props.showModal : () => { },
        },
        {
            icon: <CartIcon width="32" height="32" />,
            classes: "order-3",
            clicked: () => props.history.push('./cart')
        }
    ];
    return (
        navItem.map((el, i) => (<div className={`nav-item pr-sm-4 pr-sm pointer ${el.classes}`} key={i} onClick={el.clicked}>
            {el.icon}<div className="d-none d-sm-inline-block"> {el.title} </div>
        </div>))
    );
}



export default withRouter(NavigationItem);