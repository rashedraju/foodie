import { Dropdown } from 'react-bootstrap';
import { BsChevronCompactDown } from 'react-icons/bs';
import styled, { css } from 'styled-components';

const BaseNavItem = css`
    display: flex;
    align-items: center;
    cursor: pointer;
    outline: none;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
`;

export const NavItemAuthUser = styled.div`
    ${BaseNavItem};
    display: flex;
    position: relative;
    order: 2;
    margin-left: auto;
    @media only screen and (max-width: 768px) {
        order: 1;
        margin-left: unset;
    }
`;

export const NavItemTitle = styled.div`
    display: flex;
    align-items: center;
    @media only screen and (max-width: 568px) {
        display: none;
    }
`;

export const NavItemCart = styled.div`
    ${BaseNavItem};
    position: relative;
    order: 3;
`;

export const StyledCartItemCount = styled.div`
    position: absolute;
    top: -1px;
    left: 25px;
    width: 1rem;
    height: 1rem;
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.white};
    font-size: 75%;
    text-align: center;
    line-height: 1rem;
    border-radius: 50%;
    opacity: ${({ itemexist }) => (itemexist ? 1 : 0)};
    visibility: ${({ itemexist }) => (itemexist ? 'visible' : 'hidden')};
`;

export const NavUserMenu = styled.div`
    position: absolute;
    top: 100%;
    margin-top: ${({ show }) => (show === 'true' ? '1rem' : '0rem')};
    background-color: #fff;
    box-shadow: ${({ theme }) => theme.shadow.sm};
    opacity: ${({ show }) => (show === 'true' ? 1 : 0)};
    visibility: ${({ show }) => (show === 'true' ? 'visible' : 'hidden')};
    transition: all 0.2s ease-out;
`;

export const NavUserMenuItem = styled(Dropdown.Item)`
    cursor: pointer;
    padding: 0.5rem;
`;

export const DropdownToggleArrow = styled(BsChevronCompactDown)`
    transition: all 0.3s ease;
    transform: ${({ show }) => show === 'true' && ' rotate(180deg) translateY(-5%)'};
`;
