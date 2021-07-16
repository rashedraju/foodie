import styled from 'styled-components';
import { slideRight } from './animations';

export const StyledCheckoutStep = styled.div`
    width: 100%;
    animation: ${slideRight} 0.5s ease;
    margin: 1rem 0;
    @media (max-width: 768px) {
        width: 75%;
    }
`;

export const StyledHeader = styled.header`
    background: #fff;
    position: sticky;
    top: 0;
    z-index: 888;
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: space-between;
    box-shadow: ${({ isscrolling, theme }) => isscrolling && theme.shadow.md};
`;

export const StyledSignup = styled.section`
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 1rem;
    width: 100%;
    overflow: hidden;
    padding: 2rem;
    background-image: linear-gradient(to top, #fff, #ccd4e9, #fff);
    @media only screen and (max-width: 567px) {
        background: #fff;
    }
`;
