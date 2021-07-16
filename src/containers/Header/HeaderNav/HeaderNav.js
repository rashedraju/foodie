import React, { useEffect, useState } from 'react';
import { AiOutlineLogin } from 'react-icons/ai';
import { IoBagCheckOutline } from 'react-icons/io5';
import { withRouter } from 'react-router-dom';
import { ReactComponent as CartIcon } from '../../../assets/svg/cart-outline.svg';
import { ReactComponent as PersonIcon } from '../../../assets/svg/person-circle-outline.svg';
import {
    NavItemAuthUser,
    NavItemTitle,
    NavUserMenu,
    NavUserMenuItem,
    DropdownToggleArrow,
    NavItemCart,
    StyledCartItemCount,
} from './styled';

const HeaderNav = (props) => {
    const {
        userDisplayName,
        showModal,
        isAuthenticated,
        cartItemCount,
        cartShow,
        onToggleCartUI,
        history,
    } = props;

    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        // close user menu dropdown when click outside
        const handleClickOutside = () => {
            setShowDropdown(false);
        };
        if (showDropdown) {
            window.addEventListener('click', handleClickOutside);
        }

        // cleanup work when component will unmount
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [showDropdown]);

    const toggleUserMenu = () => {
        setShowDropdown((show) => !show);
    };

    return (
        <>
            <NavItemAuthUser onClick={!isAuthenticated ? showModal : toggleUserMenu}>
                <PersonIcon fill="#D60E64" width="32" height="32" />
                <NavItemTitle>
                    {isAuthenticated ? (
                        <>
                            {userDisplayName}
                            <DropdownToggleArrow show={showDropdown.toString()} />
                        </>
                    ) : (
                        'Login'
                    )}
                </NavItemTitle>
                <NavUserMenu show={showDropdown.toString()}>
                    <NavUserMenuItem eventKey="2" onClick={() => history.push('./my-orders')}>
                        <IoBagCheckOutline /> &nbsp; My orders
                    </NavUserMenuItem>
                    <NavUserMenuItem onClick={showModal} eventKey="1">
                        <AiOutlineLogin /> &nbsp; Logout
                    </NavUserMenuItem>
                </NavUserMenu>
            </NavItemAuthUser>
            <NavItemCart onClick={() => onToggleCartUI(!cartShow)}>
                <CartIcon width="32" height="32" />
                <StyledCartItemCount itemexist={!!cartItemCount}>
                    {!!cartItemCount && cartItemCount.toString()}
                </StyledCartItemCount>
            </NavItemCart>
        </>
    );
};

export default withRouter(HeaderNav);
