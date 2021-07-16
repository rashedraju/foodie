import styled from 'styled-components';

export const StyledStep = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    width: 100%;
    margin-bottom: 1rem;
    & {
        > :first-child {
            > :first-child {
                &::before {
                    display: none;
                }
            }
        }
        > :last-child {
            > :first-child {
                &::after {
                    display: none;
                }
            }
        }
    }
    @media only screen and (max-width: 767px) {
        & {
            width: 100%;
        }
    }
`;

export const StepItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
`;

export const StyledStepNumber = styled.div`
    background-color: ${({ active, theme }) => (active ? theme.color.primary : theme.color.light)};
    color: ${({ active, theme }) => (active ? theme.color.white : theme.color.secondary)};
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    text-align: center;
    line-height: 3rem;
    font-size: 1.5rem;
    z-index: 2;
    position: relative;
    &::after,
    &::before {
        content: '';
        width: 150%;
        height: 0.3rem;
        background-color: ${({ theme }) => theme.color.light};
        z-index: 1;
        position: absolute;
        top: 50%;
    }
    &::before {
        right: 100%;
    }
    &::after {
        left: 100%;
    }
    @media only screen and (max-width: 567px) {
        &::after,
        &::before {
            width: 100%;
        }
    }
`;

export const StepTitle = styled.div`
    text-align: center;
    color: ${({ theme }) => theme.color.secondary};
`;
