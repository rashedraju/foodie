import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Icon } from '../../../assets/svg/logo.svg';
import { LogoTitle, StyledLogo } from './styled';

const Logo = () => (
    <NavLink
        exact
        to="/"
        style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}
    >
        <StyledLogo>
            <Icon width="24px" height="24px" />
        </StyledLogo>
        {/* <span className="text-primary font-weight-bold ml-1">Foodie</span> */}
        <LogoTitle>Foodie</LogoTitle>
    </NavLink>
);

export default Logo;
