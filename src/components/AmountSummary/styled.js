import styled from 'styled-components';

export const DL = styled.dl`
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 0.5rem 0rem 0.5rem;
    padding: 0rem 0.5rem;
`;

export const DT = styled.dt`
    margin-bottom: 0;
    font-weight: ${({ isbold }) => (isbold === true ? 'bold' : 'normal')};
`;

export const DD = styled.dd`
    font-weight: ${({ isbold }) => isbold === true && 'bold'};
`;
