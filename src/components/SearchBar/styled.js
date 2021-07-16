import styled from 'styled-components';

export const StyledSearchBar = styled.form`
    width: 100%;
    display: flex;
    @media only screen and (min-width: 567px) {
        width: 66.66667%;
        margin: ${({ iscenter }) => iscenter === 'true' && '1rem auto'};
    }
`;

export const InputBox = styled.input.attrs({ type: 'text' })`
    flex: 1;
    outline: none;
    color: ${({ theme }) => theme.color.secondary};
    margin: 0;
    padding: 1rem;
`;
