import styled from 'styled-components';

export const StyledOrderConfirm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const StyledTitle = styled.div`
    padding: 0.2rem 1.5rem;
    margin: 0.5rem 0;
    border-radius: 5rem;
    text-align: center;
    background-color: ${({ error, theme }) => (error ? theme.color.danger : theme.color.primary)};
    color: #fff;
    font-weight: bold;
    letter-spacing: 1px;
`;

export const ButtonWrapper = styled.div`
    padding: 0.5rem 1rem;
    margin: 0.5rem 0;
    border-radius: 1rem;
    text-align: center;
`;

export const IconWrapper = styled.div`
    color: ${({ error, theme }) => (error ? theme.color.danger : theme.color.primary)};
    margin: 2rem 0;
    font-size: 5rem;
`;
