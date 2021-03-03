import React from 'react';
import { connect } from 'react-redux';

import { NavLink, withRouter } from 'react-router-dom';
import { ReactComponent as PersonIcon } from '../../../assets/svg/person-circle-outline.svg';
import { ReactComponent as CartIcon } from '../../../assets/svg/cart-outline.svg';

const navigationItem = props => {
    const navItem = [
        {
            icon: <PersonIcon fill="#D60E64" width="32" height="32" />,
            title: props.isAuthenticated ? props.userDisplayName : 'Login',
            link: props.location.pathname,
            clicked: !props.isAuthenticated ? props.showLoginModal : () => { }
        },
        {
            icon: <CartIcon width="32" height="32" />,
            link: '/cart'
        }
    ];
    return (
        navItem.map((el, i) => (<li className="nav-item pr-sm-4 pr-sm" key={i}>
            <NavLink exact to={el.link} className="nav-link" onClick={el.clicked}>{el.icon}<span className="d-none d-sm-inline"> {el.title} </span></NavLink>
        </li>))
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.authStatus.isAuthenticated,
    userDisplayName: state.auth.logedUser.displayName,
});

export default withRouter(connect(mapStateToProps)(navigationItem));