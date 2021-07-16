import styled, { css } from 'styled-components';

export const CartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 20rem;
    height: 100%;
    position: fixed;
    top: 3rem;
    right: ${({ show }) => (show ? '0rem' : '-20rem')};
    background-color: ${({ theme }) => theme.color.light};
    transition: right 0.2s ease;
    box-shadow: ${({ theme }) => theme.shadow.sm};
    z-index: 888;

    ${(props) =>
        props.show &&
        css`
            @media only screen and (max-width: 991px) {
                width: 100%;
            }
        `}
`;

export const CartItemsStyled = styled.div`
    flex: 1;
    overflow: auto;
`;

export const CartAmount = styled.div`
    padding: 1rem 1rem 0 1rem;
    background-color: #fff;
    flex: 1;
`;
