import styled from 'styled-components';

export const MethodToggler = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    &:hover,
    &:focus,
    &:active {
        text-decoration: none;
    }
`;

export const PaymentDetails = styled.div`
    max-height: ${({ active }) => (active ? '30rem' : '0rem')};
    opacity: ${({ active }) => (active ? '1' : '0')};
    visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
    transition: all 0.5s ease;
`;
