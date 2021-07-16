import styled from 'styled-components';

export const StyledLogo = styled.div`
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    padding: 0.5rem;
    align-items: center;
    background-color: ${({ theme }) => theme.color.primary};
    display: flex;
    align-items: center;
`;

export const LogoTitle = styled.span`
    color: ${({ theme }) => theme.color.primary};
    font-weight: bold;
    margin-left: 0.2rem;
`;
