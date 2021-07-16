import styled from 'styled-components';

export const CartItemWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    border: ${({ theme }) => theme.border.sm};
    margin: 0.5rem;
    background-color: #fff;
`;

export const ItemCount = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ItemImg = styled.img`
    max-width: 3rem;
    max-height: 3rem;
    padding: 0 0.5rem;
`;

export const ItemTitle = styled.div`
    flex: 1;
`;

export const ItemPrice = styled.div`
    padding: 0 0.5rem;
    color: ${({ theme }) => theme.color.primary};
`;
