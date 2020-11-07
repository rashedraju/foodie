import React from 'react';

import { ReactComponent as PersonIcon } from '../../../assets/svg/person-circle-outline.svg';
import { ReactComponent as CartIcon } from '../../../assets/svg/cart-outline.svg';
import { NavLink } from 'react-router-dom';

const navigationItem = () => {
    const navItem = [
        {
            icon: <PersonIcon fill="#D60E64" width="32" height="32" />,
            title: 'Login',
            link: './',
            toggle: 'modal',
            target: 'loginModal'
        },
        {
            icon: <CartIcon width="32" height="32" />,
            link: '/cart'
        }
    ];
    return (
        navItem.map((el, i) => {
            return (<li className="nav-item pr-sm-4 pr-sm" key={i}>
                <NavLink exact to={el.link} className="nav-link" data-toggle={el.toggle} data-target={`#${el.target}`}>{el.icon}<span className="d-none d-sm-inline"> {el.title} </span></NavLink>
            </li>)
        })
    );
}

export default navigationItem;